"""Logging Module - Structured logging with file rotation."""

from typing import Dict, Any, Optional, List
from pathlib import Path
import logging
import logging.handlers
import json
from datetime import datetime

class StructuredLogFormatter(logging.Formatter):
    """JSON structured log formatter."""
    
    def format(self, record: logging.LogRecord) -> str:
        """Format log record as JSON."""
        log_data = {
            "timestamp": datetime.utcnow().isoformat(),
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
            "module": record.module,
            "function": record.funcName,
            "line": record.lineno,
        }
        
        # Add extra fields
        if hasattr(record, "extra_data"):
            log_data["extra"] = record.extra_data
        
        # Add exception info
        if record.exc_info:
            log_data["exception"] = self.formatException(record.exc_info)
        
        return json.dumps(log_data)

class LogManager:
    """Manager for structured logging."""
    
    def __init__(
        self,
        log_dir: Path,
        app_name: str = "openocta",
        level: int = logging.INFO,
        max_bytes: int = 10 * 1024 * 1024,  # 10MB
        backup_count: int = 5,
    ):
        self.log_dir = log_dir
        self.app_name = app_name
        self.level = level
        self.max_bytes = max_bytes
        self.backup_count = backup_count
        
        log_dir.mkdir(parents=True, exist_ok=True)
        
        self._setup_root_logger()
    
    def _setup_root_logger(self) -> None:
        """Setup root logger with handlers."""
        root_logger = logging.getLogger()
        root_logger.setLevel(self.level)
        
        # Console handler
        console_handler = logging.StreamHandler()
        console_handler.setLevel(self.level)
        console_formatter = logging.Formatter(
            "%(asctime)s [%(levelname)s] %(name)s: %(message)s"
        )
        console_handler.setFormatter(console_formatter)
        root_logger.addHandler(console_handler)
        
        # File handler with rotation
        log_file = self.log_dir / f"{self.app_name}.log"
        file_handler = logging.handlers.RotatingFileHandler(
            log_file,
            maxBytes=self.max_bytes,
            backupCount=self.backup_count,
            encoding="utf-8",
        )
        file_handler.setLevel(self.level)
        file_handler.setFormatter(StructuredLogFormatter())
        root_logger.addHandler(file_handler)
    
    def get_logger(self, name: str) -> logging.Logger:
        """Get logger for a module."""
        return logging.getLogger(name)
    
    def log_with_extra(self, logger: logging.Logger, level: int, message: str, **extra) -> None:
        """Log with extra structured data."""
        record = logger.makeRecord(
            logger.name,
            level,
            None,
            0,
            message,
            (),
            None,
        )
        record.extra_data = extra
        logger.handle(record)

class LogAggregator:
    """Aggregate logs for queries."""
    
    def __init__(self, log_dir: Path):
        self.log_dir = log_dir
    
    def read_logs(
        self,
        start_time: Optional[datetime] = None,
        end_time: Optional[datetime] = None,
        level: Optional[str] = None,
        logger_name: Optional[str] = None,
        limit: int = 100,
    ) -> List[Dict[str, Any]]:
        """Read logs with filters."""
        logs = []
        
        # Read current log file
        log_file = self.log_dir / "openocta.log"
        if not log_file.exists():
            return logs
        
        with open(log_file, "r", encoding="utf-8") as f:
            for line in f:
                try:
                    entry = json.loads(line.strip())
                    
                    # Apply filters
                    if start_time:
                        ts = datetime.fromisoformat(entry["timestamp"])
                        if ts < start_time:
                            continue
                    
                    if end_time:
                        ts = datetime.fromisoformat(entry["timestamp"])
                        if ts > end_time:
                            continue
                    
                    if level and entry["level"] != level:
                        continue
                    
                    if logger_name and entry["logger"] != logger_name:
                        continue
                    
                    logs.append(entry)
                    
                    if len(logs) >= limit:
                        break
                except json.JSONDecodeError:
                    continue
        
        return logs

def create_log_manager(log_dir: Path, app_name: str = "openocta") -> LogManager:
    """Create log manager."""
    return LogManager(log_dir=log_dir, app_name=app_name)

def create_log_aggregator(log_dir: Path) -> LogAggregator:
    """Create log aggregator."""
    return LogAggregator(log_dir=log_dir)
