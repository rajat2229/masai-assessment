const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
  
    // Improved addBook method with better validation
    addBook(book) {
      if (!book || !book.title || !book.author || !book.year) {
        console.log("Book information is incomplete.");
        return;
      }
      this.books.push(book);
      console.log(`Book "${book.title}" added successfully.`);
    },
  
    // Find book by title
    findBookByTitle(title) {
      return this.books.find(book => book.title === title);
    },
  
    // Remove book by title with feedback
    removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book "${title}" removed successfully.`);
      } else {
        console.log("Book not found.");
      }
    }
  };
  
  // Test the improved addBook method
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
  console.log(library.books.length); // Output: 2
  
  // Trying to add an incomplete book
  library.addBook({ author: "Unknown" }); // Output: Book information is incomplete.
  