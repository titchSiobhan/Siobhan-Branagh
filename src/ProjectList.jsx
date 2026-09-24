import ProjectCard from "./ProjectCards";

function ProjectList({ mainPage, projects}) {
	
	const visibleProjects = mainPage
		? projects?.filter((project) => project.mainPage === true)
		: projects;
	return (
		<div>
			{visibleProjects?.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
}

export default ProjectList;