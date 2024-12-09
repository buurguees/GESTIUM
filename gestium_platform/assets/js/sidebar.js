const folderList = document.querySelector(".folder-list");
const newFolderButton = document.getElementById("new-folder");
const newProjectButton = document.getElementById("new-project");

// Función para agregar carpetas
function addFolder(name = "Nueva Carpeta", parent = null) {
  const li = document.createElement("li");
  li.textContent = name;

  if (parent) {
    const subList = parent.querySelector("ul");
    if (subList) {
      subList.appendChild(li);
    } else {
      const newSubList = document.createElement("ul");
      newSubList.appendChild(li);
      parent.appendChild(newSubList);
    }
  } else {
    folderList.appendChild(li);
  }

  li.addEventListener("click", () => {
    if (!li.classList.contains("expanded")) {
      li.classList.add("expanded");
    } else {
      li.classList.remove("expanded");
    }
  });
}

// Evento para crear nuevas carpetas
newFolderButton.addEventListener("click", () => addFolder());

// Evento para crear nuevos proyectos
newProjectButton.addEventListener("click", () => {
  const projectName = prompt("Nombre del Proyecto:");
  if (projectName) addFolder(projectName);
});
