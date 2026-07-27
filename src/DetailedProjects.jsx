
import projects from "./data/projects";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LargeProjectCard() {
    const { id } = useParams()
    const projectId = Number(id)
    const project = projects.find(p => p.id === projectId)
    const navigate = useNavigate()
 
useEffect(() => {
    if (!project || !project.image || project.image.length <= 1) return;

    const slideshowEl = document.querySelector('.slideshow');
    let currentIndex = 0;
    let interval;
    let timeout;

    //  Preload images
    project.image.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    console.log('project.image');

    timeout = setTimeout(() => {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % project.image.length;
            slideshowEl.style.backgroundImage = `url(${project.image[currentIndex]})`;
        }, 4000);
    }, 300);

    return () => {
        clearTimeout(timeout);
        clearInterval(interval);
    };
}, [project]);




     return (
        <>
        <div className='large-project-card' >
            <div className='project-buttons'>
            <button className=" primary-btn btn" onClick={() => {
                const prev = document.referrer;
                const sameSite = prev && prev.startsWith(window.location.origin);
                if (window.history.length > 1 && sameSite) {
                    navigate(-1)
            } else {
                navigate('/')
            }}}>Back</button>
            {Object.entries(project.links).map(([key, value]) => (
							<a key={key} href={value.url} title={value.tooltip} target="_blank">
								<button className="primary-btn btn">{key === 'live' ? 'Live'  : 'Repo'}</button>
							</a>
						))}
                        </div>
            <div className='project-content'>
                {project.image.length > 1 ? (
                <div    className="slideshow" style={{ backgroundImage: `url(${project.image[0]})` }}></div>
           
            ) : (
           
            <img src={project.image} alt={project.title} />
            )}

            <div className="card-content">
            <h3>{project.title}</h3>
            {project.description.map((d) => (<p key={d}>{d}</p>))}
            <p className='tags'>{project.tags.join(', ')}</p>
            
            </div>
            <div className='next-prev-project'>
            {projects.find(p => p.id === projectId + 1) && <button className="primary-btn btn" onClick={() => navigate(`/projects/${projectId + 1}`)}>Next Project</button> }</div>
            {projects.find(p => p.id === projectId - 1) && <button className="primary-btn btn" onClick={() => navigate(`/projects/${projectId - 1}`)}>Previous Project</button>}
            </div>
        </div>
        
         </>
    );
}

export default LargeProjectCard