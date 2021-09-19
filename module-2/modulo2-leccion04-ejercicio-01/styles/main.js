function media(a, b, c, d) {
  return (a + b + c + d) / parseInt(arguments.length);
}
const valorMedia = media(3, 2, 4, 5);
console.log("cantidad", valorMedia);
