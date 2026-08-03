function createProject({
	id,
	title,
	description,
	image,
	tags,
	links,
	shortDescription,
	mainPage,
}) {
	return {
		id,
		title,
		description,
		image,
		tags,
		links,
		shortDescription,
		mainPage,
	};
}

const projects = [
	
	createProject({
		id: 3,
		title: 'Invoice maker',
		description: [
			'This full‑stack invoice maker allows users to manage clients, create detailed invoices, and organise tasks and job information in a clean, structured workflow. Users can upload their company logo, choose custom invoice dates, and generate professional PDF invoices ready for sending.',
			'The platform includes client and task management, job linking, secure authentication, and a responsive UI. Built with React, TypeScript, Node.js, Express, Prisma, and PostgreSQL, it provides a scalable architecture suitable for real world business use.',
		],
		image: ['/project-img/invoicemaker.webp'],
		tags: [
			'React',
			'Typescript',
			'Node.js',
			'Express',
			'PostgreSQL',
			'Fullstack',
			'PDF Generation',
		],
		links: {
			repoFrontend: {
				url: 'https://github.com/titchSiobhan/tracker-frontend',
				tooltip: 'Frontend',
			},
			repoBackend: {
				url: 'https://github.com/titchSiobhan/tracker-backend',
				tooltip: 'Backend',
			},
		},
		mainPage: true,
		shortDescription:
			'A full‑stack invoice builder where users can manage clients, create invoices with tasks and jobs, upload a company logo, pick custom dates, and export clean PDFs.',
	}),
	createProject({
		id: 6,
		title: "Life Simulator",
		description: ["Built to explore object-oriented design and simulation systems in C#.", "The application models households through a custom time system, tracking ageing, birthdays, wages, bills, and random events. Data is saved and loaded using JSON, with separate systems handling households, finances, and simulation logic.", "The project focuses on creating interconnected systems that work together to produce changing outcomes over long periods of simulated time."],
		image:["/project-img/HouseStats.webp", "/project-img/logPage.webp", "/project-img/SimStats.webp"],
		tags: ["C#", ".NET", "OOP",
			"#JSON", "Console Application", "Simulation"
		],
		links:{
			repo: {
				url:"https://github.com/titchSiobhan/house-sim", tooltip: "Repo"
			}
		},
		mainPage: true,
		shortDescription: "A C# console-based life simulation where households are generated and simulated over time, managing people, homes, finances, and events."
	}),
	createProject({
		id: 1,
		title: 'Barely Social',
		description: [
			'This fullstack social media platform that allows users to create their own profile, post either images or text posts, and choose their profile privacy setting. Each user is able to search others, send friend request, and switch their feed to friends only or view global posts. The platform with secure authentication, responsive UI and scalable backend architecture',
		],
		image: ['/project-img/barely_social.webp'],
		tags: [
			'React',
			'JavaScript',
			'Node.js',
			'Express',
			'PostgreSQL',
			'Fullstack',
		],
		links: {
			live: { url: 'https://barely-social.netlify.app/', tooltip: 'Live' },
			repoFrontend: {
				url: 'https://github.com/titchSiobhan/odin-book-frontend',
				tooltip: 'Frontend',
			},
			repoBackend: {
				url: 'https://github.com/titchSiobhan/odin-book-backend',
				tooltip: 'Backend',
			},
		},
		mainPage: true,
		shortDescription:
			'A fullstack social media platform with secure authentication, photo and text posting, public/private profiles, friends system, adn infinite scroll feed',
	}),
	createProject({
		id: 2,
		title: 'Questage',
		description: [
			'This project is a small browser based rouglelike RPG where you can create your own character where the progress is saved locally using client side storage. They are able to go on silly quests, encounter random events and fight enemies. Every run plays out differently due to a luck tier system, weighted outcomes and procedural event generation.',
			'The game is built with React and Typescript, using components and clean stat management to keep the game logic modular. The events, quests and fights are handled through a separate system that communicates through a shared system',
		],
		image: ['/project-img/Questage_desktop.webp'],
		tags: [
			'React',
			'Typescript',
			'Node.js',
			'Express',
			'Fullstack',
			'Game Development',
		],
		links: {
			live: {
				url: 'https://questage.netlify.app/',
				tooltip: 'Live',
			},
			repoBackend: {
				url: 'https://github.com/titchSiobhan/RPG',
				tooltip: 'Backend',
			},
			repoFrontend: {
				url: 'https://github.com/titchSiobhan/RPG-frontend',
				tooltip: 'Frontend',
			},
		},
		mainPage: true,
		shortDescription:
			'A lightweight roguelike RPG text‑based sim where you create a character, explore the realm, complete quests, fight monsters, and survive a world driven by luck, events, and dynamic encounters.',
	}),
	createProject({
		id: 4,
		title: "Blackjack",
		description:["A fully structured C# console Blackjack game built with proper OOP design, including a deck system, card evaluation, Ace handling, dealer behaviour, and player actions such as hit and stand. Designed to demonstrate clean architecture, namespaces, and multi‑file project organisation while implementing real casino rules."],
		image:["/project-img/blackjack.webp"],
		tags:["C#", "Console Application", "Game Development"],
		links: {repo: {
			url: "https://github.com/titchSiobhan/blackjack", tooltip: "Repo"
		}},
		mainPage: false,
		shortDescription: "A multi‑file C# Blackjack game featuring a real 52 card deck, dealer logic, and clean object‑oriented architecture."
	}),
	createProject({
		id: 5,
		title: "Alchemy Brewer",
		description:["Alchemy Brewer is a C# console application built around a simple crafting gameplay loop. Players visit a dynamically generated shop to purchase ingredients and recipe cards, manage their inventory, discover hidden potion combinations, brew new potions, and sell them for gold.", "The game is driven by JSON data, allowing new ingredients, recipes, and potions to be added without changing the core game logic. The project focuses on object-oriented design, separating models and services to create a clean, maintainable codebase while demonstrating inventory management, game state handling, and data-driven application development."],
		image:["/project-img/alchemy-brewer.webp", "/project-img/alchemy-brewer-two.webp"],
		tags: [ "C#", "Console Application", "Game Development", "JSON", ".NET", "OOP"],
		links:{
			repo: {
				url:"https://github.com/titchSiobhan/alchemy-brewer",
				tooltip:"Repo"
			}
		},
		mainPage: true,
		shortDescription:"A C# console-based crafting game where players buy ingredients, discover recipes, brew potions, and sell their creations for gold."
	})
];

export default projects;
