
import React from 'react';
import { Container, Row, Tab, Tabs } from 'react-bootstrap';

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { ProjectCard } from './ProjectCard';
import { WeatherApp } from './WeatherApp';

export const Projects = () => {

  const projects = [
          {
              title: "Bussines StartUp",
              description: "Design & Development",
              imgUrl: projImg1,
          },
          {
              title: "Bussines StartUp",
              description: "Design & Development",
              imgUrl: projImg2,
          },
          {
              title: "Bussines StartUp",
              description: "Design & Development",
              imgUrl: projImg3,
          },
          {
              title: "Bussines StartUp",
              description: "Design & Development",
              imgUrl: projImg1,
          },
          {
              title: "Bussines StartUp",
              description: "Design & Development",
              imgUrl: projImg2,
          },
          {
              title: "Bussines StartUp",
              description: "Design & Development",
              imgUrl: projImg3,
          }
      ]
  return(
    <Container className='projects'>
      <Tabs defaultActiveKey="tab-one" id="fill-tab-example" className="mb-3" fill>
        <Tab eventKey="tab-one" title="Tab One" >
          <Row>
            {
              projects.map((project, index) => {
                return(
                  <ProjectCard key={index} {...project} />
                )
              })
            }
          </Row>
        </Tab>
        <Tab eventKey="tab-two" title="Weather App">
          <WeatherApp />
        </Tab>
        <Tab eventKey="tab-three" title="Tab Three">
          Tab content for Loooonger Tab
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          Tab content for Contact
        </Tab>
      </Tabs>
    </Container>
  )
  
}
