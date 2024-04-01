import express from 'express';
import { BookRepository, OrderRepository } from '../repository';

const router = express.Router();

router.post("/", async (req, res) => {
	try {
		const { userId, bookId, price } = req.body;

		// Validate required fields
		if (!userId || !bookId) {
			return res.status(400).json({
				error: true,
				message: "userId and bookId are required fields",
				data: null
			});
		}

		// Create a new order
		
		const book = await BookRepository.get(bookId);
		if (!book) return res.json({
			error: false,
			message: "Cannot find book with id " + bookId,
			data: null
		});

		const newOrder = await OrderRepository.create(userId, bookId, price);

		return res.status(201).json({
			error: false,
			message: "Order created successfully",
			data: newOrder
		});
	} catch (error) {
		console.error("Error creating order:", error);
		return res.status(500).json({
			error: true,
			message: "Internal server error",
			data: null
		});
	}
});

router.get("/user", async (req, res) => {
	try {

		// Retrieve orders for the specified user
		// @ts-ignore

		const orders = await OrderRepository.getByUserId(req.user?.user.id);

		return res.json({
			error: false,
			message: "Orders retrieved successfully",
			data: orders
		});
	} catch (error) {
		console.error("Error retrieving orders:", error);
		return res.status(500).json({
			error: true,
			message: "Internal server error",
			data: null
		});
	}
});

router.get("/:orderId", async (req, res) => {
	try {
		const orderId = parseInt(req.params.orderId);

		// Retrieve orders for the specified book
		const order = await OrderRepository.get(orderId);
		if (!order) return res.status(404).json({
			error: true,
			message: `Order with id ${orderId} doesn't exist`,
			data: null,
		});

		return res.json({
			error: false,
			message: "Order retrieved successfully",
			data: order
		});
	} catch (error) {
		console.error("Error retrieving order:", error);
		return res.status(500).json({
			error: true,
			message: "Internal server error",
			data: null
		});
	}
});

router.delete("/:orderId", async (req, res) => {
	try {
		const orderId = parseInt(req.params.orderId);

		// Retrieve orders for the specified book
		const canceled = await OrderRepository.cancel(orderId);
		if (!canceled) return res.json({
			error: true,
			message: "Failed to cancel order",
			data: null,
		});

		return res.json({
			error: false,
			message: "Orders canceled successfully",
			data: canceled
		});

	} catch (error) {
		console.error("Error retrieving orders:", error);
		return res.status(500).json({
			error: true,
			message: "Internal server error",
			data: null
		});
	}
});

export const OrderController = router;
