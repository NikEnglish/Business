// Обработчик переключения вкладок
function switchTab(tab) {
    const content = document.querySelectorAll('.content');
    const tabs = document.querySelectorAll('.tab');
    
    content.forEach(item => item.classList.remove('active'));
    tabs.forEach(button => button.classList.remove('active'));
    
    document.getElementById(tab).classList.add('active');
    document.querySelector(`.tab[onclick="switchTab('${tab}')"]`).classList.add('active');
}

// Начальная сумма денег
let money = 0;
let purchasesCount = 0;

// Логика клика для получения денег
const clickButton = document.getElementById('click-button');
const moneyDisplay = document.getElementById('money');
const profileMoneyDisplay = document.getElementById('profile-money');

clickButton.addEventListener('click', function() {
    money += 1;  // Увеличение денег при клике
    moneyDisplay.textContent = money;
    profileMoneyDisplay.textContent = money;  // Отображение в профиле
});

// Логика покупки предметов
const itemsList = document.getElementById('items-list');
const items = [
    { name: 'Самолет', cost: 100, description: 'Увеличивает доход' },
    { name: 'Машина', cost: 50, description: 'Автоматический доход' },
    { name: 'Яхта', cost: 200, description: 'Мобильная роскошь' },
];

function displayItems() {
    itemsList.innerHTML = '';
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `<p>${item.name} - Стоимость: ${item.cost} монет</p><p>${item.description}</p><button onclick="buyItem(${item.cost}, '${item.name}')">Купить</button>`;
        itemsList.appendChild(itemElement);
    });
}

function buyItem(cost, name) {
    if (money >= cost) {
        money -= cost;
        purchasesCount++;
        alert(`Вы купили ${name}!`);
        moneyDisplay.textContent = money;
        profileMoneyDisplay.textContent = money;
        document.getElementById('purchases-count').textContent = purchasesCount; // Обновление счета покупок
    } else {
        alert('Недостаточно средств!');
    }
}

// Логика для инвестиций
let investedAmount = 0;
const investButton = document.getElementById('invest-button');
const investInput = document.getElementById('invest-input');
const stocksPurchasedDisplay = document.getElementById('stocks-purchased');

investButton.addEventListener('click', function() {
    const amount = parseInt(investInput.value);
    if (amount > 0 && money >= amount) {
        investedAmount += amount;
        money -= amount;
        stocksPurchasedDisplay.textContent = investedAmount;
        moneyDisplay.textContent = money;
    } else {
        alert('Недостаточно денег для инвестиции!');
    }
});

// Логика для бизнеса (открытие)
const startBusinessButton = document.getElementById('start-business');

startBusinessButton.addEventListener('click', function() {
    alert('Бизнес открыт! Он начнет приносить прибыль.');
});

// Первоначальное отображение предметов
displayItems();
