// src/contact.js
export function createContact() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ''; // Clear existing content
  
  // Create and append contact content
  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';

  const contactInfo = document.createElement('div');
  contactInfo.innerHTML = `
    <p>Email: info@example.com</p>
    <p>Phone: 123-456-7890</p>
    <p>Address: 123 Restaurant St, City, Country</p>
  `;

  contentDiv.appendChild(heading);
  contentDiv.appendChild(contactInfo);
}
