// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`
async function fetchPhotos() {
  console.log('Fetching photos...');
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photos = await response.json();
    console.log('Photos fetched:', photos);
    const container = document.getElementById('photos-container');

    if (!container) {
      console.error('Container element with ID "photos-container" not found.');
      return;
    }

    photos.slice(0, 10).forEach(photo => {
      const photoElement = document.createElement('img');
      photoElement.src = photo.url; 
      photoElement.alt = photo.title;
      photoElement.style.cursor = 'pointer';
      photoElement.addEventListener('click', () => {
        alert(photo.title);
      });
      container.appendChild(photoElement);
    });
    console.log('Photos displayed.');
  } catch (error) {
    console.error('Error fetching photos:', error);
  }
}

fetchPhotos();