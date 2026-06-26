"""Pytest для searching/*."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent.parent))

import pytest

from searching.linear import linear_search
from searching.binary import binary_search
from searching.jump import jump_search
from searching.interpolation import interpolation_search
from searching.exponential import exponential_search

ARR = [1, 3, 5, 7, 9, 11, 13, 15]

ALGOS = [
    linear_search,
    binary_search,
    jump_search,
    interpolation_search,
    exponential_search,
]


@pytest.mark.parametrize("algo", ALGOS, ids=lambda f: f.__name__)
class TestSearch:
    def test_found(self, algo):
        assert algo(ARR, 7) == 3

    def test_not_found(self, algo):
        assert algo(ARR, 4) == -1

    def test_first(self, algo):
        assert algo(ARR, 1) == 0

    def test_last(self, algo):
        assert algo(ARR, 15) == 7
