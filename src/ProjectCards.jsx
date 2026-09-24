import projects from './data/projects.json';
import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import LargeProjectCard from './DetailedProjects';

function ProjectCard({ project }) {
	

	function seeMore(event) {
		const seeMore = event.currentTarget.querySelector('.seeMore');
		seeMore.style.opacity = '1';
		seeMore.style.transition = '0.5s ease-in-out';
	}
	function hideMore(event) {
		const seeMore = event.currentTarget.querySelector('.seeMore');
		seeMore.style.opacity = '0';
		seeMore.style.transition = '0.5s ease-in-out';
	}


	
	const navigate = useNavigate();
	
	return (
		<>
			<div
				className={
					project.id % 2 === 0 ? 'project-card flipped' : 'project-card'
				}
				onMouseEnter={seeMore}
				onMouseLeave={hideMore}
				
				onClick={() => navigate(`/${project.type}/${project.id}`, {
					state: {
						canGoBack: true
					}
				})}
			>
				
				{project.image.length > 1 ? (
					<img src={project.image[0]} alt={project.title} />
				) : (
					<img src={project.image} alt={project.title} />
				)}
				<div className="card-content">
					<h3>{project.title}</h3>
					<p>{project.shortDescription}</p>
					{project.tags && <p>Tags: {project.tags.join(', ')}</p>}
					{/* <p>{project.tags.join(', ')}</p> */}
					<div className="btns">
						
						{Object.entries(project.links).map(([key, value]) => (
							<a key={key} href={value.url} title={value.tooltip} target="_blank">
								<button className="primary-btn btn">{key === 'live' ? 'Live'  : 'Repo'}</button>
							</a>
						))}
						<p className="seeMore">See More</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectCard;

// function ProjectList({ mainPage, projects}) {
	
// 	const visibleProjects = mainPage
// 		? projects?.filter((project) => project.mainPage === true)
// 		: projects;
// 	return (
// 		<div>
// 			{visibleProjects?.map((project) => (
// 				<ProjectCard key={project.id} project={project} />
// 			))}
// 		</div>
// 	);
// }

// export default ProjectList;
