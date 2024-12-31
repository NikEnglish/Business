// Основные данные
let money = 0; // Количество денег
let clickValue = 1; // Заработок за клик
let upgradeCost = 10; // Стоимость прокачки

// DOM-элементы
const moneyDisplay = document.getElementById("money");
const clickButton = document.getElementById("click-button");
const upgradeButton = document.getElementById("upgrade-button");
const upgradeLevel = document.getElementById("upgrade-level");
const upgradeCostDisplay = document.getElementById("upgrade-cost");

// Функция: Клик
clickButton.addEventListener("click", () => {
  money += clickValue;
  updateDisplay();
});

// Функция: Прокачка
upgradeButton.addEventListener("click", () => {
  if (money >= upgradeCost) {
    money -= upgradeCost;
    clickValue++;
    upgradeCost *= 2; // Увеличиваем стоимость
    updateDisplay();
  }
});

// Функция: Обновление интерфейса
function updateDisplay() {
  moneyDisplay.textContent = `${money} ₽`;
  upgradeLevel.textContent = `${clickValue} ₽ за клик`;
  upgradeCostDisplay.textContent = `${upgradeCost} ₽`;
  upgradeButton.disabled = money < upgradeCost;
}

// Начальное обновление
updateDisplay();
