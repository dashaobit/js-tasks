// ============в переменной planetsLengths получился массив длин названий планет

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets => {
//     return planets.map(planet => {
//         return planet.length;
//     })
// };

// неявный возврат (удаляем return) 
// const planetsLengths = planets =>  planets.map(planet => planet.length);
// console.log(planetsLengths(planets));

const planetsLengths = planets.map(planet => planet.length);

console.log(planetsLengths);

// ========составить список всех предметов, которые посещает эта группа студентов, пока даже повторяющихся.
const students = [
    { name: "Mango", courses: ["mathematics", "physics"] },
    { name: "Poly", courses: ["science", "mathematics"] },
    { name: "Kiwi", courses: ["physics", "biology"] },
  ];
  
  students.map(student => student.courses);
  // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]
  
  students.flatMap(student => student.courses);
  // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

  
//   =========в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.
const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction"],
      rating: 8.51,
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "history"],
      rating: 7.75,
    },
    { title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  ];

// ===========в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.
const titles = books.map(book => book.title);

console.log(titles);

// ========в массиве allGenres хранится массив всех жанров книг, которые могут повторяться.
const allGenres = books.flatMap(book => {
  return book.genres;
});
// const genres = books.flatMap(book=>book.genres);
console.log(allGenres);

// ========Используя array.indexOf(genre) выполняем поиск первого совпадения текущего элемента genre и получаем его индекс в оригинальном массиве всех жанров. В параметре index хранится индекс текущего элемента genre при переборе массива методом filter.
// ========Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый раз когда такое значение встречается в массиве и на текущей итерации фильтр обрабатывает именно его.

const uniqueGenres = allGenres.filter(
  (genre, index, array) => array.indexOf(genre)===index
);
console.log(uniqueGenres);

// =========В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// =========В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.
const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter(book=> book.rating>=MIN_RATING);
console.log(topRatedBooks);

const booksByAuthor = books.filter(book=> book.author===AUTHOR);
console.log(booksByAuthor);

// =======В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// =========В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const FIND_AUTHOR = 'Robert Sheckley';

const bookWithTitle = books.find(book=> book.title===BOOK_TITLE);
const bookByAuthor = books.find(book=> book.author===FIND_AUTHOR);

console.log(bookWithTitle);
console.log(bookByAuthor);

// =====СОРТИРОВКА ОБЪЕКТОВ
// по имени автора в алфавитном порядке
const sortedByAuthorName = [...books].sort(
  (a,b) => a.author.localeCompare(b.author)
);
console.log(sortedByAuthorName);

// по имени автора в обратном алфавитном порядке
const sortedByReversedAuthorName = [...books].sort(
  (a,b) => b.author.localeCompare(a.author)
);
console.log(sortedByReversedAuthorName);

// по возрастанию рейтинга
const sortedByAscendingRating = [...books].sort((a,b) => a.rating-b.rating);
console.log(sortedByAscendingRating);

// по убыванию рейтинга
const sortedByDescentingRating = [...books].sort((a,b) => b.rating-a.rating);
console.log(sortedByDescentingRating);

// ===========МЕТОД SORT()
// в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

// сделать полную копию исходного массива и сортировать уже ее
const ascendingReleaseDates = [...releaseDates].sort();
console.log(releaseDates);
console.log(ascendingReleaseDates);

const alphabeticalAuthors = [...authors].sort();
console.log(authors);
console.log(alphabeticalAuthors);

// // =========СВОЙ ПОРЯДОК СОРТИРОВКИ ЧИСЕЛ
// // sort(compareFunction(a, b)) или sort((a, b) => { }
// // в ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.

// const ascendingReleaseDates = [...releaseDates].sort((a,b) => a-b);
// console.log(ascendingReleaseDates);

// const descendingReleaseDates = [...releaseDates].sort((a,b) => b-a);
// console.log(descendingReleaseDates);

// =======СВОЙ ПОРЯДОК СОРТИРОВКИ СТРОК
// localeCompare()
// в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.
const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
console.log(authorsInAlphabetOrder);

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
console.log(authorsInReversedOrder);

// ЦЕПОЧКИ МЕТОДОВ (ЧЕЙНИНГ, CHAINING)- в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
const MIN_BOOK_RATING = 8;

const names = books

.filter(book=> book.rating>MIN_BOOK_RATING)
.map(book=> book.author)
.sort((a, b) => a.localeCompare(b));

console.table(names);