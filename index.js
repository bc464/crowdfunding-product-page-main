const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

let modal = document.getElementById("myModal");
let btn = document.getElementById("open-modal");
let span = document.getElementsByClassName("close")[0];
let modalThanks = document.querySelector("#myModalThanks");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function () {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let productBtn = document.querySelectorAll("#product-btn");
let hrModal = document.getElementsByClassName("hr-modal");
let details = document.getElementsByClassName("pledge-entry-detail");

document.getElementById("product-btn").addEventListener("click", myFunction);
function myFunction() {
  document.querySelector(".hr-modal").style.display = "block";
  document.querySelector(".pledge-entry-p").style.display = "inline-flex";
  document.querySelector(".pledge-entry-input").style.display = "inline-flex";
  document.querySelector(".pledge-entry-btn").style.display = "inline-flex";
}

let backedTotal = 89914;
let totalBackers = 5007;
let back = 100000;
let leftTotalBamboo = 101;

document.getElementById("btnThanks").addEventListener("click", function () {
  modalThanks.style.display = "block";
  let pledgeInput = Number(document.querySelector(".pledge-entry-input").value);

  if (!pledgeInput) {
    backedTotal = backedTotal + 25;
    totalBackers++;
    leftTotalBamboo--;
    document.getElementById("backed-total").innerHTML = backedTotal;
    document.getElementById("total-backers").innerHTML = totalBackers;
    document.getElementById("left-total-bamboo").innerHTML = leftTotalBamboo;
    let backedIndicators = (backedTotal / back) * 100;
    document.querySelector(".backed-indicator").style.width =
      backedIndicators + "%";
  } else {
    backedTotal = backedTotal + pledgeInput;
    document.getElementById("backed-total").innerHTML = backedTotal;
    totalBackers++;
    leftTotalBamboo--;
    document.getElementById("total-backers").innerHTML = totalBackers;
    document.getElementById("left-total-bamboo").innerHTML = leftTotalBamboo;
    let backedIndicators = (backedTotal / back) * 100;
    document.querySelector(".backed-indicator").style.width =
      backedIndicators + "%";
  }
});

document
  .getElementById("btnCloseThanks")
  .addEventListener("click", function () {
    modalThanks.style.display = "none";
    modal.style.display = "none";
    document.querySelector(".hr-modal").style.display = "none";
    document.querySelector(".pledge-entry-p").style.display = "none";
    document.querySelector(".pledge-entry-input").style.display = "none";
    document.querySelector(".pledge-entry-btn").style.display = "none";
  });

window.onclick = function () {
  if (event.target == modalThanks) {
    modalThanks.style.display = "none";
  }
};
