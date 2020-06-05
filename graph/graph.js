class Graph {
    // define no of vertices and adjacencyList
    constructor(no_Of_Vertices) {
        this.no_Of_Vertices = no_Of_Vertices;
        this.AdjacencyList = new Map();
    }

    //functions
    addVertex(v) {
        this.AdjacencyList.set(v, []);
    }

    addEdges(v, w) {
        const vMap = this.AdjacencyList.get(v);
        vMap.push(w);
        const wMap = this.AdjacencyList.get(w);
        wMap.push(v);
    }

    printGraph() {
        for (let [key, val] of this.AdjacencyList.entries()) {
            let concatVal = '';
            for (let j of val) {
                concatVal += j + ' ';
            }
            console.log(`${key} -> ${concatVal}`);
        }
    }
}

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