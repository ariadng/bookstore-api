import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../repository/UserRepository';

const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
	try {
		const { email, password, name } = req.body;

		// Validate required fields
		if (!email || !password || !name) {
			return res.status(400).json({
				error: true,
				message: "email, password, and name are required fields",
				data: null
			});
		}

		// Check if user with the same email already exists
		const existingUser = await UserRepository.getByEmail(email);
		if (existingUser) {
			return res.status(400).json({
				error: true,
				message: "User with this email already exists",
				data: null
			});
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create the user
		const newUser = await UserRepository.create(email, hashedPassword, name);

		return res.status(201).json({
			error: false,
			message: "User registered successfully",
			data: newUser
		});
	} catch (error) {
		console.error("Error registering user:", error);
		return res.status(500).json({
			error: true,
			message: "Internal server error",
			data: null
		});
	}
});

// Login
router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		// Validate required fields
		if (!email || !password) {
			return res.status(400).json({
				error: true,
				message: "email and password are required fields",
				data: null
			});
		}

		// Retrieve user by email
		const user = await UserRepository.getByEmail(email);
		if (!user) {
			return res.status(401).json({
				error: true,
				message: "Invalid email or password",
				data: null
			});
		}

		// Compare passwords
		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return res.status(401).json({
				error: true,
				message: "Invalid email or password",
				data: null
			});
		}

		// Generate JWT token
		const token = jwt.sign({ userId: user.id }, (process.env.JWT_SECRET ?? "rahasia"), { expiresIn: '1h' });

		return res.json({
			error: false,
			message: "Login successful",
			data: {
				token,
				user
			}
		});
	} catch (error) {
		console.error("Error logging in:", error);
		return res.status(500).json({
			error: true,
			message: "Internal server error",
			data: null
		});
	}
});

export const AuthController = router;
