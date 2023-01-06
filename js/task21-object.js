// создаем обьект
const playlist = {
    // добавляем свойства  ключ:значение
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    
    // создаем МЕТОД этого плейлиста, который работает только со свойствами ЭТОГО обьекта. Делаем свойство и кладем туда функцию  changeName: function(){}. Но есть сокращенный синтаксис

    changeName(newName){
        // playlist в playlist НЕ используем. Если внутри метода нужно получить доступ к свойству этого же обьекта (обьекта, который вызвал эту функцию), то используем this
        this.name=newName;

        // обновим свойство количество треков после добавления треков. Возьми свойство trackCount и туда запиши значение длины свойства tracks. Но лучше хранить его ниже
        // this.trackCount=this.tracks.length;
    },

    addTrack(track) {
        this.tracks.push(track);
    },

    updateRating(newRating) {
        this.rating=newRating;
    },

    // количество треков - функция, которая возвращает длину массива tracks в обьекте this (playlist)
    getTrackCount(){
        return this.tracks.length;
    },
}

// вызов функций

console.log(playlist.getTrackCount()); // выведет начальное количество треков = 3
playlist.changeName('Новое имя');
playlist.addTrack('Новый трек');
console.log(playlist.getTrackCount()); // обновит количество треков = 4
playlist.updateRating(4);
console.log(playlist);