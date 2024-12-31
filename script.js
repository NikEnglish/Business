// Обработка смены вкладок
document.getElementById("menu-button-1").addEventListener("click", () => switchTab('clicker'));
document.getElementById("menu-button-2").addEventListener("click", () => switchTab('profile'));
document.getElementById("menu-button-3").addEventListener("click", () => switchTab('investments'));

// Управление активными вкладками
function switchTab(tab) {
    const tabs = ['clicker', 'profile', 'investments'];

    tabs.forEach((tabName) => {
        const content = document.getElementById(tabName);
        const button = document.getElementById(`menu-button-${tabs.indexOf(tabName) + 1}`);

        if (tabName === tab) {
            content.classList.add('active');
            button.classList.add('active');
        } else {
            content.classList.remove('active');
            button.classList.remove('active');
        }
    });
}

// Логика кликов
let money = 0;
const upgradeCost = 50;
const upgradeValue = 2;

document.getElementById("click-button").addEventListener("click", () => {
    money++;
    document.getElementById("money").textContent = `$${money}`;
});

document.getElementById("upgrade-click").addEventListener("click", () => {
    if (money >= upgradeCost) {
        money -= upgradeCost;
        document.getElementById("money").textContent = `$${money}`;
        document.getElementById("click-upgrade").textContent = parseInt(document.getElementById("click-upgrade").textContent) + 1;
    }
});

// Инвестиции
const investments = {
    "Акции Tesla": 200,
    "Bitcoin": 300,
    "Ethereum": 150
};

function buyInvestment(name, price) {
    if (money >= price) {
        money -= price;
        document.getElementById("money").textContent = `$${money}`;
        addItem(name, price);
    }
}

function addItem(name, price) {
    const itemList = document.getElementById("items-list");
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `${name} (Куплено за $${price})`;
    itemList.appendChild(item);

    // Увеличиваем счётчик покупок
    const purchasesCount = parseInt(document.getElementById("purchases-count").textContent);
    document.getElementById("purchases-count").textContent = purchasesCount + 1;
}

// Скрытие/открытие нижней панели
function toggleMenu() {
    const menu = document.querySelector('.bottom-menu');
    menu.style.bottom = (menu.style.bottom === '0px') ? '-100px' : '0';
}
