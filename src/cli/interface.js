import readlineSync from 'readline-sync';
import { loadConfig } from '../config/loader.js';
import { floodingSearch } from '../search/flooding.js';
import { randomWalk } from '../search/randomWalk.js';
import { buildGraph } from '../network/graph.js';

function startCLI() {
    const config = loadConfig('data/config.json');
    const graph = buildGraph(config.edges);

    while (true) {
        const node = readlineSync.question('Nó inicial: ');
        const resource = readlineSync.question('Recurso: ');
        const ttl = parseInt(readlineSync.question('TTL: '), 10);
        const algo = readlineSync.question('Algoritmo (flooding/random): ');

        let result;
        if (algo === 'flooding') {
            result = floodingSearch(graph, node, resource, ttl);
        } else if (algo === 'random') {
            result = randomWalk(graph, node, resource, ttl);
        }

        console.log('Resultado:', result);
    }
}

export { startCLI };
