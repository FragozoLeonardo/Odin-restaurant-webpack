// src/homepage.js
export function createHomepage() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ''; // Clear existing content
  
  // Create and append homepage content
  const img = document.createElement('img');
  img.src = '../restaurant.jpg';
  img.alt = 'Restaurant Image';

  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to Our Restaurant!';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Experience the finest dining experience with us. Our restaurant offers a delightful blend of exquisite flavors, cozy ambiance, and exceptional service. Whether you\'re craving for a gourmet meal or just looking to unwind, we have something for everyone.';

  contentDiv.appendChild(img);
  contentDiv.appendChild(heading);
  contentDiv.appendChild(paragraph);
}
