import { User } from "@/entity";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

export class UserRepository {
	// Function to create a new user
	public static async create(email: string, password: string, name: string): Promise<User> {

		const prisma = new PrismaClient();
		
		const newUser = await prisma.user.create({
			data: {
				email: email ? email : "",
				name: name ? name : "",
				password: password,
				points: 100,
			}
		});

		// Return the newly created user
		return newUser;
	}

	// Function to retrieve a user by ID
	public static async getById(id: number): Promise<User | null> {

		const prisma = new PrismaClient();

		const user = await prisma.user.findFirst({
			where: {
				id: id,
			},
			select: {
				id: true,
				email: true,
				name: true,
				points: true,
				orders: true,
			}
		});

		return user;
	}

	// Function to retrieve a user by email
	public static async getByEmail(email: string): Promise<User | null> {
		const prisma = new PrismaClient();

		const user = await prisma.user.findFirst({
			where: {
				email: email,
			},
			select: {
				id: true,
				email: true,
				name: true,
				points: true,
				orders: true,
			}
		});

		return user;
	}

	// Function to check credentials
	public static async login(email: string, password: string): Promise<User | null> {
		const prisma = new PrismaClient();

		const user = await prisma.user.findFirst({
			where: {
				email: email,
			}
		});

		if (!user) return null;
		
		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) return null;

		return user;
	}

}
