import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

	await prisma.book.createMany({
		data: [
			{
				id: 1,
				title: "To Kill a Mockingbird",
				writer: "Harper Lee",
				description: "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.",
				cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/330px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
				price: 20,
				tags: [
					"fiction"
				]
			},
			{
				id: 2,
				title: "1984",
				writer: "George Orwell",
				description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
				cover: "https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg",
				price: 15,
				tags: [
					"fiction",
					"science"
				]
			},
			{
				id: 3,
				title: "Pride and Prejudice",
				writer: "Jane Austen",
				description: "A romantic novel of manners, focusing on the manners and morality of the British upper class.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781805479826_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 25,
				tags: [
					"fiction"
				]
			},
			{
				id: 4,
				title: "Sapiens: A Brief History of Humankind",
				writer: "Yuval Noah Harari",
				description: "Explores the history of Homo sapiens and the impact of Homo sapiens on the world.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780062316110_p0_v5_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 30,
				tags: [
					"non-fiction",
					"science"
				]
			},
			{
				id: 5,
				title: "The Great Gatsby",
				writer: "F. Scott Fitzgerald",
				description: "A novel portraying the extravagant lifestyle of the wealthy during the Roaring Twenties.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780743273565_p0_v14_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 18,
				tags: [
					"fiction"
				]
			},
			{
				id: 6,
				title: "The Catcher in the Rye",
				writer: "J.D. Salinger",
				description: "A story about a teenager named Holden Caulfield's disillusionment with the adult world.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780316769174_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 22,
				tags: [
					"fiction",
					"essay"
				]
			},
			{
				id: 7,
				title: "The Origin of Species",
				writer: "Charles Darwin",
				description: "Presents Darwin's theory of evolution by natural selection.",
				cover: "https://prodimage.images-bn.com/pimages/9780375751462_p0_v1_s600x595.jpg",
				price: 28,
				tags: [
					"non-fiction",
					"science"
				]
			},
			{
				id: 8,
				title: "The Diary of a Young Girl",
				writer: "Anne Frank",
				description: "The diary kept by Anne Frank while she was in hiding during the Nazi occupation of the Netherlands.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780307594006_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D",
				price: 17,
				tags: [
					"non-fiction"
				]
			},
			{
				id: 9,
				title: "Brave New World",
				writer: "Aldous Huxley",
				description: "A dystopian novel about a future society controlled by technology.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780060850524_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 12,
				tags: [
					"fiction",
					"science"
				]
			},
			{
				id: 10,
				title: "The Hobbit",
				writer: "J.R.R. Tolkien",
				description: "A fantasy novel about the quest of a home-loving hobbit.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780547928227_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 24,
				tags: [
					"fiction"
				]
			},
			{
				id: 11,
				title: "The Bell Jar",
				writer: "Sylvia Plath",
				description: "A semi-autobiographical novel about a young woman's mental breakdown.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780060837020_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 13,
				tags: [
					"fiction",
					"essay"
				]
			},
			{
				id: 12,
				title: "The Art of War",
				writer: "Sun Tzu",
				description: "A treatise on military strategy, also known as a guide to tactics, maneuvering, and discipline.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780813319513_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 21,
				tags: [
					"non-fiction"
				]
			},
			{
				id: 13,
				title: "A Brief History of Time",
				writer: "Stephen Hawking",
				description: "A popular science book about cosmology and the universe's origin.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780553380163_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 16,
				tags: [
					"non-fiction",
					"science"
				]
			},
			{
				id: 14,
				title: "The Alchemist",
				writer: "Paulo Coelho",
				description: "A novel about a young Andalusian shepherd in search of his treasure.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 27,
				tags: [
					"fiction"
				]
			},
			{
				id: 15,
				title: "Moby-Dick",
				writer: "Herman Melville",
				description: "A novel about the voyage of the whaling ship Pequod.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780198853695_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D",
				price: 19,
				tags: [
					"fiction"
				]
			},
			{
				id: 16,
				title: "The Road",
				writer: "Cormac McCarthy",
				description: "A post-apocalyptic novel about a father and son's journey across a devastated landscape.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780307387899_p0_v7_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 11,
				tags: [
					"fiction"
				]
			},
			{
				id: 17,
				title: "The Fountainhead",
				writer: "Ayn Rand",
				description: "A novel about an individualistic young architect who refuses to compromise his artistic and personal vision.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780452286375_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 29,
				tags: [
					"fiction"
				]
			},
			{
				id: 18,
				title: "Lord of the Flies",
				writer: "William Golding",
				description: "A novel about a group of British boys stranded on an uninhabited island and their disastrous attempt to govern themselves.",
				cover: "https://prodimage.images-bn.com/pimages/9780399501487_p0_v3_s600x595.jpg",
				price: 14,
				tags: [
					"fiction"
				]
			},
			{
				id: 19,
				title: "Crime and Punishment",
				writer: "Fyodor Dostoevsky",
				description: "A novel about a man who believes himself to be above the law, and his subsequent mental and moral deterioration.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780140449136_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 26,
				tags: [
					"fiction"
				]
			},
			{
				id: 20,
				title: "Walden",
				writer: "Henry David Thoreau",
				description: "A memoir by transcendentalist Henry David Thoreau about his two years and two months in a small cabin he built near Walden Pond.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781604592948_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 23,
				tags: [
					"non-fiction",
					"essay"
				]
			},
			{
				id: 21,
				title: "The Prince",
				writer: "Niccolò Machiavelli",
				description: "A political treatise offering advice on ruling as a prince.",
				cover: "https://prodimage.images-bn.com/pimages/9780140449150_p0_v1_s600x595.jpg",
				price: 20,
				tags: [
					"non-fiction",
					"essay"
				]
			},
			{
				id: 22,
				title: "The Picture of Dorian Gray",
				writer: "Oscar Wilde",
				description: "A philosophical novel about the consequences of narcissism and moral duplicity.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780141439570_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 18,
				tags: [
					"fiction"
				]
			},
			{
				id: 23,
				title: "The Martian",
				writer: "Andy Weir",
				description: "A science fiction novel about an astronaut stranded on Mars.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780553418026_p0_v5_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 29,
				tags: [
					"fiction",
					"science"
				]
			},
			{
				id: 24,
				title: "The Brothers Karamazov",
				writer: "Fyodor Dostoevsky",
				description: "A philosophical novel about a father and his three sons, exploring questions of faith, reason, and morality.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780486437910_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D",
				price: 12,
				tags: [
					"fiction"
				]
			},
			{
				id: 25,
				title: "Frankenstein",
				writer: "Mary Shelley",
				description: "A novel about a young scientist who creates a sapient creature in an unorthodox scientific experiment.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780141439471_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 25,
				tags: [
					"fiction",
					"science"
				]
			},
			{
				id: 26,
				title: "Anna Karenina",
				writer: "Leo Tolstoy",
				description: "A novel about the consequences of an adulterous affair in Imperial Russia.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780199536061_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 16,
				tags: [
					"fiction"
				]
			},
			{
				id: 27,
				title: "The Stranger",
				writer: "Albert Camus",
				description: "A novel about a man who is detached from his surroundings and lives without meaning.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780679720201_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 22,
				tags: [
					"fiction",
					"essay"
				]
			},
			{
				id: 28,
				title: "The Iliad",
				writer: "Homer",
				description: "An ancient Greek epic poem attributed to Homer.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780140275360_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 14,
				tags: [
					"fiction"
				]
			},
			{
				id: 29,
				title: "Freakonomics",
				writer: "Steven D. Levitt, Stephen J. Dubner",
				description: "A book that applies economic theory to diverse subjects not usually considered under economics.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780063032378_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 27,
				tags: [
					"non-fiction"
				]
			},
			{
				id: 30,
				title: "The Sun Also Rises",
				writer: "Ernest Hemingway",
				description: "A novel about a group of American and British expatriates who travel from Paris to the Festival of San Fermín in Pamplona to watch the running of the bulls and the bullfights.",
				cover: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781435172227_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
				price: 19,
				tags: [
					"fiction"
				]
			}
		]
	})

}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	});