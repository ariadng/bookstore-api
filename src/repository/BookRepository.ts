import { PrismaClient } from "@prisma/client";
import { Book } from "../entity/Book";
import { prisma } from "@/service/Prisma";

export class BookRepository {

	public static async list(page: number = 1, countPerPage: number = 10) {
		const startIndex = (page - 1) * countPerPage;

		return prisma.book.findMany({
			take: countPerPage,
			skip: startIndex,
		});
	}

	public static async get(id: number): Promise<Book | null> {
		return prisma.book.findFirst({
			where: {
				id: id,
			}
		});
	}

	public static async search(query: string, page: number = 1, countPerPage: number = 10) {
		const lowerCaseQuery = query.toLowerCase();
		const startIndex = (page - 1) * countPerPage;

		return prisma.book.findMany({
			where: {
				OR: [
					{ title: { contains: lowerCaseQuery, mode: 'insensitive' } },
					{ description: { contains: lowerCaseQuery, mode: 'insensitive' } }
				]
			},
			take: countPerPage,
			skip: startIndex
		});
	}

}