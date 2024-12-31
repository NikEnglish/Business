let money = 0;
let moneyPerClick = 1;
let upgradeCost = 10;
let upgradeLevel = 1;

// Функция для обновления отображения денег
function updateMoneyDisplay() {
  document.getElementById('money').textContent = `${money} ₽`;
}

// Функция для обновления уровня улучшения
function updateUpgradeDisplay() {
  document.getElementById('upgrade-level').textContent = `${moneyPerClick} ₽ за клик`;
  document.getElementById('upgrade-cost').textContent = `${upgradeCost} ₽`;
}

// Обработчик клика по кнопке
document.getElementById('click-button').addEventListener('click', function() {
  money += moneyPerClick;
  updateMoneyDisplay();
});

// Обработчик клика по кнопке улучшения
document.getElementById('upgrade-button').addEventListener('click', function() {
  if (money >= upgradeCost) {
    money -= upgradeCost;
    upgradeLevel++;
    moneyPerClick++;
    upgradeCost = Math.floor(upgradeCost * 1.5); // Увеличиваем стоимость улучшения
    updateMoneyDisplay();
    updateUpgradeDisplay();
  }
});

// Переключение вкладок
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    tabs.forEach(t => t.classList.remove('tab-active'));
    tab.classList.add('tab-active');
    // Тут добавьте логику переключения контента вкладки
  });
});

// Изначально отображаем вкладку Кликер
document.getElementById('tab-clicker').classList.add('tab-active');
