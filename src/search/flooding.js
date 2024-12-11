function floodingSearch(graph, startNode, resource, ttl) {
    const visited = new Set();
    const queue = [{ node: startNode, depth: 0 }];
    let messages = 0;
    let nodesInvolved = []
    let numNodes = 0

    while (queue.length > 0) {
        const { node, depth } = queue.shift();
        if (visited.has(node)) continue;
        visited.add(node);
        messages++;
        nodesInvolved.push(node)
        if (graph[node].resources.includes(resource)) {
            numNodes = nodesInvolved.length
            return { found: true, messages, nodesInvolved, numNodes };
        }

        if (depth < ttl) {
            for (const neighbor of graph[node].neighbors) {
                queue.push({ node: neighbor, depth: depth + 1 });
            }
        }

    }
    
    return { found: false, messages, nodesInvolved, numNodes };
}

export { floodingSearch };
