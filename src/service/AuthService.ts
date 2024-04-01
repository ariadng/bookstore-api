import { PrismaClient, Session } from "@prisma/client";
import { DateTime } from "luxon";
import jwt from 'jsonwebtoken';
import { prisma } from "./Prisma";

export class AuthService {

	// Get KEY
	getAppKey(): string {
		return process.env.KEY ? process.env.KEY : "";
	}

	// Get access token from request header
	getAccessToken(authString?: string): string | null {
		if (typeof authString === "undefined") return null;
		if (authString.split(' ').length < 2) return null;
		const accessToken = authString.split(' ')[1];
		return accessToken;
	}

	// Validate access token
	async validateAccessToken(token: string): Promise<boolean> {
		const session = await prisma.session.findFirst({
			where: {
				token: token,
			}
		});
		if (session === null) return false;
		return true;
	}

	// Get session from access token
	async getSessionFromAccessToken(token: string): Promise<Session | null> {
		const session = await prisma.session.findFirst({
			where: {
				token: token,
			}
		});
		return session;
	}

	public static async createSession(userId: number): Promise<Session | null> {

		const token = jwt.sign({ userId: userId, salt: DateTime.now() }, (process.env.APP_SECRET ?? "rahasia"), { expiresIn: '24h' });
		const expiration = DateTime.now().plus({ weeks: 1 }).toJSDate().toISOString();
		const session = await prisma.session.create({
			data: {
				userId,
				token,
				expiredAt: expiration,
			}
		});
		return session;
	}

}