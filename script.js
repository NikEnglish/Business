let money = 0;
let clickUpgradeLevel = 1;
let clickUpgradeCost = 50;
let purchasesCount = 0;

function switchTab(tab) {
    const content = document.querySelectorAll('.content');
    const tabs = document.querySelectorAll('.tab');

    content.forEach(item => item.classList.remove('active'));
    tabs.forEach(button => button.classList.remove('active'));

    document.getElementById(tab).classList.add('active');
    document.querySelector(`.tab[onclick="switchTab('${tab}')"]`).classList.add('active');
}

function animateMoneyUpdate() {
    let currentMoney = parseInt(document.getElementById('money').textContent.replace('$', ''));
    let targetMoney = money;

    let interval = setInterval(() => {
        if (currentMoney < targetMoney) {
            currentMoney++;
            document.getElementById('money').textContent = `$${currentMoney}`;
            document.getElementById('profile-money').textContent = `$${currentMoney}`;
        } else {
            clearInterval(interval);
        }
    }, 5);
}

document.getElementById('click-button').addEventListener('click', function() {
    money += clickUpgradeLevel;
    animateMoneyUpdate();
});

document.getElementById('upgrade-click').addEventListener('click', function() {
    if (money >= clickUpgradeCost) {
        money -= clickUpgradeCost;
        clickUpgradeLevel++;
        clickUpgradeCost = Math.floor(clickUpgradeCost * 1.5);
        animateMoneyUpdate();
    } else {
        alert('Недостаточно средств!');
    }
});

const items = [
    { name: 'Самолет', cost: 100, description: 'Летайте куда угодно!' },
    { name: 'Лодка', cost: 50, description: 'Путешествия по водам' },
    { name: 'Машина', cost: 200, description: 'Скорость и комфорт' }
];

const itemsList = document.getElementById('items-list');
items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>Цена: $${item.cost}</p><button class="buy-button">Купить</button>`;
    itemDiv.querySelector('.buy-button').addEventListener('click', function() {
        if (money >= item.cost) {
            money -= item.cost;
            purchasesCount++;
            animateMoneyUpdate();
            document.getElementById('purchases-count').textContent = purchasesCount;
        } else {
            alert('Недостаточно средств!');
        }
    });
    itemsList.appendChild(itemDiv);
});

document.getElementById('invest-button').addEventListener('click', function() {
    const investAmount = parseInt(document.getElementById('invest-input').value);
    if (money >= investAmount && investAmount > 0) {
        money -= investAmount;
        animateMoneyUpdate();
        alert('Инвестиции успешно сделаны!');
    } else {
        alert('Недостаточно средств или введена неправильная сумма!');
    }
});
