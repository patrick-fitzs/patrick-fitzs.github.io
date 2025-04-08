// Wait for DOM to fully load before running anything
document.addEventListener("DOMContentLoaded", () => {
  // Tags for the animated sphere
  const myTags = [
    'JavaScript', 'HTML', 'CSS', 'Flask', 'MongoDB',
    'Python', 'Java', 'SQL', 'Bootstrap', 'UML', 'Git', 'GitHub',
    'Machine Learning', 'TensorFlow', 'PyTorch', 'NumPy',
    'Pandas', 'Matplotlib', 'SciPy'
  ];

  // Grab the sphere container
  const container = document.getElementById("skillSphere");

  // Ensure the container exists and has visible size
  if (container && container.offsetWidth > 0 && container.offsetHeight > 0) {
    TagCloud("#skillSphere", myTags, {
      radius: 300,
      maxSpeed: "fast",
      initSpeed: "normal",
      direction: 135,
      keep: true,
    });
  } else {
    console.warn("SkillSphere container not found or has 0 size.");
  }
});
