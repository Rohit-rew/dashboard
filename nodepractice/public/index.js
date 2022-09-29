let input = document.getElementById("input");
let button = document.getElementById("btn");
let nameslist = document.getElementById("nameslist");
let errorout = document.getElementById("error");

render();
async function render() {
  try {
    let data = await axios.get("http://localhost:4500/api/data");
    let datahtml = data.data
      .map((people) => {
        return `<li>${people.name}</li>`;
      })
      .join("");

    nameslist.innerHTML = datahtml;
  } catch (error) {
    console.log(error.response.data.message);
    errorout.innerHTML = `<p id="errorbox">Invalid request</p>`;
  }
}

button.addEventListener("click", async () => {
  let name = input.value;

  try {
    let data = await axios.post("http://localhost:4500/api/data", {
      name: name,
    });

    let li = document.createElement("li");
    li.innerText = data.data.updated;
    nameslist.appendChild(li);
  } catch (error) {
    console.log(error);
    errorout.innerHTML = `<p id="errorbox">${error.response.data.message}</p>`;
    setTimeout(() => {
      errorout.innerHTML = "";
    }, 1200);
  }

  input.value = "";
});


