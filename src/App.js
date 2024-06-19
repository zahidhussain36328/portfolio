import './index.css';
import React, { useState, useEffect } from 'react';
import aboutus from './assets/images/about_section_image.png'
import badminton from './assets/images/badminton.png'
import bicycle from './assets/images/bicycle.png'
import contact_me_image from './assets/images/contact_me_image.png'
import creativewriting from './assets/images/creative-writing.png'
import hands from './assets/images/hands.png'
import Home_Image from './assets/images/Home_Image.png'
import logo_image from './assets/images/logo_image.png'
import microchip from './assets/images/microchip.png'
import traveling from './assets/images/traveling.png'
import whattoffer from './assets/images/what_do.jpeg'
import emailjs from "emailjs-com";
import Scrollspy from 'react-scrollspy'
import AOS from 'aos';
import ReactParticles from './ReactParticles';
import Skill from './Skills';

function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_mn6cy0e", // your actual service ID
      "template_ui7um7y", // your actual template ID
      {
        from_name: `${form.firstName}`,
        to_name: "Asad Malik",
        from_email: form.email,
        to_email: "nipunikajain@gmail.com",
        message: form.message,
      },
      "8L6JQ-OE0gLgxL4E2" // your actual public key
    )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Message sending failed.");
        }
      );
  };


  // ---------------
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const accordionData = [
    {
      title: 'AI/ML Solutions',
      content: 'Develop and deploy AI/ML models, optimize algorithms for performance, and deliver end-to-end data-driven solutions that solve complex business problems.'
    },
    {
      title: 'Product Management',
      content: 'Define product requirements, create detailed product roadmaps, manage the development lifecycle from ideation to launch, and conduct market research to ensure market readiness.'
    },
    {
      title: 'Tech Strategy and Innovation',
      content: 'Craft and implement innovative technology strategies, leveraging AI/ML and data analytics to drive business growth and solve intricate challenges.'
    },
    {
      title: 'Collaborative Leadership',
      content: 'Lead and collaborate with cross-functional teams, including Engineering, Marketing, UX/UI, and Sales, facilitating effective communication and coordination to achieve project milestones.'
    },
    {
      title: 'Agile Methodologies and Development',
      content: 'Apply agile methodologies like scrum and kanban to manage project workflows, conduct sprint planning and retrospectives, and ensure efficient and timely project delivery.'
    },
    {
      title: 'User-Centric Design and Feedback',
      content: 'Conduct usability testing, gather and incorporate user feedback into product updates, ensure high product quality through rigorous testing, and develop comprehensive user documentation and training materials.'
    }
  ];


  useEffect(() => {
    AOS.init({
      duration: 1000, // controls the duration of the animation
      once: true, // only applies the animation once
      easing: 'ease-in-out', // type of animation timing function
      mirror: false // whether elements should animate out while scrolling back
    });
  }, []); // initialize AOS only once when component mounts
  return (
    <div className="App">
      <>
        <header className='sticky-top'>
          <nav className="navbar  container navbar-expand-lg">
            <a className="navbar-brand" href="#">
              <img src={logo_image} className="img-fluid brand-logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                fill="white"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto my-2 my-lg-0">
                <Scrollspy className="navbar-nav ms-auto my-2 my-lg-0" items={['home', 'about', 'hobbies', 'offerings', 'blog', 'contact']} currentClassName="is-current">

                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#offerings">
                      Offerings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skills">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#blog">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      CV
                    </a>
                  </li>
                </Scrollspy>
              </ul>
            </div>
          </nav>
        </header>
        {/* main section no 1 start */}
        <div className='banner_sec'> 
          <div className="container" data-aos="zoom-in" data-aos-delay="200" id='home'>
            <div className="row mt-3">
              <div className="col-lg-6">
                <img
                  className="home_Image"
                  src={Home_Image}
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div className="text-light  main-section-text">
                  "Donec id justo non metus auctor commodo ut quis enim. Mauris
                  fringilla dolor vel condimentum imperdiet."
                </div>
                <div className="d-flex justify-content-end text-light main-section-text">
                  -Qaote Source
                </div>
                <div className="bannerinnerpaddingleft mt-5">
                  <h2 className="banner-text">NIPUNIKA JAIN</h2>
                  <div>
                    <div className="text-light-list mt-4" > AI/MLEngineer.</div>
                    <div className="text-light-list mt-3">
                      Aspiring Product Manager.
                    </div>
                    <div className="text-light-list mt-3"> Tech Strategist.</div>
                    <div className="text-light-list mt-3"> Creative Writer</div>
                  </div>
                </div>
                <div className="social-media-icon d-flex justify-content-center   mt-5 margin-tops-2">
                  <a href="#">
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>
                    </i>
                  </a>
                  <a href="#">
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </i>
                  </a>
                  <a href="mailto:nipunikajain@gmail.com">
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                      </svg>
                    </i>
                  </a>
                </div>
                
              </div>

            </div>
          </div>
          <span className='seprator main_sep'> </span>

        </div> 
        <div className='main_wrapper '>
          {/* main section no 2 start */}
          <div className="container " id='about'> 

            <div className="row  align-items-center">
              <div className="col-lg-6">
                <div className="meet-text mb-2">Meet Nipunika!</div>
                <div className=" meet-text-paragraph mt-0">
                  Hi there! I'm Nipunika Jain, seasoned AI/MI. engineer and aspiring
                  Tech Produce Manager with a passion for technology and innarion. With
                  ove 9 years of experience, I've beer ar the forefront of developing
                  and deploying mansformative data-driven solutions that drive
                  efficiency and create impart.
                </div>
                <div>
                  <button style={{ height: '32px' }} className='btn mt-4 bg-8D4E2F text-white'>View Portfolio</button>
                </div>
                {/* <div className='mt-3'>
              <button style={{height:'32px'}} className='btn bg-8D4E2F text-white'>View Resume</button>
              </div> */}
              </div>
              <div className="col-lg-6 text-center">
                <img
                  className="about_section_image"
                  src={aboutus}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className='seprator'> </div>
          {/* main section no 3 start */}
          <div className="container" id='hobbies'>
            <div className="row margin-tops-3">
              <div className="col-lg-12">
                <h1 className="text-center footer-text mainHeading">HOBBIES &amp; INTERESTS</h1>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4 mb-5">
                <div className="d-flex hobbies justify-content-center align-items-center">
                  <div className="text-center">
                    <img
                      width="40px"
                      className="filterwhite"
                      src={microchip}
                      alt=""
                      srcSet=""
                    />
                  </div>
                  <h5 className="text-white ps-3 mb-0">AIResearch</h5>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="d-flex hobbies justify-content-center align-items-center">
                  <div className="text-center">
                    <img
                      width="40px"
                      className="filterwhite"
                      src={bicycle}
                      alt=""
                      srcSet=""
                    />
                  </div>
                  <h5 className="text-white ps-3 mb-0">Cycling</h5>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="d-flex hobbies justify-content-center align-items-center">
                  <div className="text-center">
                    <img
                      width="40px"
                      className="filterwhite"
                      src={badminton}
                      alt=""
                      srcSet=""
                    />
                  </div>
                  <h5 className="text-white ps-3 mb-0">Badminton</h5>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="d-flex hobbies justify-content-center align-items-center">
                  <div className="text-center">
                    <img
                      width="40px"
                      className="filterwhite"
                      src={creativewriting}
                      alt=""
                      srcSet=""
                    />
                  </div>
                  <h5 className="text-white ps-3 mb-0">Creative Writing</h5>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="d-flex hobbies justify-content-center align-items-center">
                  <div className="text-center">
                    <img
                      width="40px"
                      className="filterwhite"
                      src={hands}
                      alt=""
                      srcSet=""
                    />
                  </div>
                  <h5 className="text-white ps-3 mb-0">Driving</h5>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="d-flex hobbies justify-content-center align-items-center">
                  <div className="text-center">
                    <img
                      width="40px"
                      className="filterwhite"
                      src={traveling}
                      alt=""
                      srcSet=""
                    />
                  </div>
                  <h5 className="text-white ps-3 mb-0">Travelling</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='seprator'> </div>
          {/* main section no 4 start */}
          <div className="container" id='offerings'>
            <div className="row margin-tops-3">
              <div className="col">
                <h1 className="text-center footer-text">WHAT DO I OFFER?</h1>
                <div className="text-center text-light offer-text">
                  When it comes to tech and innovation, I do my best to stay ahead of
                  the curve. Here's a glimpic of what I bring to the mix
                </div>
              </div>
              <div className="row faqs-row">
                <div className="col-lg-6">
                  <img
                    className="what-img"
                    src={whattoffer}
                    alt=""
                  />
                </div>
                <div className="col-lg-6">
                  <div className="accordion">
                    {accordionData.map((item, index) => (
                      <div className="accordion-item" key={index}>
                        <button
                          id={`accordion-button-${index}`}
                          aria-expanded={expanded === index}
                          onClick={() => toggleAccordion(index)}
                        >
                          <span className="accordion-title">{item.title}</span>
                          <span className="icon" aria-hidden="true" />
                        </button>
                        <div className={`accordion-content ${expanded === index ? 'expanded' : ''}`}>
                          <p>{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='seprator'> </div>
          <div className='other_skill '>
            <div className="row w-100 margin-tops-3 pt-3">
              <div className="col">
                <h1 className="text-center footer-text">SKILLS STACK</h1>

              </div>
              <Skill />

            </div>
          </div>
          <div className='seprator'> </div>
          <div id='blog' className="row margin-tops-3 mx-0"><div className="col-lg-12"><h1 className="text-center footer-text">BLOGS</h1></div></div>
          <div className='container mt-5'>
            <div className='row'>
              <div className='col-lg-4 mb-3'>
                <img height='277px' src='https://miro.medium.com/v2/resize:fit:1100/format:webp/0*ZKsWDGFWTMAEiD5q.jpg' className='w-100' />
                <h4 className='text-B3C3CF pt-3'>The Exponential Growth of AI Compute</h4>
                <a href='https://medium.com/nimbusniche/the-exponential-growth-of-ai-compute-powering-the-next-era-of-generative-ai-and-accelerated-3b63649b9ac3' className='btn bg-8D4E2F text-white'>Read more</a>
              </div>
              <div className='col-lg-4 mb-3'>
                <img height='277px' src='https://miro.medium.com/v2/resize:fit:1100/format:webp/0*dZC85mxet0MQc3u_.jpg' className='w-100' />
                <h4 className='text-B3C3CF pt-3'>The AI Enigma</h4>
                <a href='https://medium.com/nimbusniche/the-ai-enigma-a-playful-exploration-of-prompt-techniques-a3d3d60a9b12' className='btn bg-8D4E2F text-white'>Read more</a>
              </div>
              <div className='col-lg-4 mb-3'>
                <img height='277px' src='https://miro.medium.com/v2/resize:fit:828/format:webp/0*hcfOtAkAqyg0sjwy.jpg' className='w-100' />
                <h4 className='text-B3C3CF pt-3'>The Decision Dilemma</h4>
                <a href='https://medium.com/nimbusniche/the-decision-dilemma-understanding-decidophobia-in-everyday-life-part-1-729d911b0b80' className='btn bg-8D4E2F text-white'>Read more</a>
              </div>
            </div>
          </div>
        </div>

        <div className='seprator contact-sp'> </div>
        <div id='contact' className="footer  ">

          <div className="container">
            <div className="row mt-lg-5 ">
              <div className="col-lg-5">
                <div className="contact-text custom-color  mt-5">CONTACT ME!</div>
                <div className="mt-4">
                  <div className="card-discription mt-2 custom-color">
                    nipunikajain@gmail.com
                  </div>
                  {/* <div className="card-discription mt-2 custom-color">12345678</div> */}
                </div>
                <div className="mt-4">
                  <div className="card-discription mt-2 custom-color">
                    123 Denso Street New York, NY 12515</div>
                </div>
              </div>
              <div className="col-lg-7">
                {/* <div className="text-white ps-3 mb-4">Name (Required)</div> */}
                <form className="row" onSubmit={handleSubmit}>
                  <div className="col-lg-6 mb-4">
                    <label htmlFor="firstName" className="text-white ps-3 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="custom-input px-3 py-3"
                      value={form.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <label htmlFor="email" className="text-white ps-3 mb-2">
                      Email (Required)
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="custom-input px-3 py-3"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-12 mb-4">
                    <label htmlFor="message" className="text-white d-block ps-3 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      className="custom-input px-3 py-3 w-100"
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className='mt-4'>
                    <button
                      type="submit"
                      className="send-button px-4 mt-4 py-2"
                      style={{ width: "fit-content" }}
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer_section">
          <ReactParticles />
          <div>
            <h1 className="text-center footer-text">Nipunika Jain</h1>
            <div className="mt-5 text-center text-question text-light">
              Thanks for visiting my website, drop me a note if you want to reach me
            </div>
          </div>
        </footer>

      </>

    </div>
  );
}

export default App;
