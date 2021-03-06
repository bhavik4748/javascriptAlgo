import Graph from './graph.js';
//var Graph = require("./graph.js");
/*
1192. Critical Connections in a Network

Share
There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] reprevsents a connection between servers a and b. Any server can reach any other server directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some server unable to reach some other server.

Return all critical connections in the network in any order.

*/
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
const criticalConnections = function (n, connections) {
    //console.log(connections);
    let g = new Graph(n);
    for (let i = 0; i < n; i++) {
        g.addVertex(i);
    }
    for (let i = 0; i < connections.length; i++) {
        g.addEdges(+`${connections[i][0]}`, +`${connections[i][1]}`);
    }
    g.printGraph();

    const graph = createGraph(n, connections);
    const visited = {}, low = {};
    // return helper(graph, 0, null, 0, visited, low);
    return helper(g, 0, null, 0, visited, low);
};

//Tarjan's Algorighthm to find Critical Connections
function helper(graph, u, prev, rank, visited, low, output = []) {
    if (u in visited) {
        return output;
    }
    visited[u] = rank;
    low[u] = rank;
    const list = graph.getAdjacencyList(u);
    for (const v of list) {
        if (v === prev) continue;
        helper(graph, v, u, rank + 1, visited, low, output);
        low[u] = Math.min(low[u], low[v]);
        if (low[v] > visited[u]) {
            output.push([u, v]);
        }
    }
    return output;
}

function createGraph(n, connections) {
    const graph = new Array(n).fill(null).map(() => []);
    for (const [u, v] of connections) {
        graph[u].push(v);
        graph[v].push(u);
    }
    return graph;
}

let res = criticalConnections(4, [[0, 1], [1, 2], [2, 0], [1, 3]]);
console.log(res);


/*
let g = new Graph(6);
let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let v of vertices)
    g.addVertex(v);

g.addEdges('A', 'B');
g.addEdges('A', 'D');
g.addEdges('A', 'E');
g.addEdges('B', 'C');
g.addEdges('D', 'E');
g.addEdges('E', 'F');
g.addEdges('E', 'C');
g.addEdges('C', 'F');

g.printGraph();
*/