from scipy.spatial import Voronoi, voronoi_plot_2d
import numpy as np
import matplotlib.pyplot as plt

points = np.random.rand(50,2)

vor = Voronoi(points)

voronoi_plot_2d(vor)

plt.show()