import { Book } from "../entity/Book";
import books from "../sample/books.json";

export class BookRepository {

	public static async list(page: number = 1, countPerPage: number = 10): Promise<Book[]> {
		const startIndex = (page - 1) * countPerPage;
		const endIndex = startIndex + countPerPage;
		return books.slice(startIndex, endIndex);
	}

	public static async get(id: number): Promise<Book | null> {
		return books.find((book: Book) => book.id === id) ?? null;
	}

	public static async search(query: string, page: number = 1, countPerPage: number = 10): Promise<Book[]> {
		const lowerCaseQuery = query.toLowerCase();
		const startIndex = (page - 1) * countPerPage;
		const endIndex = startIndex + countPerPage;
		return books.filter((book: Book) =>
			book.title.toLowerCase().includes(lowerCaseQuery) ||
			book.description.toLowerCase().includes(lowerCaseQuery)
		).slice(startIndex, endIndex);
	}

}