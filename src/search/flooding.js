function floodingSearch(graph, startNode, resource, ttl) {
    const visited = new Set();
    const queue = [{ node: startNode, depth: 0 }];
    let messages = 0;

    while (queue.length > 0) {
        const { node, depth } = queue.shift();
        if (visited.has(node)) continue;
        visited.add(node);
        messages++;
        if (graph[node].resources.includes(resource)) {
            return { found: true, messages };
        }

        if (depth < ttl) {
            for (const neighbor of graph[node].neighbors) {
                queue.push({ node: neighbor, depth: depth + 1 });
            }
        }
    }
    
    return { found: false, messages };
}

export { floodingSearch };
