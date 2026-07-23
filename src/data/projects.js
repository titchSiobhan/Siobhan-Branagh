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
		image: '/project-img/invoicemaker.png',
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
		id: 1,
		title: 'Barely Social',
		description: [
			'This fullstack social media platform that allows users to create their own profile, post either images or text posts, and choose their profile privacy setting. Each user is able to search others, send friend request, and switch their feed to friends only or view global posts. The platform with secure authentication, responsive UI and scalable backend architecture',
		],
		image: '/project-img/barely_social.png',
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
		image: '/project-img/Questage_desktop.png',
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
		image:"/project-img/blackjack.png",
		tags:["C#", "Console Application", "Game Development"],
		links: {repo: {
			url: "https://github.com/titchSiobhan/blackjack", tooltip: "Repo"
		}},
		mainPage: false,
		shortDescription: "A multi‑file C# Blackjack game featuring a real 52 card deck, dealer logic, and clean object‑oriented architecture."
	})
];

export default projects;
