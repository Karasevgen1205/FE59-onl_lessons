// На занятии обсудить

// try/catch

// ["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]
// ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']

// ['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']
// ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']

////////////////////////////////////////////////////////////////////////
const ul = document.querySelector(".bottom_block");

function loadedTodos(todoId) {
  const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;

  return fetch(url)
    .then((response) => response.json())
    .then((item) => {
      createToDo(
        {
          id: String(item.id),
          item: item.userId,
          text: item.title,
          isChecked: item.completed,
        },
        null,
        ul
      );
    });
}

loadedTodos(15)
  .then(() => loadedTodos(23))
  .then(() => loadedTodos(7))
  .then(() => loadedTodos(3))
  .catch((error) => console.log(error));

////////////////////////////////////////////////////////////////////////

// Функция для получения поста по ID
function fetchPostById(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error(`Не удалось загрузить пост с ID ${id}`);
      }
      return res.json();
    }
  );
}

// Функция для создания HTML разметки поста
function createPostHTML(post) {
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");
  postDiv.innerHTML = `
      <h3>ID: ${post.id}</h3>
      <p>${post.title}</p>
  `;
  return postDiv;
}

// Функция для отображения постов с использованием цепочек промисов
function displayPostsWithPromiseChaining(postIds) {
  let promiseChain = Promise.resolve();

  postIds.forEach((postId) => {
    promiseChain = promiseChain
      .then(() => fetchPostById(postId))
      .then((post) => {
        const postHTML = createPostHTML(post);
        postsContainer.appendChild(postHTML);
      })
      .catch((error) => {
        console.error(error.message);
      });
  });
}
////////////////////////////////////////////////////////////////////////
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