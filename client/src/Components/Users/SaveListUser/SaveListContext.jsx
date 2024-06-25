import React, { createContext, useState } from 'react';

export const SaveListContext = createContext();

export const SaveListProvider = ({ children }) => {
  const [savedBooks, setSavedBooks] = useState([]);

  const addBookToSaveList = (book) => {
    setSavedBooks([...savedBooks, book]);
  };

  const removeBookFromSaveList = (id) => {
    setSavedBooks(savedBooks.filter(book => book.id !== id));
  };

  return (
    <SaveListContext.Provider value={{ savedBooks, addBookToSaveList, removeBookFromSaveList }}>
      {children}
    </SaveListContext.Provider>
  );
};
