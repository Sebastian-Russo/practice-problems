// depth first search && breathe first search 


// Graph traversal, how to find the distance between two nodes in a graph
// Traversal algorythms are used to visit nodes in a graph: main types are beadth first and depth first search

// point is to determine how close nodes are to a root node
/**************** Breadth First Search **************************/ 
function bfs(graph, root) {
  let nodesLength = {}; // key = node, value = distance from the root

  for (let i=0; i<graph.length; i++) {
    nodesLength[i] = Infinity; // indicates it's not reachable from the root node 
  }
  nodesLength[root] = 0; // distance from root node is set to 0

  let queue = [root]; // keeps track of nodes we visit 
  let current; // keep track of current node we're traversing 

  while (queue.length != 0) { // loop till no more nodes left to traverse 
    current = queue.shift();  // start the loop by popping of a node from the que to traverse, which at the beginning is the root node 

    let curConnected = graph[current];
    let nieghborIndex = [];
    let index = curConnected.indexOf(1);
    while (index != -1) {
      nieghborIndex.push(index);
      index = curConnected.indexOf(1, index + 1);
    }

    for (let j=0; j<nieghborIndex.length; j++) {
      if (nodesLength[nieghborIndex[j]] == Infinity) {
        nodesLength[nieghborIndex[j]] = nodesLength[current] + 1;
        queue.push(nieghborIndex[j]);
      }
    }
  }
  return nodesLength;
};

let exBFSGraph = [
  [0,1,1,1,0],
  [0,0,1,0,0],
  [1,1,0,0,0],
  [0,0,0,1,0],
  [0,1,0,0,0]
];
// console.log(bfs(exBFSGraph, 1));


/**************** Depth First Search **************************/ 

