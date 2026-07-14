function displayPosts(posts) {
  let ul = document.getElementById('post-list');
  
  for (let post of posts) {
    let li = document.createElement('li');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // Add the text content from the API
    h1.textContent = post.title;
    p.textContent = post.body;

    // 1. Append the h1 and p INTO the li
    li.appendChild(h1);
    li.appendChild(p);

    // 2. Append the fully assembled li INTO the ul
    ul.appendChild(li); 
  }
}
async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        
        displayPosts(data);
        
        // Return the data so the test runner knows the Promise is resolved
        return data; 
    } catch (error) {
        console.error("Failed to retrieve post data:", error);
    }
}

// Execute the function globally so it runs when the file is loaded
fetchPosts();