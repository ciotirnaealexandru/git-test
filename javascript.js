const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.textContent = "Hi I'm red!";
paragraph.style.color = "red";

const header3 = document.createElement("h3");
header3.textContent = "I’m a blue h3!";
header3.style.color = "blue";

const div = document.createElement("div");
const header1 = document.createElement("h1");
header1.textContent = "I'm inside a div!";
const divpara = document.createElement("p");
divpara.textContent = "ME TOO!";
div.append(header1, divpara);

container.appendChild(paragraph);
container.appendChild(header3);
container.appendChild(div);


//EVENTS

//method2
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello other world!");

//method3
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert("Hello third world!!!");
});