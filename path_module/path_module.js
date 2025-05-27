const path = require('path');
const { config } = require('process');

console.log("Directory Name: "+__dirname);
console.log("File Name: "+__filename);

//1. Joining path segments
const fullPath = path.join("/users","rahul","documents","file.txt");
console.log("Joined path:",fullPath);

//2. Normalizing a path (resolves ".." and ".")
const normalizedPath = path.normalize("/users/rahul/../documents/./file.txt");
console.log("Normalized path:",normalizedPath);

//3. Resolving paths (creates absolute path)
// const resolvedPath = path.resolve("documents","file.txt");
const resolvedPath = path.resolve()
console.log("Resolved path:",resolvedPath);

//4. Parsing a path
// const parsedPath = path.parse("/users/rahul/file.txt");
const parsedPath = path.parse(__filename);
console.log("Parsed path:",parsedPath);

// {
//   root: 'E:\\',
//   dir: 'E:\\practice area\\path_module',
//   base: 'path_module.js',
//   ext: '.js',
//   name: 'path_module'
// }

//5. Formatting a path object
const pathObj = {
    root:"/",
    dir:"/users/john",
    base:"file.txt"
};
const formattedPath = path.format(pathObj);
console.log("Formatted path:",formattedPath);

//6. Getting the file extension
const ext = path.extname(__filename);
console.log("File extension:",ext); //.txt

//7. Getting the directory name
const dir = path.dirname(__filename);
console.log("Directory:",dir); // /users/john

//8. Getting the filename
const filename = path.basename(__filename);
console.log("Filename:",filename); //file.txt

//9. Getting filename without extension
const nameOnly = path.basename(__filename,".js");
console.log("Filename without extension:",nameOnly); //file