(()=>{"use strict";!function(){const e=document.querySelector("#header");e.replaceChildren();const t=document.createElement("ul"),n=document.createElement("li");n.classList.add("home"),n.textContent="Home";const c=document.createElement("li");c.classList.add("menu"),c.textContent="Menu";const o=document.createElement("li");o.classList.add("contact"),o.textContent="Contact",t.appendChild(n),t.appendChild(c),t.appendChild(o),e.appendChild(t);const a=document.querySelector("#content");a.replaceChildren();const l=document.createElement("h1");l.textContent="Milk Steak Only - The Restaurant",a.appendChild(l);const d=document.createElement("img");d.src="../dist/assets/milksteak.jpeg",d.alt="picture of milk steak",a.appendChild(d);const r=document.createElement("p");r.textContent="Hello! Welcome to the amazing restaurant where you can only order milk steak",a.appendChild(r)}(),document.querySelector(".home").addEventListener("click",(function(){const e=document.querySelector("#content");e.replaceChildren();const t=document.createElement("h1");t.textContent="Milk Steak Only - The Restaurant",e.appendChild(t);const n=document.createElement("img");n.src="../dist/assets/milksteak.jpeg",n.alt="picture of milk steak",e.appendChild(n);const c=document.createElement("p");c.textContent="Hello! Welcome to the amazing restaurant where you can only order milk steak",e.appendChild(c)})),document.querySelector(".menu").addEventListener("click",(function(){const e=document.querySelector("#content");e.replaceChildren();const t=document.createElement("h1");t.textContent="Milk Steak Only",e.appendChild(t);const n=document.createElement("img");n.src="../dist/assets/milksteak.jpeg",n.alt="picture of milk steak",e.appendChild(n);const c=document.createElement("p");c.textContent="Milk Steak $19.99",e.appendChild(c)})),document.querySelector(".contact").addEventListener("click",(function(){const e=document.querySelector("#content");e.replaceChildren();const t=document.createElement("img");t.src="../dist/assets/fakeperson.jpg",t.alt="picture of a faker person",e.appendChild(t);const n=document.createElement("h1");n.textContent="Joshua Joshuason the third",e.appendChild(n);const c=document.createElement("p");c.textContent="555-555-5555",e.appendChild(c);const o=document.createElement("p");o.textContent="I'm not real please dont contact me",e.appendChild(o)}))})();