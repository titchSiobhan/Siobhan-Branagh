
import ProjectCard from "./ProjectCards";
import websites from "./data/websites.json";

function WebsitesPage() {


    if (!websites || websites.length === 0) {
        return <p>Loading websites...</p>;
    }



    return (
        <>
        <div className="websites-header">
            <h1>Websites</h1>
           <p>Take a look at some of the websites I have designed and developed. Each project has its own approach, features, and challenges, giving me the opportunity to explore different ideas and technologies. Click on the cards to find out more about each project and how it was built.</p>

             {websites.map((website) => (
            <div key={website.id} className="project-card-container"> 
            <ProjectCard key={website.id} project={website} />
          
           </div>
        )) }
        </div>
       
       
        </>
    )
}

export default WebsitesPage

