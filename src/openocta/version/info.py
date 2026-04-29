"""Version Module - Version information."""

VERSION = "1.0.0"
BUILD_DATE = "2026-04-25"
GIT_COMMIT = ""

def get_version() -> str:
    """Get version string."""
    return VERSION

def get_build_info() -> dict:
    """Get build information."""
    return {
        "version": VERSION,
        "buildDate": BUILD_DATE,
        "gitCommit": GIT_COMMIT,
        "pythonVersion": "",
    }

def get_full_version() -> str:
    """Get full version string."""
    return f"{VERSION} ({BUILD_DATE})"