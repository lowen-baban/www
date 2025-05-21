


document.getElementById('commentForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  const mutation = `
    mutation CreateComment {
      createComment(input: {
        title: "${title}",
        content: "${content}"
      }) {
        id
        title
        content
      }
    }
  `;

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey
    },
    body: JSON.stringify({ query: mutation })
  });

  const result = await res.json();
  console.log('Comment submitted:', result);
  loadComments(); // Refresh comments list
});

async function loadComments() {
  const query = `
    query ListComments {
      listComments {
        items {
          id
          title
          content
          createdAt
        }
      }
    }
  `;

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey
    },
    body: JSON.stringify({ query })
  });

  const { data } = await res.json();
  const list = document.getElementById('commentsList');
  list.innerHTML = '';
  data.listComments.items.forEach(c => {
    const li = document.createElement('li');
    li.textContent = `${c.title} - ${c.content} (${new Date(c.createdAt).toLocaleString()})`;
    list.appendChild(li);
  });
}

window.onload = loadComments;
