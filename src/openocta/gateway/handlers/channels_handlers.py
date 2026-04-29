"""Channels Handlers - Channel management."""

from typing import Dict, Any, Optional, List
from datetime import datetime
import asyncio
import logging

logger = logging.getLogger(__name__)

async def handle_channels_status(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get channel status.
    
    Frontend expects: ChannelsStatusSnapshot {
        ts: number,
        channelOrder: string[],
        channelLabels: Record<string, string>,
        channelDetailLabels?: Record<string, string>,
        channelSystemImages?: Record<string, string>,
        channelMeta?: ChannelUiMetaEntry[],
        channels: Record<string, unknown>,
        channelAccounts: Record<string, ChannelAccountSnapshot[]>,
        channelDefaultAccountId: Record<string, string>,
    }
    """
    from openocta.channels import get_channel_manager
    import time
    
    manager = get_channel_manager()
    channels = manager.list_channels()
    
    # Build frontend-compatible format
    channel_order = []
    channel_labels = {}
    channel_detail_labels = {}
    channel_system_images = {}
    channel_meta = []
    channels_dict = {}
    channel_accounts = {}
    channel_default_account_id = {}
    
    for c in channels:
        channel_id = getattr(c, "id", "")
        if not channel_id:
            continue
            
        channel_order.append(channel_id)
        channel_labels[channel_id] = getattr(c, "label", channel_id)
        channel_detail_labels[channel_id] = getattr(c, "detail_label", "")
        channel_system_images[channel_id] = getattr(c, "system_image", "")
        
        channel_meta.append({
            "id": channel_id,
            "label": getattr(c, "label", channel_id),
            "detailLabel": getattr(c, "detail_label", ""),
            "systemImage": getattr(c, "system_image", ""),
        })
        
        # Channel status object
        channels_dict[channel_id] = {
            "configured": getattr(c, "configured", False),
            "running": getattr(c, "running", False),
            "connected": getattr(c, "connected", False),
            "lastStartAt": getattr(c, "last_start_at", None),
            "lastStopAt": getattr(c, "last_stop_at", None),
            "lastError": getattr(c, "last_error", None),
            "lastProbeAt": getattr(c, "last_probe_at", None),
        }
        
        # Account info
        account_id = getattr(c, "account_id", "default")
        channel_accounts[channel_id] = [{
            "accountId": account_id,
            "name": getattr(c, "account_name", None),
            "enabled": getattr(c, "enabled", True),
            "configured": getattr(c, "configured", False),
            "connected": getattr(c, "connected", False),
            "running": getattr(c, "running", False),
            "lastConnectedAt": getattr(c, "last_connected_at", None),
            "lastError": getattr(c, "last_error", None),
            "lastStartAt": getattr(c, "last_start_at", None),
            "lastStopAt": getattr(c, "last_stop_at", None),
            "lastInboundAt": getattr(c, "last_inbound_at", None),
            "lastOutboundAt": getattr(c, "last_outbound_at", None),
            "lastProbeAt": getattr(c, "last_probe_at", None),
        }]
        channel_default_account_id[channel_id] = account_id
    
    return {
        "ts": int(time.time() * 1000),
        "channelOrder": channel_order,
        "channelLabels": channel_labels,
        "channelDetailLabels": channel_detail_labels,
        "channelSystemImages": channel_system_images,
        "channelMeta": channel_meta,
        "channels": channels_dict,
        "channelAccounts": channel_accounts,
        "channelDefaultAccountId": channel_default_account_id,
    }

async def handle_channels_logout(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Logout from channel."""
    channel_id = params.get("channelId")
    
    if not channel_id:
        return {"ok": False, "error": "channelId required"}
    
    # Placeholder - would disconnect channel
    return {"ok": True, "channelId": channel_id}

async def handle_channels_wework_qr_start(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Start WeWork QR login."""
    # Placeholder - would start QR code generation
    return {
        "ok": True,
        "qrUrl": "",
        "expiresIn": 300,
    }

async def handle_channels_wework_qr_poll(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Poll WeWork QR login status."""
    # Placeholder - would poll login status
    return {
        "status": "waiting",
        "scanned": False,
    }

async def handle_channels_weixin_qr_start(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Start WeChat QR login."""
    # Placeholder - would start QR code generation
    return {
        "ok": True,
        "qrUrl": "",
        "expiresIn": 300,
    }

async def handle_channels_weixin_qr_poll(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Poll WeChat QR login status."""
    # Placeholder - would poll login status
    return {
        "status": "waiting",
        "scanned": False,
    }