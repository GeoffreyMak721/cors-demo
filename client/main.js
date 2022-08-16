const loadBtn = document.getElementById("load-btn");
const previewArea = document.getElementById("preview");

loadBtn.addEventListener("click", loadData);

function loadData() {
  fetch("https://42b9-169-159-210-215.au.ngrok.io/users", { method: "post" })
    .then((response) => {
      response.json().then((data) => {
        previewArea.innerHTML = `
          Nom: ${data.nom}
          <br>
          Prenom: ${data.prenom}
        `;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
