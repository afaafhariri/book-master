export interface Author {
  firstname: string;
  middlename?: string;
  lastname?: string;
}

export interface Book {
  name: string;
  description?: string;
  image: string;
  author: Author;
  price: number;
  genre: string;
  publisher: string;
  isbn: number;
  publish_date: string;
  views: number;
  inStock: number;
  ratings?: number[];
}
