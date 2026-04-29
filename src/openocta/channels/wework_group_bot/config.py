"""WeWork Group Bot Channel - Configuration schema.

企微群机器人配置：
- webhook_key: 群机器人 webhook key
- employee_ids: 关联的数字员工 ID 列表（这些员工的回复会发送到此群）
"""

from typing import Optional, List
from pydantic import BaseModel

class WeWorkGroupBotConfig(BaseModel):
    """企微群机器人通道配置."""
    webhook_key: str
    employee_ids: List[str] = []  # 关联的数字员工 ID 列表
    
class WeWorkGroupBotRuntimeConfig(BaseModel):
    """Runtime configuration for WeWork Group Bot."""
    enabled: bool = False
    config: WeWorkGroupBotConfig
