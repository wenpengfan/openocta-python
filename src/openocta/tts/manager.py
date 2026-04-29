"""TTS Module - Text-to-Speech integration."""

from typing import Dict, Any, List, Optional
from dataclasses import dataclass
from pathlib import Path
import asyncio
import logging

logger = logging.getLogger(__name__)

@dataclass
class TTSConfig:
    """TTS configuration."""
    provider: str = "openai"
    model: str = "tts-1"
    voice: str = "alloy"
    speed: float = 1.0
    output_format: str = "mp3"

class TTSManager:
    """Manager for text-to-speech."""
    
    def __init__(self, config: Optional[TTSConfig] = None, output_dir: Optional[Path] = None):
        self.config = config or TTSConfig()
        self.output_dir = output_dir
        self._client: Any = None
        
        if output_dir:
            output_dir.mkdir(parents=True, exist_ok=True)
    
    async def initialize(self) -> None:
        """Initialize TTS client."""
        if self.config.provider == "openai":
            try:
                from openai import AsyncOpenAI
                self._client = AsyncOpenAI()
                logger.info("TTS initialized with OpenAI")
            except ImportError:
                logger.warning("OpenAI not installed, TTS disabled")
    
    async def synthesize(self, text: str, output_path: Optional[Path] = None) -> Optional[Path]:
        """Synthesize speech from text."""
        if not self._client:
            logger.warning("TTS not initialized")
            return None
        
        if not output_path:
            import uuid
            filename = f"{uuid.uuid4()}.{self.config.output_format}"
            output_path = self.output_dir / filename if self.output_dir else Path(filename)
        
        try:
            if self.config.provider == "openai":
                response = await self._client.audio.speech.create(
                    model=self.config.model,
                    voice=self.config.voice,
                    input=text,
                    speed=self.config.speed,
                )
                
                with open(output_path, "wb") as f:
                    f.write(response.content)
                
                return output_path
        except Exception as e:
            logger.error(f"TTS synthesis failed: {e}")
            return None
    
    async def list_voices(self) -> List[str]:
        """List available voices."""
        if self.config.provider == "openai":
            return ["alloy", "echo", "fable", "onyx", "nova", "shimmer"]
        return []
    
    def update_config(self, **kwargs) -> None:
        """Update TTS config."""
        for key, value in kwargs.items():
            if hasattr(self.config, key):
                setattr(self.config, key, value)

def create_tts_manager(output_dir: Optional[Path] = None) -> TTSManager:
    """Create TTS manager."""
    return TTSManager(output_dir=output_dir)
