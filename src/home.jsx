 import projects from './data/projects'
 
import ProjectList from './ProjectCards';

import stack from './data/stack'

console.log(stack)




 function Home() {

  
   return (
     <div>
       <h1>Project Showcase</h1>
       <h2>My preferred stack:</h2>
       <div className="languages">
        
      {stack.map((stack) => (<div key={stack.id}> {stack.preferred === true &&
       <div className="stack">
        <p>{stack.icon}</p>
         <p>{stack.name}</p>
         </div>
      }
         </div>
      
        ))}
       
       </div>
       
       
     <ProjectList mainPage={true} projects={projects} />

     <div className="projects">
      
      <button className="primary-btn btn" onClick={() => window.location.href = '/projects'}>View all projects here</button>
     </div>
     </div>
   );
 }

 export default Home
