const title = 'Best Records of 2019';
const author = 'Mario';
const likes = 90;

let result1 = 'This blog is ' + title + ' by ' + author + ' that has ' + likes + ' likes.';
console.log(result1);

let result2 = `This blog is ${title} by ${author} that has ${likes} likes.`;
console.log(result2);

let html = `
    <h2>${title}</h2>
    <p>by ${author}</p>
    <span>This blog has ${likes} likes.</span>
`;
console.log(html);