// wait for entire html doc to be loaded before running code
document.addEventListener("DOMContentLoaded", () => {

  // Animate Tag Sphere
  // constants below in the array
  const myTags = [
    'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Flask', 'MongoDB',
    'Python', 'Java', 'Node.js', 'R', 'SQL', 'UML', 'Git',
    'Docker', 'Kubernetes', 'BeautifulSoup', 'Requests', 'GCP', 'MinIO',
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




  // Add top-nav padding class so content isn't hidden behind navbar
  document.body.classList.add('has-top-nav');

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

  // SMOOTH SCROLL FOR TOP NAV LINKS (account for fixed navbar height)
  const nav = document.querySelector('nav');
  const navHeight = nav ? nav.offsetHeight : 0;

  document.querySelectorAll('a.nav-icon[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  AOS.init(); // animation happens on all scroll

  // CERTIFICATE "CARD SWAP" MOTION ONE ENTRANCE
  const certCards = document.querySelectorAll('#certSwap .cert-slide');
  if (certCards.length) {
    // Motion One entrance only (hover handled by CSS flip)
    if (window.motion && window.motion.animate) {
      const { animate } = window.motion;

      // Staggered entrance on load
      certCards.forEach((card, index) => {
        animate(
          card,
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.5, delay: index * 0.08, easing: 'ease-out' }
        );
      });

    }
  }


});



