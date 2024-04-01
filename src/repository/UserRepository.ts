import { User } from "@/entity";

export class UserRepository {
	// Function to create a new user
	public static async create(email: string, password: string, name: string): Promise<User> {
		
		const newUser: User = {
			id: 0,
			email,
			password,
			name,
			points: 100,
			orders: [],
		};

		// Return the newly created user
		return newUser;
	}

	// Function to retrieve a user by ID
	public static async getById(id: number): Promise<User | undefined> {
		// Implement logic to retrieve a user by ID from the database
		// You may need to interact with your database here
		const user: User | undefined = undefined;

		// Return the user if found, otherwise return undefined
		return user;
	}

	// Function to retrieve a user by email
	public static async getByEmail(email: string): Promise<User | undefined> {
		// Implement logic to retrieve a user by ID from the database
		// You may need to interact with your database here
		const user: User | undefined = undefined;

		// Return the user if found, otherwise return undefined
		return user;
	}

	// Function to update a user
	public static async update(id: number, updates: Partial<User>): Promise<User | undefined> {
		// Implement logic to update a user in the database based on ID
		// You may need to interact with your database here
		const userToUpdate: User | undefined = await this.getById(id);

		if (!userToUpdate) {
			return undefined; // User not found
		}

		// Apply updates to the user object
		Object.assign(userToUpdate, updates);

		// Return the updated user
		return userToUpdate;
	}

	// Function to delete a user by ID
	public static async delete(id: number): Promise<boolean> {
		// Implement logic to delete a user from the database based on ID
		// You may need to interact with your database here

		// Return true if deletion was successful, false otherwise
		return true;
	}
}
