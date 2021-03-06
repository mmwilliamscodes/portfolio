import React, { Component } from 'react';
import Footer from '../Footer';
import Project1 from '../img/projects/project1.jpg';
import Project2 from '../img/projects/project2.jpg';
import Project3 from '../img/projects/project3.jpg';
import Project4 from '../img/projects/project4.jpg';
import Project5 from '../img/projects/project5.jpg';

class Projects extends Component {
    render(){
        return(
            <div id="bg-img">
            <main id="work">
            <h1 className="lg-heading">My <span className="text-secondary">Work</span></h1>
            <h2 className="sm-heading">
              Check out some of my projects
            </h2>
            <div className="projects">
              <div className="item">
                <a href="https://mmwilliamscodes.github.io/landing-page/" target="_blank" rel="noopener noreferrer">
                  <img src={Project1} alt="project1" />
                </a>
                <a href="https://mmwilliamscodes.github.io/landing-page/" target="_blank" rel="noopener noreferrer" className="btn-light"><i className="fas fa-eye"></i>Landing Page</a>
                <a href="https://github.com/mmwilliamscodes/landing-page" target="_blank" rel="noopener noreferrer" className="btn-dark"><i className="fab fa-github"></i>Github</a>
              </div>
              <div className="item">
                <a href="https://mmwilliamscodes.github.io/social_network_page/" target="_blank" rel="noopener noreferrer">
                  <img src={Project2} alt="project2" />
                </a>
                <a href="https://mmwilliamscodes.github.io/social_network_page/" target="_blank" rel="noopener noreferrer" className="btn-light"><i className="fas fa-eye"></i>Social Network</a>
                <a href="https://github.com/mmwilliamscodes/social_network_page" target="_blank" rel="noopener noreferrer" className="btn-dark"><i className="fab fa-github"></i>Github</a>
              </div>
              <div className="item">
                <a href="#!">
                  <img src={Project3} alt="project3" />
                </a>
                <a href="#!" className="btn-light"><i className="fas fa-eye"></i>Project</a>
                <a href="#!" className="btn-dark"><i className="fab fa-github"></i>Github</a>
              </div>
              <div className="item">
                <a href="#!">
                  <img src={Project4} alt="project4" />
                </a>
                <a href="#!" className="btn-light"><i className="fas fa-eye"></i>Project</a>
                <a href="#!" className="btn-dark"><i className="fab fa-github"></i>Github</a>
              </div>
              <div className="item">
                <a href="#!">
                  <img src={Project5} alt="project5" />
                </a>
                <a href="#!" className="btn-light"><i className="fas fa-eye"></i>Project</a>
                <a href="#!" className="btn-dark"><i className="fab fa-github"></i>Github</a>
              </div>
            </div>
          </main>
          <Footer />
          </div>
        )
    }
}

export default Projects;