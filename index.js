// Select the image container element
const imageContainer = document.getElementById('imageContainer');

// Fetch the data from the API
fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
  .then(response => response.json())
  .then(data => {
    // Iterate over the fetched data to retrieve the images
    data.forEach(product => {
      const imageElement = document.createElement('img');
      imageElement.src = product.image; 

      // Append the image to the image container
      imageContainer.appendChild(imageElement);
    });
  })
  .catch(error => console.log(error));