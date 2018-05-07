const STORAGE_KEY = 'todos-vuejs';

export default {
    fetch () {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || []);
    },
    save (item) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(item));
    }
}