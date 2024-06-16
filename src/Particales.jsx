import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesComponent = () => {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000000", // Change to your desired background color
            },
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff", // Change to your desired particle color
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 3,
            },
            move: {
              enable: true,
              speed: 2,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesComponent;
