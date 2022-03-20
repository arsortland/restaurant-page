export const mapimg = () => {
  const position =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.537971010702!2d10.77682541667048!3d59.923214981870565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x15dad97e50d8d11a!2zNTnCsDU1JzIzLjYiTiAxMMKwNDYnNDQuNSJF!5e0!3m2!1sen!2sno!4v1647813383365!5m2!1sen!2sno" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

  const map = document.createElement("div");
  map.innerHTML = position;

  return map;
};

export const adress = () => {
  const info = document.createElement("div");
  info.setAttribute("style", "white-space: pre;");

  info.textContent = "\r\nAdress:\t Fantasyroad 76 \r\n\n\n";
  info.textContent += "Phony-number:\t +66 69966669\r\n";

  info.classList.add("adress");

  return info;
};
