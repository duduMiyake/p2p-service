import fs from 'fs';
import { isConnected } from '../network/connection.js';

function loadConfig(configPath) {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    // Validar a configuração
    if (!isConnected(config.edges, config.num_nodes, config.resources)) {
        throw new Error("A rede está particionada.");
    }

    return config;
}

export { loadConfig };
