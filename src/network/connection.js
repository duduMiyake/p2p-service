import { buildGraph } from "./graph.js";

function isConnected(edges, numNodes, resourcesConfig) {
    const visited = new Set();
    const graph = buildGraph(edges, resourcesConfig);

    function dfs(node) {
        if (visited.has(node)) return;
        visited.add(node);
        for (const neighbor of graph[node]?.neighbors || []) {
            dfs(neighbor);
        }
    }

    dfs(Object.keys(graph)[0]);
    return visited.size === numNodes;
}

export { isConnected };
