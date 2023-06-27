function isNameUndefined(name) {
  if (name == undefined) {
    return true;
  }

  return false
}

function checkReadPage(readPage, pageCount) {
  if (readPage > pageCount) {
    return true;
  }
  return false
}

module.exports = {
  isNameUndefined,
  checkReadPage,
};
