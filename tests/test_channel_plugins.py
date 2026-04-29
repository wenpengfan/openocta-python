"""Test Channel Plugins."""

import pytest
from openocta.channels.types import OutboundMessage
from openocta.channels.telegram import TelegramPlugin, TelegramConfig, TelegramRuntime
from openocta.channels.discord import DiscordPlugin, DiscordConfig, DiscordRuntime
from openocta.channels.slack import SlackPlugin, SlackConfig, SlackRuntime
from openocta.channels.weixin import WeixinPlugin, WeChatConfig, WeixinRuntime
from openocta.channels.wework import WeWorkPlugin, WeWorkConfig, WeWorkRuntime
from openocta.channels.dingtalk import DingTalkPlugin, DingTalkConfig, DingTalkRuntime
from openocta.channels.feishu import FeishuPlugin, FeishuConfig, FeishuRuntime
from openocta.channels.whatsapp import WhatsAppPlugin, WhatsAppConfig, WhatsAppRuntime
from openocta.channels.qq import QQPlugin, QQConfig, QQRuntime


# Telegram tests
def test_telegram_plugin():
    plugin = TelegramPlugin()
    assert plugin.id() == "telegram"
    assert plugin.meta().label == "Telegram"
    assert "telegram.send" in plugin.gateway_methods()


def test_telegram_config():
    config = TelegramConfig(bot_token="test_token", parse_mode="HTML")
    assert config.bot_token == "test_token"
    assert config.parse_mode == "HTML"


def test_telegram_runtime():
    config = TelegramConfig(bot_token="test_token")
    runtime = TelegramRuntime(config)
    assert runtime.is_connected() == False
    status = runtime.get_status()
    assert status["bot_token_set"] == True


# Discord tests
def test_discord_plugin():
    plugin = DiscordPlugin()
    assert plugin.id() == "discord"
    assert plugin.meta().label == "Discord"


def test_discord_config():
    config = DiscordConfig(bot_token="xoxb-test", guild_id="12345")
    assert config.bot_token == "xoxb-test"
    assert config.guild_id == "12345"


def test_discord_runtime():
    config = DiscordConfig(bot_token="xoxb-test")
    runtime = DiscordRuntime(config)
    assert runtime.is_connected() == False


# Slack tests
def test_slack_plugin():
    plugin = SlackPlugin()
    assert plugin.id() == "slack"
    assert plugin.meta().label == "Slack"


def test_slack_config():
    config = SlackConfig(bot_token="xoxb-test", signing_secret="secret")
    assert config.bot_token == "xoxb-test"
    assert config.signing_secret == "secret"


# WeChat tests
def test_weixin_plugin():
    plugin = WeixinPlugin()
    assert plugin.id() == "weixin"
    assert plugin.meta().label == "WeChat"


def test_wechat_config():
    config = WeChatConfig(app_id="wx123", app_secret="secret", token="mytoken")
    assert config.app_id == "wx123"
    assert config.token == "mytoken"


def test_weixin_runtime():
    config = WeChatConfig(app_id="wx123", app_secret="secret", token="mytoken")
    runtime = WeixinRuntime(config)
    assert runtime.is_connected() == False


# WeWork tests
def test_wework_plugin():
    plugin = WeWorkPlugin()
    assert plugin.id() == "wework"
    assert plugin.meta().label == "WeWork"


def test_wework_config():
    config = WeWorkConfig(corp_id="corp123", agent_id="agent1", secret="secret")
    assert config.corp_id == "corp123"
    assert config.agent_id == "agent1"


# DingTalk tests
def test_dingtalk_plugin():
    plugin = DingTalkPlugin()
    assert plugin.id() == "dingtalk"
    assert plugin.meta().label == "DingTalk"


def test_dingtalk_config():
    config = DingTalkConfig(app_key="key123", app_secret="secret", agent_id="agent1")
    assert config.app_key == "key123"


# Feishu tests
def test_feishu_plugin():
    plugin = FeishuPlugin()
    assert plugin.id() == "feishu"
    assert plugin.meta().label == "Feishu"


def test_feishu_config():
    config = FeishuConfig(app_id="app123", app_secret="secret")
    assert config.app_id == "app123"


# WhatsApp tests
def test_whatsapp_plugin():
    plugin = WhatsAppPlugin()
    assert plugin.id() == "whatsapp"
    assert plugin.meta().label == "WhatsApp"


def test_whatsapp_config():
    config = WhatsAppConfig(phone_number_id="12345", access_token="token123")
    assert config.phone_number_id == "12345"
    assert config.access_token == "token123"


# QQ tests
def test_qq_plugin():
    plugin = QQPlugin()
    assert plugin.id() == "qq"
    assert plugin.meta().label == "QQ"


def test_qq_config():
    config = QQConfig(app_id="qq123", app_secret="secret", sandbox=True)
    assert config.app_id == "qq123"
    assert config.sandbox == True


# Registry tests
def test_registry_with_plugins():
    from openocta.channels.registry import create_default_registry
    registry = create_default_registry()
    plugins = registry.list()
    assert len(plugins) == 9  # All 9 channels
    
    # Check meta order
    meta = registry.list_meta()
    assert meta[0].id == "telegram"
    assert meta[1].id == "discord"


@pytest.mark.asyncio
async def test_channel_send():
    # Test send method exists
    config = TelegramConfig(bot_token="test")
    runtime = TelegramRuntime(config)
    result = await runtime.send(
        OutboundMessage(
            channel_id="telegram",
            account_id="test",
            to_user="12345",
            content="Hello",
        )
    )
    # Should return False because no real connection
    assert result == False