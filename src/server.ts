import path from 'path';
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { AuthController, BookController, OrderController, UserController } from './controller';
import { AuthGuard } from './service/AuthMiddleware';

//===============
// Configurations
//===============

async function config(app: Express) {
	// Environment variables
	dotenv.config();

	// Body parser middleware
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	// CORS
	app.use(cors());

	// Database connection
	// await connectToMongoDB();

	// Static Files
	app.use('/static', express.static(path.join(__dirname, '../files')));
	app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));
	app.use('/public', express.static(path.join(__dirname, '../../public')));
	app.use(express.static(path.join(__dirname, '../../public')));
}

// ===========
// Load routes
// ===========

function loadRoutes(app: Express) {
	// Serve the back-end
	app.use("/auth", AuthController);
	app.use("/book", BookController);
	app.use("/order", AuthGuard, OrderController);

	// Basic hello world
	app.get("/", (req, res) => {
		return res.send("Bookflix says hello to you!");
	});

	// Serve static files
	app.use('/uploads', express.static(path.join(__dirname, './uploads')));
}

// ============
// Start Server
// ============

export async function startServer() {
	console.clear();
	console.log("========================= Bookflix API =========================");
	console.log("");
	const app: Express = express();
	await config(app);
	loadRoutes(app);
	const port = process.env.BACKEND_PORT ? parseInt(process.env.BACKEND_PORT) : 4000;
	app.listen(port, '0.0.0.0', () => {
		console.log(`✅ Server is running on port ${port}.`);
		console.log("");
		console.log("=================================================================");
		console.log("");
	});
}