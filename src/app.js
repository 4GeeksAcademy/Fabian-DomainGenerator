/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#domain").innerHTML = generateDomain();
};

const generateDomain = () => {
  let pronoun = ["the", "our", "we", "your"];
  let adj = ["great", "big", "small", "ugly"];
  let noun = ["jogger", "raco", "do", "mov"];
  let ext = [".com", ".es", ".it", ".on", ".org"];

  const pronounIndex = Math.floor(Math.random() * pronoun.length);
  const adjIndex = Math.floor(Math.random() * adj.length);
  const nounIndex = Math.floor(Math.random() * noun.length);
  const extIndex = Math.floor(Math.random() * ext.length);

  const domain = `${pronoun[pronounIndex]}${adj[adjIndex]}${noun[nounIndex]}${ext[extIndex]}`;
  return domain;
};

const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", function() {
  location.reload();
});
