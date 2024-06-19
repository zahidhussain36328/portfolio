 
import React, { useEffect } from 'react';
import Python from './assets/logo/Python.png'
import Numpy from './assets/logo/Numpy.png'
import download from './assets/logo/download.png'
import MySQL from './assets/logo/MySQL.png'
import Pytorch from './assets/logo/Pytorch.png'
import ai from './assets/logo/ai.png'
import pycharm from './assets/logo/pycharm.png'
import git from './assets/logo/Git.png'
import docker from './assets/logo/Docker.png'
import openai from './assets/logo/openai.png'
import HuggingFace from './assets/logo/HuggingFace.png'
import Linux from './assets/logo/Linux.png'
import databricks from './assets/logo/databricks.png'
import googlecloudplatform from './assets/logo/google-cloud-platform.png'
import { Container } from 'react-bootstrap';
const Skill = () => {
    useEffect(() => {
      const logos = document.querySelectorAll('.skill_logo img');
      logos.forEach((logo) => {
        const randomX = Math.random() * 10 - 5;
        const randomY = Math.random() * 10 - 5;
        logo.style.animation = `moveLogo 1s infinite alternate linear`;
        logo.style.transform = `translate(${randomX}px, ${randomY}px)`;
      });
    }, []);
  
    return (
        <div className='skill-bg'>
            
        <Container>

      <div className='row my-lg-5 my-3'>
        <div className='col-md-4 mb-3 mb-lg-0 skill_logo'>
          <img src={Python} className='img-fluid' alt="Python" />
          <img src={git} className='img-fluid' alt="git" />
          <img src={docker} className='img-fluid' alt="docker" />
          <img src={openai} className='img-fluid' alt="openai" />
          <img src={HuggingFace} className='img-fluid' alt="HuggingFace" />
        </div>
        <div className='col-md-4 mb-3 mb-lg-0 skill_logo'>
          <img src={download} className='img-fluid' alt="download" />
          <img src={Numpy} className='img-fluid' alt="Numpy" />
          <img src={MySQL} className='img-fluid' alt="MySQL" />
          <img src={Pytorch} className='img-fluid' alt="Pytorch" />
          <img src={ai} className='img-fluid' alt="ai" /> 
        </div>
        <div className='col-md-4 mb-3 mb-lg-0 skill_logo'>
          <img src={Linux} className='img-fluid' alt="Linux" />
          <img src={databricks} className='img-fluid' alt="databricks" />
          <img src={googlecloudplatform} className='img-fluid' alt="googlecloudplatform" />
          <img src={pycharm} className='img-fluid' alt="pycharm" />
        </div>
      </div>
      </Container>
      </div>
 
    );
  };
  
  export default Skill;