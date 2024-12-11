function passeioAleatorio(graph, startNode, resource, ttl) {
    let currentNode = startNode;
    let messages = 0;

    for (let i = 0; i < ttl; i++) {
        messages++;
        // console.log("no atual: " + currentNode)
        // Recurso está no nó atual?
        if (graph[currentNode].resources.includes(resource)) {
            return { found: true, messages };
        }

        const neighbors = graph[currentNode].neighbors;
        // console.log("vizinhos: " +neighbors)

        if (neighbors.length === 0) {
            break;
        }

        // Escolhe um vizinho aleatoriamente para continuar a busca
        currentNode = neighbors[Math.floor(Math.random() * neighbors.length)];
    }

    return { found: false, messages };
}

export { passeioAleatorio };
