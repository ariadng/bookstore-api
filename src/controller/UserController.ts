import express from 'express';
import { UserRepository } from '../repository/UserRepository';

const router = express.Router();

// Create a new user
router.post("/", async (req, res) => {
	try {
		const { email, password, name, points } = req.body;

		// Validate required fields
		if (!email || !password || !name || points === undefined) {
			return res.status(400).json({
				error: true,
				message: "email, password, and name are required fields",
				data: null
			});
		}

		// Create a new user
		const newUser = await UserRepository.create(email, password, name);

		return res.status(201).json({
			error: false,
			message: "User created successfully",
			data: newUser
		});
	} catch (error) {
		console.error("Error creating user:", error);
		return res.status(500).json({
			error: true,
			message: "Internal server error",
			data: null
		});
	}
});

// Get user by ID
router.get("/:id", async (req, res) => {
	try {
		const userId = parseInt(req.params.id);

		// Retrieve the user by ID
		const user = await UserRepository.getById(userId);

		if (!user) {
			return res.status(404).json({
				error: true,
				message: "User not found",
				data: null
			});
		}

		return res.json({
			error: false,
			message: "User retrieved successfully",
			data: user
		});
	} catch (error) {
		console.error("Error retrieving user:", error);
		return res.status(500).json({
			error: true,
			message: "Internal server error",
			data: null
		});
	}
});

// Update user by ID
router.put("/:id", async (req, res) => {
	try {
		const userId = parseInt(req.params.id);
		const updates = req.body;

		// Update the user
		const updatedUser = await UserRepository.update(userId, updates);

		if (!updatedUser) {
			return res.status(404).json({
				error: true,
				message: "User not found",
				data: null
			});
		}

		return res.json({
			error: false,
			message: "User updated successfully",
			data: updatedUser
		});
	} catch (error) {
		console.error("Error updating user:", error);
		return res.status(500).json({
			error: true,
			message: "Internal server error",
			data: null
		});
	}
});

// Delete user by ID
router.delete("/:id", async (req, res) => {
	try {
		const userId = parseInt(req.params.id);

		// Delete the user
		const deleted = await UserRepository.delete(userId);

		if (!deleted) {
			return res.status(404).json({
				error: true,
				message: "User not found",
				data: null
			});
		}

		return res.json({
			error: false,
			message: "User deleted successfully",
			data: null
		});
	} catch (error) {
		console.error("Error deleting user:", error);
		return res.status(500).json({
			error: true,
			message: "Internal server error",
			data: null
		});
	}
});

export const UserController = router;
