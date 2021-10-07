const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;

    for(let node in graph){
        console.log(visited);
        if (explore(graph,node,visited) === true) {
            count += 1;
        }
    }
    return count;
};

const explore = (graph,current,visited) => {
    if (visited.has(String(current))) return false;

    visited.add(String(current));

    for(let neightbor of graph[current]) {
        explore(graph, neightbor,visited);
    }
    return true;
}

console.log(connectedComponentsCount({
    0: [8,2,5],
    1: [0],
    5: [0,8],
    8: [0,5],
    2: [3,4],
    3: [2,4],
    4: [3,2]
}));
// 2