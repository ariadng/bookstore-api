import { Order } from "../entity";
import { UserRepository } from "./UserRepository";
import { prisma } from "../service/Prisma";

export class OrderRepository {

	public static async get(id: number): Promise<Order | null> {
		return prisma.order.findFirst({
			where: {
				id: id,
			},
			include: {
				book: true,
			}
		});
	}
	
	// Function to create a new order
	public static async create(userId: number, bookId: number, price: number): Promise<Order | null> {

		const user = await UserRepository.getById(userId);
		if (!user || user.points < price) return null;

		await prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				points: user.points - price,
			}
		})

		return prisma.order.create({
			data: {
				userId,
				bookId,
				price
			}
		});

	}

	// Function to retrieve orders for a specific user
	public static async getByUserId(userId: number): Promise<Order[]> {

		const orders = await prisma.order.findMany({
			where: {
				userId: userId,
			},
			include: {
				book: true,
			},
			orderBy: {
				createdAt: "desc"
			}
		});

		// Return the orders for the user
		return orders;
	}

	// Function to retrieve orders for a specific book
	public static async getByBookId(bookId: number): Promise<Order[]> {
		
		const orders: Order[] = [];

		// Return the orders for the book
		return orders;
	}

	// Cancel order
	public static async cancel(orderId: number): Promise<Order | null> {
		const order = await this.get(orderId);
		if (!order) return null;
		
		const deleted = await prisma.order.delete({
			where: { id: orderId },
		});
		if (!deleted) return null;
		
		const user = await UserRepository.getById(order.userId);
		if (!user) return null;

		await prisma.user.update({
			where: { id: order.userId },
			data: {
				points: user.points + order.price,
			}
		});

		return order;

	}
}