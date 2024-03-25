// src/index.js

import { createHomepage } from './homepage'; // Importing from the stc directory
import { createMenu } from './menu'; // Importing from the src directory
import { createContact } from './contact'; // Importing from the src directory

document.addEventListener('DOMContentLoaded', createHomepage);

document.querySelector('button[data-target="home"]').addEventListener('click', () => {
  console.log('Home button clicked');
  createHomepage();
});

document.querySelector('button[data-target="menu"]').addEventListener('click', () => {
  console.log('Menu button clicked');
  createMenu();
});

document.querySelector('button[data-target="contact"]').addEventListener('click', () => {
  console.log('Contact button clicked');
  createContact();
});
