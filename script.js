// wait for entire html doc to be loaded before running code
document.addEventListener("DOMContentLoaded", () => {

  // Animate Tag Sphere
  // constants below in the array
  const myTags = [
    'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Flask', 'MongoDB',
    'Python', 'Java', 'SQL', 'Bootstrap', 'UML', 'Git', 'GitHub',
    'Docker', 'BeautifulSoup', 'Requests', 'GCP', 'MinIO',
    'Machine Learning', 'TensorFlow', 'PyTorch', 'NumPy',
    'Pandas', 'Matplotlib', 'SciPy', 'Sklearn'
  ];


  // the container where the sphere will appear
  const container = document.getElementById("skillSphere");

  // if container exists do thios
  if (container && container.offsetWidth > 0 && container.offsetHeight > 0) {
    // tagclouyd is the functionm for this library
    TagCloud("#skillSphere", myTags, {
      radius: 250,
      maxSpeed: "normal",
      initSpeed: "normal",
      direction: 135,
      keep: true,
    });
  } else {
    console.warn("SkillSphere container not found or has 0 size.");
  }




  // LOADING SCREEN LOGIC
  const loader = document.getElementById('loader');

  // After 3.8 seconds, hide the loader, i.e. page is ready
  setTimeout(() => {
    if (loader) {
      // makes it invisible
      loader.classList.add('opacity-0', 'pointer-events-none');
      // removes the loader from the dom after 0.5 secs
      setTimeout(() => loader.remove(), 500);
    }
  }, 3800);

  AOS.init(); // animation happens on all scroll


  // CERTIFICATE SCROLL SECTION
  new Splide('.splide', {
    type   : 'loop',
    perPage: 3,
    gap    : '2rem',
    autoplay: true,
    interval: 4500,    // time in ms between slides
    pauseOnHover: true,
    pagination: true,
    arrows: false,
    breakpoints: {
      640: { perPage: 1 },
      1024: { perPage: 2 },
      1280: { perPage: 3 },
    },
  }).mount();


});



