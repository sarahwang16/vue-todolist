const STORAGE_KEY = 'todos-vuejs';

export default {
    fetch () {
<<<<<<< HEAD
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
=======
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || []);
>>>>>>> 61121fe3d633adb9f40b3fdb9df097b5c5304182
    },
    save (item) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(item));
    }
}