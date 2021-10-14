// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#d9ed92, #b5e48c, #76c893, #52b69a, #34a0a4, #168aad, #1a759f, #1e6091, #184e77 ",
  firstName: "Adam",
  middleName: "E.E.",
  lastName: "Collier",
  message: "  ",
  icons: [
    {
      image: "fa-hacker-news",
      url: "https://news.ycombinator.com/user?id=countz3r0"
    },
    {
      image: "fa-github-alt",
      url: "https://github.com/a-e-e-collier",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/adam-collier-77849717b/",
    },
    ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/yourfilename.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://collierlink.s3.us-east-2.amazonaws.com/resume.pdf",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/me2.png"),
  imageSize: 375,
  message:
    "I am a high-level analyst with a solid background and a dynamic range of cybersecurity and network defense skills. I have the expertise in IT configuration and technical support. Knowledgeable of online security research, planning, execution, and maintenance. I am skilled at providing training to less technical personnel on relevant cybersecurity threats, countermeasures, and procedures. I am a progressive, hands-on leader who provides critical business strategy support.",
  resume: "https://collierlink.s3.us-east-2.amazonaws.com/resume.pdf",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/me2.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/me2.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Computer Networking", value: 90 },
    { name: "IT Support", value: 85 },
    { name: "Access Management", value: 85 },
    { name: "Web/Block-Chain Development", value: 75 },
    { name: "Data Security", value: 90 },
    { name: "React", value: 75 },
    { name: "Cybersecurity Analysis", value: 85 },
    { name: "Network Security", value: 80 },
    { name: "Cloud Computing", value: 85 },
    { name: "System Administration", value: 80 },
    { name: "Risk Management", value: 85 },
    { name: "Application Security", value: 85},
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 90 },
    { name: "Troubleshooting", value: 80 },
    { name: "Decision Making", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time  opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "adam@adamcollier.link",
};

const experiences = {
  show: true,
  heading: "Certifications",
  data: [
    {
      role: 'CompTIA CSAP/Comptia Security Analytics Professional',// Here Add Company Name
      companylogo: require('../assets/img/csap.png'),
      date: 'September 2021',
    },
    {
      role: 'CompTIA CySA+',// Here Add Company Name
      companylogo: require('../assets/img/cysa.png'),
      date: 'September 2021',
    },
    {
      role: 'CompTIA Security+',// Here Add Company Name
      companylogo: require('../assets/img/sec.png'),
      date: 'April 2021',
    },
    {
      role: 'CompTIA A+',
      companylogo: require('../assets/img/a.png'),
      date: 'March 2021',
    },
    {
      role: 'AWS Certified Cloud Practitioner',
      companylogo: require('../assets/img/awsccp.png'),
      date: 'July 2020',
    },
    {
      role: 'AWS Certified Solutions Architect Associate',
      companylogo: require('../assets/img/awssaa.png'),
      date: 'July 2020',
    },{
      role: 'AWS Certified SysOps Adminastrator Associate',
      companylogo: require('../assets/img/awssysopsa.png'),
      date: 'September 2020',
    },{
      role: 'Google IT Support Certificate',
      companylogo: require('../assets/img/gits.png'),
      date: '2020',
    },{
      role: 'Six Sigma White Belt',
      companylogo: require('../assets/img/csscwb.png'),
      date: 'July 2020',
    },{
      role: 'Lean Six Sigma White Belt',
      companylogo: require('../assets/img/csscwb.png'),
      date: 'July 2020',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
