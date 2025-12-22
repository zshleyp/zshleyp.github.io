import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

let postNum = 1;
window.addEventListener("load", loadPost(postNum));

async function loadPost() {
  const result = await fetch(`blogs/${postNum}.md`);

  if (!result.ok) {
    console.log("no existe 😢");
  } else {
    const MD = await result.text();
    console.log(marked.parse(MD));
    renderHTML(MD);
    postNum++;
    loadPost(postNum);
  }
}

function renderHTML(MD) {
  const blogContainer = document.querySelector(".blogholder");
  const createArticle = document.createElement("article");

  const renderToHTML = marked.parse(MD);

  createArticle.innerHTML = renderToHTML; // Security headers are active to prevent XSS
  blogContainer.insertBefore(createArticle, blogContainer.firstChild);
}
