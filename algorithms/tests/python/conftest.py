"""Pytest config. Делает algorithms/ доступным для импортов."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent.parent))
