import { Orders } from "./orders.js";

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const body = document.body;
const root = document.querySelector(":root");

// Show Sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// Close Sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// Change Theme

themeToggler.addEventListener("click", () => {
  if (body.dataset.theme === "dark") {
    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
    root.style.setProperty("--color-background", "#f6f6f9");
    root.style.setProperty("--color-white", "#fff");
    root.style.setProperty("--color-dark", "#363949");
    root.style.setProperty("--color-dark-variant", "#677483");
    root.style.setProperty("--color-light", "rgba(132, 139, 200, 0.18)");
    root.style.setProperty("--box-shadow", "0 2rem 3rem var(--color-light)");
    body.dataset.theme = "light";
  } else {
    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
    root.style.setProperty("--color-background", "#181a1e");
    root.style.setProperty("--color-white", "#202528");
    root.style.setProperty("--color-dark", "#edeffd");
    root.style.setProperty("--color-dark-variant", "#a3bdcc");
    root.style.setProperty("--color-light", "rgba(0, 0, 0, 0.4)");
    root.style.setProperty("--box-shadow", "0 2rem 3rem var(--color-light)");
    body.dataset.theme = "dark";
  }
});

// Fill orders in table

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `<td>${order.productName}</td>
  <td>${order.productNumber}</td>
  <td>${order.paymentStatus}</td>
  <td class="${
    order.shipping === "Declined"
      ? "danger"
      : order.shipping === "pending"
      ? "warning"
      : "primary"
  }">${order.shipping}</td>
  <td class="primary">Details</td>`;

  tr.innerHTML = trContent;

  document.querySelector("table tbody").appendChild(tr);
});
