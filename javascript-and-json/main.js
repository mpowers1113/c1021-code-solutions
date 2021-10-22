/* eslint-disable quote-props */
var goodBooks = [{
  isbn: '1-56619-909-3',
  title: 'Thus Spoke Zarathustra',
  author: 'Friedrich Nietzsche'
}, {
  isbn: '1-56619-909-4',
  title: 'Sun and Steel',
  author: 'Yukio Mishima'
}, {
  isbn: '1-56619-909-5',
  title: 'Revolt Against the Modern World',
  author: 'Julius Evola'
}
];

console.log('good books is this type ', typeof goodBooks);

function generateBook(isbn, title, author) {
  var book = {
    isbn,
    title,
    author
  };
  goodBooks.push(book);
}

generateBook('1-23333-949-2', 'Sexual Personae', 'Camille Paglia');

var booksJSON = JSON.stringify(goodBooks);

console.log(booksJSON);

var student = '{ "name": "Dwayne", "id": "12443432" }';

console.log('student is of this type', student, typeof student);

console.log(JSON.parse(student));
