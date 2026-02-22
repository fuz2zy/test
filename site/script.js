const tg = window.Telegram.WebApp
tg.expand();

const dishes = [
    { id: 1, name: "Карбонара", desc: "Паста, бекон, сливочный соус", price: 420, category: "hot", emoji: "🍝" },
    { id: 2, name: "Маргарита", desc: "Томат, моцарелла, базилик", price: 350, category: "pizza", emoji: "🍕" },
    { id: 3, name: "Пепперони", desc: "Острая колбаса, томат, сыр", price: 390, category: "pizza", emoji: "🍕" },
    { id: 4, name: "Цезарь", desc: "Курица, сухарики, соус, пармезан", price: 280, category: "salad", emoji: "🥗" },
    { id: 5, name: "Стейк из лосося", desc: "Лосось на гриле, овощи", price: 650, category: "hot", emoji: "🐟" },
    { id: 6, name: "Греческий салат", desc: "Огурец, помидор, фета, оливки", price: 240, category: "salad", emoji: "🥗" },
    { id: 7, name: "Латте", desc: "Эспрессо, молоко", price: 180, category: "drinks", emoji: "☕" },
    { id: 8, name: "Свежевыжатый апельсин", desc: "100% натуральный сок", price: 200, category: "drinks", emoji: "🍊" },
];


function renderMenu(category = 'all') {
    const menu = document.getElementById('menu');
    const filtered = category === 'all' ? dishes : dishes.filter(d => d.category === category);
    menu.innerHTML = filtered.map((d, i) => `
    <div class="dish-card" style="animation-delay:${i * 0.05}s">
            <div class="dish-img">${d.emoji}</div>
            <div class="dish-info">
                <div class="dish-name">${d.name}</div>
                <div class="dish-desc">${d.desc}</div>
                <div class="dish-price">${d.price} ₽</div>
            </div>
            <div class="dish-actions">
                <button class="add-btn" onclick="">+</button>
                <span class="qty-display" id="qty-${d.id}">${''}</span>
                <button class="remove-btn" onclick="" style="display:${'' ? 'flex' : 'none'}">−</button>
            </div>
        </div>
    `).join('')
};





const el = document.querySelector('.categories');

el.addEventListener('wheel', function(e) {
    e.preventDefault();
    el.scrollLeft += e.deltaY;
}, { passive: false });

let isDown = false;
let startX, scrollLeft;

el.addEventListener('mousedown', function(e) {
    isDown = true;
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
});

el.addEventListener('mouseleave', function() {
    isDown = false;
});
el.addEventListener('mouseup', function() {
    isDown = false;
});
el.addEventListener("mousemove", function(e) {
    if (!isDown) return;
    const x = e.pageX - el.offsetLeft;
    el.scrollLeft = scrollLeft - (x - startX);
});


renderMenu()