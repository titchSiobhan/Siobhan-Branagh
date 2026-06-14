import { Link } from 'react-router-dom';
import stack from './data/stack';

function AboutPage() {
	return (
		<>
			<div id="about">
				<div className="about-text">
					<h2>I'm Siobhan</h2>
					<p>a web developer who loves to see everything click into place.</p>

					<p>
						I'm a self-taught developer. I started with Codecademy, but quickly
						saw the format didn't suit how I learn. Switching to The Odin
						Project changed everything with their project-driven style. Which
						lead to me wanting to make my own projects alongside them.
					</p>

					<p>
						I love watching everything come together on the frontend, but I feel
						much more at home working on the backend, getting things to work
						behind the scenes.
					</p>

					<p>
						Before I started coding I spent over ten years working in a
						haberdashery, where I had plenty of opportunities to play with
						different colours and textures.
					</p>

					<p>
						That hands-on experience is naturally used in everyday life, as well
						as my frontend work. Choosing colour pallets and seeing how they
						interact with each other genuinely brings me joy.
					</p>

					<Link to="/projects">
						<button className="primary-btn about-btn btn">
							See my projects here
						</button>
					</Link>
				</div>

				<div className="skills">
					<h2>Skills</h2>
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
