import "./style.css";
import { createel } from "./home";

const container = document.querySelector(".container");

const header = document.createElement("div");
header.classList.add("header");

const content = document.createElement("div");
content.classList.add("content");

const infobottom = document.createElement("div");
infobottom.classList.add("infobottom");

container.appendChild(header);
container.appendChild(content);
container.appendChild(infobottom);

header.appendChild(createel());

//Tenke gjennom hvordan "content" klassen skal organiseres mellom tabs
//Lage noe animasjon til homepage? ALternativt en loader?

//Huske på iffies og factories. Kanskje bruke factory til menyen?

//Lage en div i hver modul(til hver tab) som innholdet blir lagt over til.

//faktorere koden så det blir bra!
