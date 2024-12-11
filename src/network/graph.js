function buildGraph(edges, nodesConfig) {
    const graph = {};
    for (const [from, to] of edges) {
        if (!graph[from]) {
            graph[from] = { neighbors: [], resources: nodesConfig[from]?.resources || [] };
        }
        graph[from].neighbors.push(to);

        if (!graph[to]) {
            graph[to] = { neighbors: [], resources: nodesConfig[to]?.resources || [] };
        }
        graph[to].neighbors.push(from);
    }
    return graph;
}

export { buildGraph };
