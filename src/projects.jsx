import ProjectList from './ProjectCards';
import projects from './data/projects';
import { useState } from 'react';

function ProjectsPage() {
	const [filter, setFilter] = useState([]);
	const [toggle, setToggle] = useState(false);
	const filterList = [
	 'React',
  'Typescript',
  'JavaScript',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Fullstack',
  'Game Development',
  "C#",
  'Console Applications',
	];
	function addFilterTag(tag) {
		if (!filter.includes(tag)) {
			setFilter([...filter, tag]);
		}
	}

	function removeFilterTag(tag) {
		setFilter(filter.filter((f) => f !== tag));
	}
	const filteredProjects =
		filter.length === 0
			? projects
			: projects.filter((project) =>
					filter.every((f) => project.tags.includes(f)),
				);

	function toggleFilter() {
		setToggle((prev) => !prev);
	}
console.log(filteredProjects.length)
	return (
		<>
			<div id="projects">
				<h2>Projects</h2>

				<div className="filters">
					<button
						className="primary-btn btn"
						onClick={() => setToggle(!toggle)}
					>
						Filter
					</button>
                    {toggle &&
                    <div>
					<h3>Filter by:</h3>
					{filterList.map((tag, index) => (
						<button
							key={index}
							onClick={() => addFilterTag(tag)}
							className="primary-btn btn"
						>
							{tag}
						</button>
					))}
				{filter.length > 0 &&
				<div className="filter-tags">
                    
					<h3>Filters:</h3>
					{filter.map((tag, index) => (
						<p key={index} onClick={() => removeFilterTag(tag)}>
							{tag}
							<button className="close">X</button>
						</p>
					))}
				</div>}
                {filter.length > 0 && <button className="primary-btn btn" onClick={() => setFilter([])}>Clear Filters</button>}
                {filter.length > 0 && filteredProjects.length === 0 && <p>No projects found</p>}
                </div> }
                </div>

				<ProjectList projects={filteredProjects} />
			</div>
		</>
	);
}

export default ProjectsPage;
