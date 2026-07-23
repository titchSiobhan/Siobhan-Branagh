import { Link } from 'react-router-dom';
import stack from './data/stack';

function AboutPage() {
	return (
		<>
			<div id="about">
				<div className="about-text">
					<h2>I'm Siobhan</h2>
					<p>a web developer who loves seeing everything click into place.</p>

					<p>
						I'm a self-taught developer. I started with Codecademy, but quickly
						saw the format didn't suit how I learn. Switching to The Odin
						Project changed everything with their project-driven style. It lead to me wanting to make my own projects alongside them.
					</p>

					<p>
						I enjoy backend development because i like building the logic that makes an application work. Whether its designing APIs, handling authentication, or creating game mechanics, I enjoy being able to take an idea and turn it into something that behaves the way that I imagined.
					</p>

					<p>
						Before I started coding I spent over ten years working in a
						haberdashery, where I had plenty of opportunities to play with
						different colours and textures.
					</p>

					<p>
						That hands-on experience is naturally used in everyday life, as well
						as my frontend work. Choosing colour palettes and seeing how they
						interact with each other genuinely brings me joy.
					</p>

					<Link to="/projects">
						<button className="primary-btn about-btn btn">
							View my projects
						</button>
					</Link>
				</div>

				<div className="skills">
					<h2>Languages</h2>
					<div className="language-stack skill-stack">
						{stack
							.filter((item) => item.type === 'skill')
							.map((item) => (
								<div key={item.id} className="stack-item">
									<p>{item.icon}</p>
									<p className="stack-name">{item.name}</p>
								</div>
							))}
					</div>
				</div>

				<div className="skills">
					<h2>Tools</h2>
					<div className="language-stack tool-stack">
						{stack
							.filter((item) => item.type === 'tool')
							.map((item) => (
								<div key={item.id} className="stack-item">
									<p>{item.icon}</p>
									<p className="stack-name">{item.name}</p>
								</div>
							))}
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutPage;
