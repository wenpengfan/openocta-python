"""TTS Handlers - Text-to-Speech."""

from typing import Dict, Any, Optional, List
from pathlib import Path
import asyncio
import logging

logger = logging.getLogger(__name__)

async def handle_tts_status(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get TTS status."""
    tts_manager = context.get("tts_manager")
    
    if tts_manager:
        return {
            "status": {
                "enabled": True,
                "provider": tts_manager.config.provider,
                "model": tts_manager.config.model,
                "voice": tts_manager.config.voice,
            }
        }
    
    return {"status": {"enabled": False}}

async def handle_tts_providers(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """List TTS providers."""
    return {
        "providers": [
            {"id": "openai", "name": "OpenAI TTS", "voices": ["alloy", "echo", "fable", "onyx", "nova", "shimmer"]},
            {"id": "azure", "name": "Azure Speech", "voices": []},
        ]
    }

async def handle_tts_enable(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Enable TTS."""
    tts_manager = context.get("tts_manager")
    
    if tts_manager:
        await tts_manager.initialize()
        return {"ok": True}
    
    return {"ok": False, "error": "TTS manager not initialized"}

async def handle_tts_disable(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Disable TTS."""
    tts_manager = context.get("tts_manager")
    
    if tts_manager:
        tts_manager._client = None
        return {"ok": True}
    
    return {"ok": False}

async def handle_tts_convert(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Convert text to speech."""
    tts_manager = context.get("tts_manager")
    text = params.get("text")
    
    if not text:
        return {"ok": False, "error": "text required"}
    
    if tts_manager:
        path = await tts_manager.synthesize(text)
        if path:
            return {"ok": True, "path": str(path)}
    
    return {"ok": False, "error": "TTS not initialized"}

async def handle_tts_set_provider(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Set TTS provider."""
    tts_manager = context.get("tts_manager")
    provider = params.get("provider")
    
    if not provider:
        return {"ok": False, "error": "provider required"}
    
    if tts_manager:
        tts_manager.update_config(provider=provider)
        return {"ok": True, "provider": provider}
    
    return {"ok": False}

async def handle_tts_synthesize(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Synthesize speech."""
    return await handle_tts_convert(params, context)

async def handle_tts_voices(params: Dict[str, Any], context: Dict[str, Any]) -> List[str]:
    """List TTS voices."""
    tts_manager = context.get("tts_manager")
    
    if tts_manager:
        return await tts_manager.list_voices()
    
    return []