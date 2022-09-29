let container = document.getElementById("notescontainer");
let maininput = document.getElementById("maininput");
renderNotes();

async function renderNotes() {
  try {
    let notes = await axios.get("http://localhost:4500/api/notes");
    let html = notes.data.data.map((note) => {
      return `
        <div class="notes"> 
        <input class="checkbox" type="checkbox" ${
          note.checked ? "checked" : ""
        } data-id="${note._id}"/>
        <p style="text-decoration : ${note.checked ? "line-through" : ""}">${
        note.text
      } </p>
        <button id="buttons"  class="deletebtn" data-id="${note._id}">X</button>
        </div>
        `;
    });

    container.innerHTML = html;
  } catch (error) {
    container.innerHTML = `<div style="background-color : red" class="notes">Unable to fetch data</div>`;
  }
}

document.addEventListener("click", async (e) => {
  if (e.target && e.target.matches(".deletebtn")) {
    let id = e.target.dataset.id;
    await fetch(`http://localhost:4500/api/notes/${id}`, { method: "DELETE" });
    renderNotes();
  } else if (e.target && e.target.matches(".checkbox")) {
    let id = e.target.dataset.id;
    await axios.put(`http://localhost:4500/api/notes/${id}`, {
      checked: e.target.checked,
    });
    renderNotes();
  }
});

maininput.addEventListener("keyup", async (e) => {
  if (e.key == "Enter" && e.target.value) {
    try {
      let data = await axios.post("http://localhost:4500/api/notes", {
        text: e.target.value,
        checked: false,
      });
      let updatednote = [data.data.addednote];
      let newnotehtml = updatednote.map((note) => {
        return `
        <div class="notes"> 
        <input class="checkbox" type="checkbox" ${
          note.checked ? "checked" : ""
        } data-id="${note._id}"/>
        <p style="text-decoration : ${note.checked ? "line-through" : ""}">${
          note.text
        } </p>
        <button id="buttons"  class="deletebtn" data-id="${note._id}">X</button>
        </div>
        `;
      });
      container.innerHTML += newnotehtml;
      renderNotes();
      maininput.value = "";
    } catch (error) {
      console.log(error);
      document.getElementById("posterror").innerHTML = `<p>Unable to post</p>`;
    }
  }
});
