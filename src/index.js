var fs = require('fs');

var bookmarks = JSON.parse(fs.readFileSync('C:\\Users\\sayin\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Bookmarks'));
console.log(bookmarks);
