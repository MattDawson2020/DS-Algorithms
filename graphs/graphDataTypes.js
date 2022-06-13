// edge list
// lists all of the edges of the graph
const graph = [[0, 2], [2, 3], [2, 1], [1, 2]];

// adjacent list
// each nested array is the index of the graph, and the values are the linked vertices
const adjacentGraph = [[2], [2, 3], [0, 1, 3], [1, 2]]

// adjacent matrix
// has 0s or 1s to denote whether there is a connection or not

const matrixGraph = [
  [0, 0, 1, 0],// node of index 0 is connected to node of index 2
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
]
