function createProject({
	id,
	title,
	description,
	image,
	tags,
	links,
	shortDescription,
	mainPage,
}) 
{
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
		description:"This fullstack social media platform that allows users to create their own profile, post either images or text posts, and choose their profile privacy setting. Each user is able to search others, send friend request, and switch their feed to friends only or view global posts. The platform with secure authentication, responsive UI and scalable backend architecture"
			,
		image: '/project-img/barely_social.png',
		tags: [
			'JavaScript',
			'React',
			'HTML',
			'CSS',
			'Node.js',
			'Express',
			'PostgreSQL',
			'Prisma',
			'REST API',
			'JWT Auth',
			'Cloudinary',
			'Fullstack'
		],
		links: {
			live: {url:'https://barely-social.netlify.app/', tooltip:'Live'},
			repoFrontend: {url:'https://github.com/titchSiobhan/odin-book-frontend', tooltip: 'Frontend'},
			repoBackend: {url:'https://github.com/titchSiobhan/odin-book-backend', tooltip: 'Backend'},
		},
		mainPage: true,
		shortDescription:'A fullstack social media platform with secure authentication, photo and text posting, public/private profiles, friends system, adn infinite scroll feed'
	}),
	createProject({
		id: 2,
		title: 'Pet Care Simulator',
		description:
			'Pet Care Simulator is a cosy, browser‑based game built with vanilla JavaScript where you take care of a virtual pet throughout the day. You manage its hunger, mood, and energy through simple interactive actions, watching its stats change in real time. The project focuses on DOM manipulation, state updates, timed events, and responsive UI behavior. All wrapped in a playful, approachable design.',
		image: '/petCare.png',
		tags: ['JavaScript', 'HTML', 'CSS', 'Frontend'],
		links: {
			live: {url: 'https://titchsiobhan.github.io/Pet-care-simulator/', tooltip: 'Live'},
			repo: '#',
		},
		mainPage: true,
		shortDescription:
			'A small JavaScript game where you look after a virtual pet by feeding, keeping it happy.',
	}),

	
	
];

export default projects;
