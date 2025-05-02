
const reportsBtn = document.getElementById("reports-btn");
const reportsModal = document.getElementById("reports-modal");
const closeReports = document.querySelector(".reports-close-btn");

reportsBtn.addEventListener("click", () => {
  reportsModal.style.display = "flex";
});

closeReports.addEventListener("click", () => {
  reportsModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === reportsModal) {
    reportsModal.style.display = "none";
  }
});


const inboxBtn = document.getElementById("inbox-btn");
const inboxModal = document.getElementById("inbox-modal");
const closeInbox = document.querySelector(".inbox-close-btn");
const composeBtn = document.getElementById("compose-btn");
const composeForm = document.getElementById("compose-form");

inboxBtn.addEventListener("click", () => {
  inboxModal.style.display = "flex";
});

closeInbox.addEventListener("click", () => {
  inboxModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === inboxModal) {
    inboxModal.style.display = "none";
  }
});


composeBtn.addEventListener("click", () => {
  composeForm.style.display = "block";
});
const videoBtn = document.getElementById("video-btn");
const videoModal = document.getElementById("video-modal");
const closeVideo = document.querySelector(".video-close-btn");

videoBtn.addEventListener("click", () => {
  videoModal.style.display = "flex";
});

closeVideo.addEventListener("click", () => {
  videoModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    videoModal.style.display = "none";
  }
});
