import { Order } from "@/entity";

export class OrderRepository {
	
	// Function to create a new order
	public static async create(userId: number, bookId: number, price: number): Promise<Order> {

		const newOrder: Order = {
			id: 0,
			userId,
			bookId,
			price,
		};

		// Return the newly created order
		return newOrder;
	}

	// Function to retrieve orders for a specific user
	public static async getByUserId(userId: number): Promise<Order[]> {

		const orders: Order[] = [];

		// Return the orders for the user
		return orders;
	}

	// Function to retrieve orders for a specific book
	public static async getByBookId(bookId: number): Promise<Order[]> {
		
		const orders: Order[] = [];

		// Return the orders for the book
		return orders;
	}
}