class Storage {
    static GAME_DATA = 'GAME_DATA'
    static get() {
        return localStorage.getItem(JSON.parse(Storage.GAME_DATA))
    }
    static set(value) {
        localStorage.setItem(Storage.GAME_DATA, JSON.stringify(value))
    }
}

export default Storage