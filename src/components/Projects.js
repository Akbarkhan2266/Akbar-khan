import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ProjImg1.png";
import projImg2 from "../assets/img/ProjImg2.png";
import projImg3 from "../assets/img/ProjImg3.png";
import projImg4 from "../assets/img/ProjImg4.png";
import projImg5 from "../assets/img/ProjImg5.png";
import projImg6 from "../assets/img/ProjImg6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "NewsHub",
      description: "This is a news app in which you find latest news of different feild like sports, entertainment,sceince and many more.....",
      imgUrl: projImg1,
      url:"www.google.com"
    },
    {
      title: "BusinessHub",
      description: "This is a E-commerce website in which you explore the latest fashion , accessories in many more.....",
      imgUrl: projImg2,
    },
    {
      title: "To-do List",
      description: "in it you mark your reminder work for which you done after a time..... ",
      imgUrl: projImg3,
    },
    {
      title: "Weather App",
      description: "This shows you the current weather of the city which you want to known..... ",
      imgUrl: projImg4,
     
    },
    {
      title: "Word App",
      description: "in which you enjoy with thw words.....",
      imgUrl: projImg5,
    },
    {
      title: "Password Generator",
      description: "By the help of it you generate your strong password without any stress.....",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>There are some list of projects which would i make in development feild....</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
