import pizzapng from "./pizza.png";

export const platters = (logo, name, description) => {
  const makeplatter = () => {
    const platter = document.createElement("div");
    platter.classList.add("platter");

    const img = document.createElement("img");
    img.classList.add("platterimg");
    staffpic.src = logo;

    const plattername = document.createElement("div");
    plattername.classList.add("plattername");
    plattername.textContent = name;

    const platterdesc = document.createElement("div");
    platterdesc.classList.add("platterdesc");
    platterdesc.textContent = description;
  };

  return { makeplatter };
};

export const pizza = platters(pizzapng, "Pizza", "Delicious italian pizza");
