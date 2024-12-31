// Начальная логика для кликов
let money = 0;
let clickValue = 1;
let upgradeCost = 10;

// DOM-элементы
const moneyDisplay = document.getElementById("money");
const clickButton = document.getElementById("click-button");
const upgradeButton = document.getElementById("upgrade-button");
const upgradeLevel = document.getElementById("upgrade-level");
const upgradeCostDisplay = document.getElementById("upgrade-cost");

// Клик
clickButton.addEventListener("click", () => {
  money += clickValue;
  updateDisplay();
});

// Улучшение
upgradeButton.addEventListener("click", () => {
  if (money >= upgradeCost) {
    money -= upgradeCost;
    clickValue++;
    upgradeCost *= 2;
    updateDisplay();
  }
});

// Обновление данных
function updateDisplay() {
  moneyDisplay.textContent = `${money} ₽`;
  upgradeLevel.textContent = `${clickValue} ₽ за клик`;
  upgradeCostDisplay.textContent = `${upgradeCost} ₽`;
}

// Переключение вкладок
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', (event) => {
    const page = event.target.dataset.page;
    alert(`Перешли на вкладку: ${page}`);
    // Здесь добавим переключение содержимого позже
  });
});

updateDisplay();
