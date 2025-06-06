
  document.getElementById("commentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("title").value;
    const comment = document.getElementById("comment").value;

    fetch("https://sheetdb.io/api/v1/fpnkhb93wbk1r", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          name: name,
          comment: comment
        }
      })
    })
    .then(res => res.json())
    .then(() => {
      alert("Comment submitted!");
      document.getElementById("commentForm").reset();
      loadComments(); // Optional: reload comments after submit
    })
    .catch(err => {
      alert("Failed to submit comment.");
      console.error(err);
    });
  });

  function loadComments() {
    fetch("https://sheetdb.io/api/v1/YOUR_API_ID")
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById("postedComments");
        container.innerHTML = "<h2>Shared Experiences</h2>";
        data.forEach(entry => {
          const div = document.createElement("div");
          div.className = "comment-entry mb-3 p-2 border rounded";
          div.innerHTML = `<strong>${entry.name}</strong><br>${entry.comment}`;
          container.appendChild(div);
        });
      });
  }

  // Load comments on page load
  window.addEventListener("DOMContentLoaded", loadComments);
//function appendComment(title, comment) {
 // const commentDiv = document.createElement('div');
  //commentDiv.className = 'comment';
 // commentDiv.innerHTML = `
  //  <div class="comment-title">${title}</div>
  //  <div class="comment-body">${comment}</div>
 // `;
//  postedComments.appendChild(commentDiv);
//}

/*
Commented out sections are to be worked on when the github pages is actually
deployed
*/ 

///function submitCommentForm(event){
 // event.preventDefault();
//  const title = document.getElementById('title').value.trim();
 // const comment = document.getElementById('comment').value.trim();

// if (!title || !comment) {
 //   alert('Please fill in all fields.');
 //   return;
//}

  //these aren't being saved yet
 // appendComment(title,comment);

  // Send to backend
  // fetch('db.json', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ title, comment })
  // })
  // .then(res => res.json())
  // .then(() => {
  //   appendComment(title, comment);
  //   form.reset();
  // });
}


//read comments in from db.json
//function getComments(form){
 // const postedComments = document.getElementById('postedComments');

  //fake json temporary fix pretending it's a server response
 // const comments = [
 //   {
 //     title: "man1",
 //     comment: "man1"
  //  },
 //   {
 //     title: "man2",
//      comment: "man2"
//    },
//    {
//      title: "man3",
//      comment: "man3"
//    },
 // ];
  //comments_fake_server_response = JSON.stringify(comments);


  //this might work differently
  // fetch('db.json')
  //   .then(res => res.json())
  //   .then(jsonEntries => {
  //     comments.forEach(({ title, comment }) => {
  //       appendComment(title, comment);
  //     });
  //   });

  
  //read all fake json entries as json
  //const jsonEntries = JSON.parse(comments_fake_server_response);
  //jsonEntries.forEach( ({title, comment}) =>{
    //appendComment(title,comment);
  //});
//}


//start of execution
const form = document.getElementById('commentForm');
document.addEventListener('DOMContentLoaded', getComments(form));
form.addEventListener('submit', submitCommentForm);
