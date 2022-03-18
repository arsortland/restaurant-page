import "./style.css";
//import { createel } from "./home";
import * as homejs from "./home";

const container = document.querySelector(".container");
const header = document.createElement("div");
const nav = document.createElement("div");
const home = document.createElement("button");
const menu = document.createElement("button");
const contact = document.createElement("button");
const content = document.createElement("div");
const infobottom = document.createElement("div");

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

//instead of this, start with HOME set to active.
content.appendChild(homejs.welcomecont());

home.addEventListener("click", () => {
  //load homecontent.
  content.textContent = "";
  content.appendChild(homejs.welcomecont());
});

menu.addEventListener("click", () => {
  //load menucontent.
  content.textContent = "";
});

contact.addEventListener("click", () => {
  //load contactcontent.
  content.textContent = "";
});

//Tenke gjennom hvordan "content" klassen skal organiseres mellom tabs
//Lage noe animasjon til homepage? ALternativt en loader?

//Huske på iffies og factories. Kanskje bruke factory til menyen?

//Lage en div i hver modul(til hver tab) som innholdet blir lagt over til.

//faktorere koden så det blir bra!
