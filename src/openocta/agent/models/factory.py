"""Agent models - Model factory for LLM providers."""

from typing import Any, Dict, Optional
from dataclasses import dataclass
from enum import Enum

class ModelProvider(Enum):
    """Supported model providers."""
    ANTHROPIC = "anthropic"
    OPENAI = "openai"
    MINIMAX = "minimax"
    LOCAL = "local"

@dataclass
class ModelConfig:
    """Model configuration."""
    provider: ModelProvider
    model_name: str
    api_key: Optional[str] = None
    base_url: Optional[str] = None
    max_tokens: int = 4096
    temperature: float = 0.7

class ModelFactory:
    """Factory for creating LLM clients."""
    
    def __init__(self):
        self.providers: Dict[str, Any] = {}
    
    def create_model(self, config: ModelConfig) -> Any:
        """Create model client based on provider."""
        provider = config.provider
        
        if provider == ModelProvider.ANTHROPIC:
            return self._create_anthropic(config)
        elif provider == ModelProvider.OPENAI:
            return self._create_openai(config)
        elif provider == ModelProvider.LOCAL:
            return self._create_local(config)
        else:
            raise ValueError(f"Unsupported provider: {provider}")
    
    def _create_anthropic(self, config: ModelConfig) -> Any:
        """Create Anthropic client."""
        # Placeholder - in production, use langchain-anthropic
        return {
            "provider": "anthropic",
            "model": config.model_name,
            "api_key": config.api_key,
        }
    
    def _create_openai(self, config: ModelConfig) -> Any:
        """Create OpenAI client."""
        # Placeholder - in production, use langchain-openai
        return {
            "provider": "openai",
            "model": config.model_name,
            "api_key": config.api_key,
            "base_url": config.base_url,
        }
    
    def _create_local(self, config: ModelConfig) -> Any:
        """Create local model placeholder."""
        return {
            "provider": "local",
            "model": config.model_name,
        }

def create_model_from_config(config_dict: Dict[str, Any]) -> ModelConfig:
    """Create ModelConfig from dict."""
    provider_str = config_dict.get("provider", "anthropic")
    provider = ModelProvider(provider_str.lower())
    
    return ModelConfig(
        provider=provider,
        model_name=config_dict.get("model", "claude-3-sonnet"),
        api_key=config_dict.get("apiKey"),
        base_url=config_dict.get("baseUrl"),
        max_tokens=config_dict.get("maxTokens", 4096),
        temperature=config_dict.get("temperature", 0.7),
    )
