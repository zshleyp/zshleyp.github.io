let postNum = 1;
window.addEventListener("load", loadPost());

async function loadPost() {
  fetch("blog/blogs")
    .then((r) => r.json())
    .then((files) => {
      files.forEach((file) => {
        fetch(`blog/blogs/${file}`)
          .then((r) => r.text())
          .then((text) => console.log(text));
      });
    });
}
