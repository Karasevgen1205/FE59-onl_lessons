// Promise chaining:
function fetchPost(postNumber) {
  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
     
      const posts = [
        "Post 1",
        "Post 2",
        "Post 3",
        "Post 4",
      ];

    
      if (posts[postNumber - 1]) {
        resolve(posts[postNumber - 1]); 
      } else {
        reject(`Error: Post ${postNumber} not found`); 
      }
    }, Math.random() * 2000); 
  });
}


function load_posts_in_order() {
  fetchPost(15)
    .then(post => {
      console.log(post);
      return fetchPost(23);
    })
    .then(post => {
      console.log(post);
      return fetchPost(7);
    })
    .then(post => {
      console.log(post);
      return fetchPost(3);
    })
    .then(post => {
      console.log(post);
    })
    .catch(error => {
      console.error(error); 
    });
}


load_posts_in_order();

//Async / await:


async function loadPosts() {
  try {
    const post15 = await fetchPost(15);
    console.log(post15);
    
    const post23 = await fetchPost(23);
    console.log(post23);
    
    const post7 = await fetchPost(7);
    console.log(post7);
    
    const post3 = await fetchPost(3);
    console.log(post3);
  } catch (error) {
    console.error(error); 
  }
}

loadPosts();