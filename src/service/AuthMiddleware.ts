import { UserRepository } from "@/repository";
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { DateTime } from "luxon";

export const AuthGuard = [

	// Decode auth JWT token
	(req: Request, res: Response, next: NextFunction) => {

		try {
			const authorization = req.headers["authorization"];
			if (!authorization) return res.json({
				error: true,
				status: 401,
				message: "No authorization header",
				data: null,
			});
			const token = authorization.replace("Bearer", "").trim();
			const user = jwt.verify(token, process.env.APP_SECRET || "");
			if (!user) return res.json({
				error: true,
				status: 401,
				message: "Authorization failed",
				data: null,
			});
			req.user = user;
			next();
		}

		catch (error) {
			return res.json({
				error: true,
				status: 401,
				message: "Authorization failed",
				data: error,
			});
		}
	},

	// Validate data from token
	async (req: Request, res: Response, next: NextFunction) => {

		try {
			const jwtUser: any = req.user;

			
			// Check expiration
			const now: number = Math.floor(DateTime.now().toSeconds());
			const exp: number = jwtUser.exp;
			if (now >= exp) {
				return res.json({
					error: true,
					status: 401,
					message: "Authorization token is expired",
					data: null,
				});
			}
			
			// Validate token data
			const userId = jwtUser.id;
			
			
			const user = await UserRepository.getById(userId);

			if (!user) return res.json({
				error: true,
				status: 401,
				message: "Authorization token is invalid",
				data: null,
			});

			// @ts-ignore
			req.user = { ...req.user, user };
			next();
		}

		catch (error) {
			return res.json({
				error: true,
				status: 401,
				message: "Token otorisasi tidak valid",
				data: error,
			});
		}

	}
];

export const AdminGuard = [
	...AuthGuard,
	(req: Request, res: Response, next: NextFunction) => {
		try {
			// @ts-ignore
			const roles: string[] = req.user?.user.roles ?? [];
			if (!roles.includes("admin")) return res.json({
				error: true,
				status: 401,
				message: "You don't have permission to access this route",
				data: null,
			});
			next();
		}

		catch (error) {
			return res.json({
				error: true,
				status: 401,
				message: "You don't have permission to access this route",
				data: error,
			});
		}
	},
]