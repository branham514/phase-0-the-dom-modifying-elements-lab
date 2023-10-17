// index.js
document.addEventListener("DOMContentLoaded", function () {
    const mainElement = document.getElementById('main');
    if (mainElement) {
      mainElement.remove();
    }
  });
  // index.js
document.addEventListener("DOMContentLoaded", function () {
    // Create a new h1 element and set its text
    const newHeader = document.createElement('h1');
    newHeader.id = 'victory';
    newHeader.textContent = "YOUR-NAME is the champion"; // Replace 'YOUR-NAME' with the actual name
  
    // Append the new header to the document body
    document.body.appendChild(newHeader);
  });
  