export interface BookI {
  _id: string;
  name: string;
  description?: string;
  image: string;
  author: {
    firstname: string;
    middlename?: string;
    lastname?: string;
  };
  price: number;
  genre: string;
  publisher: string;
  isbn: number;
  publish_date: Date;
  views: number;
  inStock: number;
  ratings?: number[];
}
