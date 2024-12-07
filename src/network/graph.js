function buildGraph(edges) {
    const graph = {};
    for (const [from, to] of edges) {
        if (!graph[from]) graph[from] = { neighbors: [], resources: [] };
        graph[from].neighbors.push(to);

        if (!graph[to]) graph[to] = { neighbors: [], resources: [] };
        graph[to].neighbors.push(from);
    }
    return graph;
}

export { buildGraph };
