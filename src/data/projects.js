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
];

export default projects;
