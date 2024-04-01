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

router.get("/user/:userId", async (req, res) => {
	try {
		const userId = parseInt(req.params.userId);

		// Retrieve orders for the specified user
		const orders = await OrderRepository.getByUserId(userId);

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

router.get("/:bookId", async (req, res) => {
	try {
		const bookId = parseInt(req.params.bookId);

		// Retrieve orders for the specified book
		const orders = await OrderRepository.getByBookId(bookId);

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

export const OrderController = router;
