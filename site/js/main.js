const scrollCategories = new ScrollObj('scrollCategories')
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
]



