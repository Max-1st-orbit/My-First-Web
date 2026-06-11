
const Home     = document.getElementById("home");
const Projects = document.getElementById("proj");
const About    = document.getElementById("abou");
const Contact  = document.getElementById("cont");

// Home — navigate to index
if (Home)     Home.addEventListener('click',     () => window.location.href = "index.html");

// Projects — navigate to videoGames
if (Projects) Projects.addEventListener('click', () => window.location.href = "videoGames.html");

// About — go to #about section on home page
if (About)    About.addEventListener('click', () => {
  if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || window.location.pathname.endsWith("/")) {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "index.html#about";
  }
});

// Contact — navigate to Contact page
if (Contact)  Contact.addEventListener('click',  () => window.location.href = "Contact.html");