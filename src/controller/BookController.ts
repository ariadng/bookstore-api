import { BookRepository } from '@/repository';
import express from 'express';
const router = express.Router();

// Get all books
router.get("/", async (req, res) => {
	try {

		// Extract query parameters for pagination
		const { page, countPerPage } = req.query;
		const pageNumber = parseInt(page as string) || 1;
		const perPage = parseInt(countPerPage as string) || 10;

		// Get books based on pagination parameters
		const books = await BookRepository.list(pageNumber, perPage);

		// Return the paginated result
		return res.json({
			error: false,
			message: "Get books success",
			data: books,
			pagination: {
				page: pageNumber,
				countPerPage: perPage
			}
		});
	} catch (error) {
		return res.status(500).json({
			error: true,
			message: "Internal server error",
			data: null
		});
	}
});

router.get("/search", async (req, res) => {
	try {
		const { query, page, countPerPage } = req.query;

		// Validate query parameter
		if (!query || typeof query !== 'string') {
			return res.status(400).json({
				error: true,
				message: "Query parameter is required and must be a string",
				data: null
			});
		}

		// Extract pagination parameters
		const pageNumber = parseInt(page as string) || 1;
		const perPage = parseInt(countPerPage as string) || 10;

		// Perform search using BookRepository
		const books = await BookRepository.search(query, pageNumber, perPage);

		// Return the search result
		return res.json({
			error: false,
			message: "Search success",
			data: books,
			pagination: {
				page: pageNumber,
				countPerPage: perPage
			}
		});
	} catch (error) {
		return res.status(500).json({
			error: true,
			message: "Internal server error",
			data: null
		});
	}
});

// Get book by id
router.get("/:id", async (req, res) => {

	try {
		const { id } = req.params;

		if (isNaN(Number(id))) return res.json({
			error: true,
			message: `Id ${id} is not valid`,
			data: null,
		});

		const book = await BookRepository.get(Number(id));

		if (!book) return res.json({
			error: true,
			message: `There is no book with id ${id}`,
			data: null,
		});

		return res.json({
			error: false,
			message: `Get book with id ${id} success`,
			data: book,
		});

	}

	catch (error) {
		return res.json({
			error: true,
			status: 400,
			message: "Oops, there is an error",
			data: error,
		});
	}

});

// Update book by id
router.put("/:id", async (req, res) => {

	try {
		const { id } = req.params;
		const input = req.body;

		if (isNaN(Number(id))) return res.json({
			error: true,
			message: `Id ${id} is not valid`,
			data: null,
		});

		const book = await BookRepository.get(Number(id));

		if (!book) return res.json({
			error: true,
			message: `Tidak ada properti dengan id ${id}`,
			data: null,
		});

		Object.assign(book, input);

		const updated = null;

		if (!updated) return res.json({
			error: true,
			message: `Failed to update book with id ${id}`,
			data: null,
		});

		return res.json({
			error: false,
			message: `Update book with id ${id} success`,
			data: updated,
		});

	}

	catch (error) {
		return res.json({
			error: true,
			status: 400,
			message: "Oops, there is an error",
			data: error,
		});
	}

});

router.delete("/:id", async (req, res) => {

	try {
		const { id } = req.params;

		if (isNaN(Number(id))) return res.json({
			error: true,
			message: `Id ${id} is not valid`,
			data: null,
		});

		const book = await BookRepository.get(Number(id));

		if (!book) return res.json({
			error: true,
			message: `Tidak ada properti dengan id ${id}`,
			data: null,
		});

		const deleted = null;

		if (!deleted) return res.json({
			error: true,
			message: `Delete book with id ${id} success`,
			data: null,
		});

		return res.json({
			error: false,
			message: `Failed to delete book with id ${id}`,
			data: deleted,
		});

	}

	catch (error) {
		return res.json({
			error: true,
			status: 400,
			message: "Oops, there is an error",
			data: error,
		});
	}

});

export const BookController = router;