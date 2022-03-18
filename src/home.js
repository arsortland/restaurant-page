import chefpic from "./chef.jpeg";

export const welcomecont = () => {
  const welcometext = document.createElement("div");
  welcometext.classList.add("welcometext");
  welcometext.setAttribute("style", "white-space: pre;");
  welcometext.textContent = "Welcome to our Restaurant!\r\n";
  welcometext.textContent +=
    "Here at our establishment we pride ourselves with only using the best in-season ingredients.\r\n";
  welcometext.textContent +=
    "At the same time we have a vision to think sustainability and has been meat-free since 2009.\r\n";
  welcometext.textContent +=
    "Come try out our menu, you will not be dissapointed!";

  return welcometext;
};

export const aboutcont = () => {
  const abouttext = document.createElement("div");
  abouttext.classList.add("abouttext");
  abouttext.setAttribute("style", "white-space: pre;");
  abouttext.textContent =
    "Founded in 2009 we have been a staple in the local community ever since.\r\n";
  abouttext.textContent +=
    "We believe we can make food on par with the best in the world,\r\n";
  abouttext.textContent +=
    "while also making sure no human or animal needs to suffer in the process! \r\n";

  return abouttext;
};

export const staffcont = () => {
  const staffpic = document.createElement("img");
  staffpic.classList.add("staffpic");
  staffpic.setAttribute("id", "chefpic");
  staffpic.src = chefpic;

  return staffpic;
};
