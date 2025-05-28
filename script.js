document.addEventListener("DOMContentLoaded", () => {
  // Animate Tag Sphere
  const myTags = [
    'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Flask', 'MongoDB',
    'Python', 'Java', 'SQL', 'Bootstrap', 'UML', 'Git', 'GitHub',
    'Machine Learning', 'TensorFlow', 'PyTorch', 'NumPy',
    'Pandas', 'Matplotlib', 'SciPy', 'Sklearn'
  ];

  const container = document.getElementById("skillSphere");

  if (container && container.offsetWidth > 0 && container.offsetHeight > 0) {
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

  // Loader logic
  const loader = document.getElementById('loader');
  setTimeout(() => {
    if (loader) {
      loader.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => loader.remove(), 500);
    }
  }, 3800);

  AOS.init(); // animation happens on all scroll

  // Hamburger toggle
  const btn = document.getElementById('hamburgerBtn');
  const menu = document.getElementById('slideOutMenu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('-translate-x-full');
      menu.classList.toggle('translate-x-0');
    });

    // Close menu when any link is clicked
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('-translate-x-full');
        menu.classList.remove('translate-x-0');
      });
    });
  }
});
