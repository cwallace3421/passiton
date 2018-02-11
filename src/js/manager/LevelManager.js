import config from '../config/levelConfig.json';

class LevelManager {
    getLevel() {
        return config.levels[0].map;
    }
}

module.exports = new LevelManager();