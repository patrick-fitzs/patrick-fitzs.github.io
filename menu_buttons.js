const btn = document.getElementById('hamburgerBtn');
const menu = document.getElementById('slideOutMenu');

if (btn && menu) {
  // Toggle on click
  btn.addEventListener('click', () => {
    menu.classList.toggle('-translate-x-full');
    menu.classList.toggle('translate-x-0');
  });

  // Show on hover
  btn.addEventListener('mouseenter', () => {
    menu.classList.remove('-translate-x-full');
    menu.classList.add('translate-x-0');
  });

  // Hide when mouse leaves the button or menu
  const hideMenu = () => {
    menu.classList.add('-translate-x-full');
    menu.classList.remove('translate-x-0');
  };

  btn.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!menu.matches(':hover')) hideMenu();
    }, 100); // slight delay to allow hover transition to menu
  });

  menu.addEventListener('mouseleave', hideMenu);

  // Close on menu link click
  const links = menu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', hideMenu);
  });
}
