const {
  addBookHandler,
  getAllBooksHandler,
  getBookbyIdHandler,
  editBookbyIdHandler,
  deleteBookByIdHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBookbyIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: editBookbyIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
