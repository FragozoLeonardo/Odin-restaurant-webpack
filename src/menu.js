// src/menu.js
export function createMenu() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ''; // Clear existing content
  
  // Create and append menu content
  const heading = document.createElement('h1');
  heading.textContent = 'Our Menu';

  const menuList = document.createElement('ul');
  const items = ['Appetizers', 'Main Course', 'Desserts', 'Drinks'];
  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    menuList.appendChild(listItem);
  });

  contentDiv.appendChild(heading);
  contentDiv.appendChild(menuList);
}
