"""Pytest для sorting/*. Запуск: pytest algorithms/tests/python -v"""
import sys
from pathlib import Path

# Добавляем algorithms/ в path
sys.path.insert(0, str(Path(__file__).parent.parent.parent))

import pytest

from sorting.bubble import bubble_sort
from sorting.selection import selection_sort
from sorting.insertion import insertion_sort
from sorting.merge import merge_sort
from sorting.quick import quick_sort
from sorting.heap import heap_sort
from sorting.counting import counting_sort
from sorting.radix import radix_sort

CASES = [
    ("empty", [], []),
    ("single", [1], [1]),
    ("sorted", [1, 2, 3], [1, 2, 3]),
    ("reverse", [5, 4, 3, 2, 1], [1, 2, 3, 4, 5]),
    ("dupes", [3, 1, 3, 2, 1], [1, 1, 2, 3, 3]),
    ("random", [64, 25, 12, 22, 11], [11, 12, 22, 25, 64]),
]

ALGOS = [
    bubble_sort,
    selection_sort,
    insertion_sort,
    merge_sort,
    quick_sort,
    heap_sort,
    counting_sort,
    radix_sort,
]


@pytest.mark.parametrize("algo", ALGOS, ids=lambda f: f.__name__)
@pytest.mark.parametrize("name,inp,expected", CASES, ids=[c[0] for c in CASES])
def test_sort(algo, name, inp, expected):
    assert algo(list(inp)) == expected
