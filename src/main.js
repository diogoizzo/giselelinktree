import "./index.css";
import { scrollIntoView } from "seamless-scroll-polyfill";

console.log("Entrou");

const btnForm = document.getElementById("btnForm");
const formDiv = document.getElementById("formDiv");
const form = document.getElementById("form");
const arrow = document.getElementById("arrow");
const btnModal = document.getElementById("btnModal");
const modal = document.getElementById("modal");
const modalOk = document.getElementById("modalOk");
const body = document.getElementsByTagName("body")[0];
const btnModalOkClose = document.getElementById("btnModalOkClose");

window.onload = () => {
   modal.classList.toggle("hidden");
   for (const link of modal.children) {
      const href = link.getAttribute("href");
      link.setAttribute(
         "href",
         href + encodeURIComponent(window.location.href)
      );
   }
};

function openCloseForm() {
   formDiv.classList.toggle("h-[427px]");
   form.classList.toggle("opacity-0");
   arrow.classList.toggle("rotate-180");
}

function openCloseModalOk() {
   modalOk.classList.toggle("scale-100");
   modalOk.classList.toggle("opacity-100");
}

form.addEventListener("submit", (e) => {
   e.preventDefault();
   openCloseForm();
   scrollIntoView(body, {
      behavior: "smooth",
      block: "center",
      inline: "center",
   });
   openCloseModalOk();
   setTimeout(() => {
      modalOk.classList.remove("delay-700");
   }, 800);
});

btnModalOkClose.addEventListener("click", () => {
   openCloseModalOk();
   setTimeout(() => {
      modalOk.classList.add("delay-700");
   }, 800);
});

btnForm.addEventListener("click", openCloseForm);

btnModal.addEventListener("click", (e) => {
   modal.classList.toggle("scale-100");
   if (modal.classList.contains("scale-100")) {
      btnModal.firstElementChild.setAttribute("src", "/src/assets/close.svg");
   } else {
      btnModal.firstElementChild.setAttribute("src", "/src/assets/share.svg");
   }
});
