function buildGraph(edges, resourcesConfig) {
    const graph = {};
    for (const [from, to] of edges) {
        if (!graph[from]) {
            graph[from] = { neighbors: [], resources: resourcesConfig[from] || [] };
        }
        graph[from].neighbors.push(to);

        if (!graph[to]) {
            graph[to] = { neighbors: [], resources: resourcesConfig[to] || [] };
        }
        graph[to].neighbors.push(from);
    }
    return graph;
}

export { buildGraph };
