import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      price: 299,
      description: 'A novel that follows a young Andalusian shepherd in his journey to the pyramids of Egypt.',
      isbn: '978-0062315007',
      publishedYear: 1988,
      genre: 'Adventure fiction'
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 399,
      description: 'A gripping tale of racial injustice and childhood innocence in the American South.',
      isbn: '978-0061947416',
      publishedYear: 1960,
      genre: 'Southern Gothic'
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      price: 249,
      description: 'A dystopian social science fiction novel about totalitarian control and surveillance.',
      isbn: '978-0451524935',
      publishedYear: 1949,
      genre: 'Dystopian fiction'
    },
    {
      id: 4,
      title: 'Atomic Habits',
      author: 'James Clear',
      price: 499,
      description: 'An easy & proven way to build good habits & break bad ones.',
      isbn: '978-0735211292',
      publishedYear: 2018,
      genre: 'Self-help'
    },
    {
      id: 5,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 349,
      description: 'A classic American novel set in the Jazz Age on Long Island.',
      isbn: '978-0743273565',
      publishedYear: 1925,
      genre: 'Fiction'
    }
  ];

  getBooks(): Book[] {
    return this.books;
  }

  getBookById(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }
}
