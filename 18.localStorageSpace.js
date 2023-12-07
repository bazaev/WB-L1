const localStorageSpace = () => {
    // Очищаем localStorage
    localStorage.clear();
    
    try {
        // Заполняем localStorage
        for (var i = 250; i <= 10000; i += 250) {
            localStorage.setItem('t', new Array((i * 1024) + 1).join('a'));
        }
    } catch (e) {
        localStorage.removeItem('t');
    }

    // Возвращаем размер localStorage отнимая погрешность
    return i - 250
}

console.log(localStorageSpace())