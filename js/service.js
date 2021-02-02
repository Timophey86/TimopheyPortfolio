console.log("Starting up");
var gProjs = [
  {
    id: "proj1",
    name: "Minesweeper",
    title: "Minesweeper",
    desc: "Fun game for fun times!",
    url: `https://timophey86.github.io/TimopheySprint1/`,
    publishedAt: "23/4/92",
    labels: ["Matrixes", "keyboard events"],
    pic:'img/modal_images/Minesweeper.png'
  },
  {
    id: "proj2",
    name: "Admin Log",
    title: "Admin_Log",
    desc: "The most secretive login site ever",
    url: "https://timophey86.github.io/Log-In/",
    publishedAt: "23/4/92",
    labels: ["Matrixes", "keyboard events"],
    pic:'img/modal_images/secret_wwebsite.png'
  },
  {
    id: "proj3",
    name: "Book Store",
    title: "Book_Store",
    desc: "An amazing online book store that will literaly blow your mind!",
    url: "https://timophey86.github.io/Book-Store/",
    publishedAt: "23/4/92",
    labels: ["Matrixes", "keyboard events"],
    pic:'img/modal_images/book_store.png'
  },
];



function getProjs () {
  return gProjs
}