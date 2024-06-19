import boatstore from './assets/project-1.png';
import sneaker from './assets/sneaker.png';
import keeper from './assets/hospital.jpeg';
import netflix from './assets/pandus1.png'

export default [
    {
      id:0,
      name: "MovieVerse",
      img:netflix,
      techstack:"React, Redux, Firebase, Node",
      details:". Created a Netfix-like streaming platform using React, Node.js,Express-js and MongoDB. Built a responsive front-end with Redux for state management, connected to a secure back-end for user authentication.",
      github:"https://github.com/rugs07/Netflix-Clone",
      livesite:"https://movieverse-sync.netlify.app/",
      },
      {
      id:1,
      name: "Medlocater",
      img: keeper,
      techstack:"React, Firebase, MapGL",
      details:"Medlocater is a app to find hospitals nearby in emergency situation.Integrated Firebase Google authentication for secure user sign-in and used OpenAPIfy for efficient location data retrieval. Visualized locations with MapLibre GL and hosted on Netlify for reliability.",
      github:"https://github.com/rugs07/Medlocater",
      livesite:"https://medlocater.netlify.app/SignIn",
      },
      {
      id:2,
      name: "Techno-Store",
      img:boatstore,
      techstack:"React, Strapi CMS, SCSS, Stripe",
      details:"Engineered a dynamic e-commerce platform for Techno-Store showcasing Boat products like headphones and smartwatches, leveraging ReactJS, HTML, CSS, Strapi CMS, and Stripe for payments.",
      github:"https://github.com/rugs07/BoatStore",
      livesite:"https://www.linkedin.com/feed/update/urn:li:activity:7085936487376068609/",
      },
      {
      id:3,
      name: "SneakerShop",
      img:sneaker,
      techstack:"HTML, CSS, JavaScript",
      details:"SneakerShop is a dashboard of premium sneakers available in market, made with vanilla JavaScript. Responsive site makes a great template for a awesome sneaker store.",
      github:"",
      livesite:"",
      },
];
