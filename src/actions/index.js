const selectBook = book => ({
  type: 'BOOK_SELECTED',
  payload: book,
});

export default selectBook;

// selectBook is an ActionCreator,
// it needs to return and action,
// an object with a type property & a payload.
