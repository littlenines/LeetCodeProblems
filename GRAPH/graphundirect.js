const edges = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
];

const buildGraph = (edges) => {
    const graph = {};

    for(let edge of edges) {
        const [a,b] = edge;
        if (!(a in graph)) graph[a] = []; 
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a) 
    }

    return graph;
}

const undirectedPath = (edges,nodeA,nodeB) => {
    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
}

const hasPath = (graph,src,dst,visited) => {
    if (src === dst) return true;
    if (visited.has(src)) return false;

    visited.add(src);

    for(let neightbors of graph[src]) {
        if (hasPath(graph,neightbors,dst,visited) === true) {
            return true;
        }
    }
    return false;
}

console.log(undirectedPath(edges,'j','m'));