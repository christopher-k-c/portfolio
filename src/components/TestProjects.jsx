// import React from 'react';
// import TestCard from './TestCard';
// // import { Github } from "lucide-react"; // Remove this import
// import '../styles/testStyles.css';
// import {motion} from 'framer-motion'; // assuming you're using framer-motion like in ProjectContainer

// // Use the same project data structure from the provided code
// const projectsData = [
//   {
//     name: "Newlook Photoshop Plugin",
//     git: "https://github.com/christopher-k-c/nlplugin",
//     site: "https://github.com/christopher-k-c/nlplugin",
//     image: "project_05",
//     description:
//       "As studio developer, I built an Adobe Photoshop plugin designed for the Newlook retouch team. This all-in-one automation solution centralizes essential retouching actions, scripts, and workflows, streamlining the team's editing process. ",
//     tech: [
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
//     ],
//   },
//   {
//     name: "Bootleg Bill",
//     git: "https://github.com/christopher-k-c/SEI-64_PROJECT_FOUR_FRONT-END",
//     site: "https://mern-app-kajv.onrender.com/",
//     image: "project_04",
//     description:
//       "Over nine days, through harnessing the MERN Stack, and as a group of three, we built an e-commerce-inspired website for bootlegged cassette tapes. ",
//     tech: [
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//     ],
//   },
//   {
//     name: "The Phonograph",
//     git: "https://github.com/christopher-k-c/SEI-64_PROJECT_THREE/tree/main/thephonograph",
//     site: "https://thephonoapp.herokuapp.com/",
//     image: "project_03",
//     description:
//       "Inspired by Discogs.com, we built a full-stack record collection app in four days on a Django Framework, connected to a PostgreSQL database which utilised vanilla CSS, Tailwind and JavaScript to style its front-end.",
//     tech: [
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
//     ],
//   },
//   {
//     name: "Inventory Control App",
//     git: "https://github.com/christopher-k-c/SEI-64_PROJECT_TWO",
//     site: "https://inventorycontrolsystem02.herokuapp.com/",
//     image: "project_02",
//     description:
//       "Over four days, we built a web application with full CRUD operations, User Authentication and Association. The backend is powered by Node.js, Express, MongoDB and Mongoose; we utilised bootstrap templates and vanilla CSS for the front-end. I was team lead, responsible for user authentication and authorisation and more.",
//     tech: [
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
//     ],
//   },
//   {
//     name: "Tic Tac Toe",
//     git: "https://github.com/christopher-k-c/SEI-64_PROJECT_ONE",
//     site: "https://christopher-k-c.github.io/SEI-64_PROJECT_ONE/",
//     image: "project_01",
//     description:
//       "I built this project with HTML, CSS, JavaScript, JQuery and the SweetAlert Library. This app was my first experience programming in javascript, and the project took four days to complete.",
//     tech: [
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
//     ],
//   },
// ];

// // Map of image URLs - adapted to work with the project structure
// const getImageUrl = (imageName) => {
//   try {
//     return require(`./assets/projectImages/${imageName}.jpg`);
//   } catch (e) {
//     return 'https://via.placeholder.com/300';
//   }
// };

// // Add a simple Github SVG icon component
// const GithubIcon = () => (
//   <svg viewBox="0 0 128 128" className="w-8 h-8 text-white">
//     <g fill="currentColor">
//       <path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" />
//     </g>
//   </svg>
// );

// const TestProjects = () => {
//   return (
//     <section className="relative flex flex-col items-center z-10">
//       <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}}>
//         <h3 className='my-20 pt-10 pl-[20px] uppercase tracking-[20px] lg:text-6xl md:text-6xl sm:text-4xl text-lg font-bold bg-gradient-to-r from-slate-400 via-indigo-600 to-indigo-600 text-transparent bg-clip-text'>
//           Test Projects
//         </h3>
//       </motion.div>
      
//       <div className="container mx-auto px-4 pb-20 z-50 relative">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
//           {projectsData.map((project, index) => (
//             <TestCard key={index} className="overflow-hidden bg-gray-900 border-gray-800 backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-lg">
//               <div className="p-4 border-b border-gray-800">
//                 <GithubIcon />
//               </div>
              
//               <div className="p-4 bg-gray-800/50 border-b border-gray-800">
//                 <div className="flex gap-6 text-lg">
//                   <a
//                     href={project.git}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-md text-gray-400 hover:text-white transition-colors"
//                   >
//                     Git-Hub
//                   </a>
//                   <a
//                     href={project.site}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-md text-gray-400 hover:text-white transition-colors"
//                   >
//                     Live Site
//                   </a>
//                 </div>
//               </div>
              
//               <div className="relative min-h-[300px] test-gradient">
//                 <img
//                   src={getImageUrl(project.image)}
//                   alt={project.name}
//                   className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-[1]" />
//                 <div className="relative z-[2] p-6 h-full flex flex-col">
//                   <h3 className="text-2xl font-bold text-white/80 mb-4">{project.name}</h3>
//                   <p className="text-white/80 font-mono leading-relaxed">{project.description}</p>
//                 </div>
//               </div>
              
//               <div className="bg-gray-900 border-t border-gray-800 p-4">
//                 <h4 className="text-md text-gray-400 mb-4">Technologies Used</h4>
//                 <div className="flex gap-4">
//                   {project.tech.map((techIcon, i) => (
//                     <img key={i} src={techIcon} alt="Technology Icon" className="h-8 w-8" />
//                   ))}
//                 </div>
//               </div>
//             </TestCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestProjects; 