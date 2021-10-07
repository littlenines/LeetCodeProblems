const graph = {
    f: ['g','i'],
    g: ['h'],
    h: [],
    i: ['g','k'],
    j: ['i'],
    k: []
};

const hasPath = (graph, src , dst) => {
    // if (src === dst) return true;
    // for(let neightbor of graph[src]){
    //     if (hasPath(graph,neightbor,dst) === true) {
    //         return true;
    //     }
    // }
    // return false;
    const current = [src];
    while (current.length > 0) {
        const stack = current.pop();
        if (stack === dst) return true;
        console.log(stack);
        for(let neightbor of graph[stack]) {
        current.push(neightbor);
        }
    }
    return false; 

}

console.log(hasPath(graph, 'f','k'));