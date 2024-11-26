// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const container = document.getElementById('posts-container');
  
    if (!container) {
      console.error('Container element with ID "posts-container" not found.');
      return;
    }
  
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.className = 'post';
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      container.appendChild(postElement);
    });
  }
  
  fetchPosts();
