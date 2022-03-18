export const welcomecont = () => {
  const welcometext = document.createElement("div");
  welcometext.classList.add("welcometext");
  welcometext.setAttribute("style", "white-space: pre;");
  welcometext.textContent = "Welcome to our Restaurant!\r\n";
  welcometext.textContent +=
    "Here at our establishment we pride ourselves with only using the best in-season ingredients\r\n";
  welcometext.textContent +=
    "At the same time we have a vision to think sustainability and has been meat-free since 2009!\r\n";
  welcometext.textContent +=
    "Come try out our menu, you will not be dissapointed!";

  return welcometext;
};

export const aboutcont = () => {
  //about content here:
};

export const staffcont = () => {
  //pic of fantasy-staff:
  const staffpic = document.createElement("img");
  // find pic: staffpic.src("")
};
