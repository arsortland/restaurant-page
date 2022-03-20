import "./style.css";
import * as homejs from "./home";
import * as menujs from "./menu";
import * as contactjs from "./contact";
import pizzapng from "./pizza2.jpeg";
import calzonepng from "./calzone.png";
import lasagnapng from "./lasagna.jpeg";
import falafelpng from "./falafel.jpeg";
import burgerpng from "./burger.jpeg";

const container = document.querySelector(".container");
const header = document.createElement("div");
const nav = document.createElement("div");
const home = document.createElement("button");
const menu = document.createElement("button");
const contact = document.createElement("button");
const content = document.createElement("div");
const infobottom = document.createElement("div");

const meny = document.createElement("div");

home.textContent = "Home";
menu.textContent = "Menu";
contact.textContent = "Contact";

header.classList.add("header");
nav.classList.add("nav");
content.classList.add("content");
infobottom.classList.add("infobottom");

container.appendChild(header);
container.appendChild(content);
container.appendChild(infobottom);
header.appendChild(nav);
nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(contact);

home.addEventListener("click", () => {
  content.textContent = "";
  content.appendChild(homejs.welcomecont());
  content.appendChild(homejs.aboutcont());
  content.appendChild(homejs.staffcont());
});

menu.addEventListener("click", () => {
  content.textContent = "";
  meny.textContent = "";
  content.appendChild(meny);
  meny.appendChild(
    menujs.platters(
      "Pizza Margaritha",
      "Thin and crispy, with only the freshest ingredients.",
      pizzapng
    )
  );
  meny.appendChild(
    menujs.platters("Calzone", "How can it taste so good?!", calzonepng)
  );
  meny.appendChild(
    menujs.platters(
      "Veggie Lasagna",
      "Spinach, cheese, and delicious!",
      lasagnapng
    )
  );
  meny.appendChild(
    menujs.platters("Falafel", "On a bed of roses and tastyness", falafelpng)
  );
  meny.appendChild(
    menujs.platters(
      "Quinoa Burger",
      "Chef's favorite, with tastyness guaranty!",
      burgerpng
    )
  );
});

contact.addEventListener("click", () => {
  content.textContent = "";
  content.appendChild(contactjs.mapimg());
  content.appendChild(contactjs.adress());
});

//Noe animasjon i bytte /eller menyvalg?
//Sette HOme til active så den loader inn den taben når siden blir lastet inn.
//Underline over active knapp!
//Media queries og sjekke forskjellige størrelser.
