
import { Outlet, Link } from "react-router-dom"
import { useState } from "react";

function Homepage() {
const [toggle, setToggle] = useState(false);
const [contactToggle, setContactToggle] = useState(false);
    
function toggleNav() {
    setToggle((prev) => !prev);
}

function contactToggleButton() {
    setContactToggle((prev) => !prev);
}
    return (
    <div className='mainPage'>
         
         <div className="nav-toggle" onClick={toggleNav}>
            <i className="fa-solid fa-ellipsis"></i>
         </div>

        
            <nav className={ toggle ? " nav active" : "nav"}>
                <ul>
                    <li><Link to="/" onClick={toggleNav}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleNav}>About</Link></li>
                    <li><Link to="/projects" onClick={toggleNav}>Projects</Link></li>
                    <li><Link to="/contact" onClick={toggleNav}>Contact</Link> </li>
                </ul> 
                 
            </nav>

            <div className="waveOne"></div>
         <div className="waveTwo"></div>
         {/* <div className="waveThree"></div>
         <div className="waveFour"></div> */}
         
            <main>
                
            <section className='content'>
                <Outlet />
               
            </section>
        </main>
        
        <div className="mask-row"></div>
          
          <div className="contact-toggle" onClick={contactToggleButton}>  
            <i className="fa-solid fa-address-card"></i>
          </div>


        <aside className={contactToggle ? "aside active" : "aside"}>
            <h1>Siobhan Branagh</h1>
            <h2>Web Developer</h2>
            <h3>Contact:</h3>
            <ul>
                <li className='email' onClick={contactToggleButton}><i className="fa-regular fa-envelope"></i> <a href="mailto:siobhan.branagh@gmail.com">siobhan.branagh@gmail.com</a></li>
                <li onClick={contactToggleButton}><i className="fa-brands fa-github" ></i> <a href="https://github.com/titchSiobhan" target='_blank'    >titchSiobhan</a></li>
               
            </ul>
        </aside>
    </div>
    );
}

export default Homepage