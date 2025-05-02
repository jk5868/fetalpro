// Inbox Modal Logic
const inboxBtn = document.getElementById("inbox-btn");
const inboxModal = document.getElementById("inbox-modal");
const inboxClose = document.querySelector(".inbox-close-btn");

inboxBtn.addEventListener("click", () => {
  inboxModal.style.display = "flex";
});

inboxClose.addEventListener("click", () => {
  inboxModal.style.display = "none";
});

// Dashboard Modal Logic
const dashboardBtn = document.getElementById("dashboard-btn");
const dashboardModal = document.getElementById("dashboard-modal");
const dashboardClose = document.querySelector(".dashboard-close-btn");

dashboardBtn.addEventListener("click", () => {
  dashboardModal.style.display = "flex";
});

dashboardClose.addEventListener("click", () => {
  dashboardModal.style.display = "none";
});

// Close modals if clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === inboxModal) inboxModal.style.display = "none";
  if (e.target === dashboardModal) dashboardModal.style.display = "none";
});
