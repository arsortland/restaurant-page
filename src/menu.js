export const platters = (name, description, logo) => {
  const cont = document.createElement("div");
  const context = document.createElement("div");
  const desc = document.createElement("div");
  const img = document.createElement("img");
  cont.classList.add("menuitem");
  context.classList.add("menutext");
  desc.classList.add("menudesc");
  img.classList.add("menuimg");
  cont.appendChild(img);
  cont.appendChild(context);
  cont.appendChild(desc);
  context.setAttribute("style", "white-space: pre;");
  img.src = logo;
  context.textContent = name;
  desc.textContent = description;

  return cont;
};
