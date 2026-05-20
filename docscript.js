const inboxBtn = document.getElementById('inbox-btn');
const inboxModal = document.getElementById('inbox-modal');
const closeBtn = document.querySelector('#inbox-modal .close-btn');
const toggleComposeBtn = document.getElementById('toggle-compose');
const composeForm = document.getElementById('compose-form');
const messagesList = document.getElementById('messages-list');

inboxBtn.addEventListener('click', () => {
  inboxModal.style.display = 'flex';
  composeForm.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  inboxModal.style.display = 'none';
});

toggleComposeBtn.addEventListener('click', () => {
  composeForm.style.display = (composeForm.style.display === 'none') ? 'block' : 'none';
});

composeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const to = document.getElementById('compose-to').value;
  const subject = document.getElementById('compose-subject').value;
  const body = document.getElementById('compose-body').value;

  const newMsg = document.createElement('li');
  newMsg.innerHTML = `<strong>${to}:</strong> ${subject} - ${body} <span class="delete-mail">&times;</span>`;
  messagesList.appendChild(newMsg);
  addDeleteEvents();
  composeForm.reset();
  composeForm.style.display = 'none';
});

function addDeleteEvents() {
  document.querySelectorAll('.delete-mail').forEach(btn => {
    btn.onclick = function () {
      this.parentElement.remove();
    };
  });
}

addDeleteEvents();

document.getElementById("logout-btn").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "index.html";
});

// Maria Gonzalez Tableau Model updated
const mariaCard = document.getElementById('maria-card');
const reportsModal = document.getElementById('reports-modal');
const reportsCloseBtn = document.querySelector('.reports-close-btn');

mariaCard.addEventListener('click', () => {
  reportsModal.style.display = 'flex';
});

reportsCloseBtn.addEventListener('click', () => {
  reportsModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === reportsModal) {
    reportsModal.style.display = 'none';
  }
});
