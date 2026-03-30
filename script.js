function initTabs() {
  const buttons = document.querySelectorAll('.tab-button');
  const panels = document.querySelectorAll('.tab-panel');

  function activateTab(tabId) {
    buttons.forEach((button) => {
      button.classList.toggle('active', button.dataset.tab === tabId);
    });

    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.id === tabId);
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => activateTab(button.dataset.tab));
  });
}

function initPage() {
  initTabs();
}

document.addEventListener('DOMContentLoaded', initPage);
