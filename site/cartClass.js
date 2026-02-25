
class Cart {
    
    constructor() {

        this.userId = 1
        this.userCart = {}
        this.currentCategory = 'all'

    }

    renderCart() {
        const dishesInCart = document.getElementById("dishesInCart");
        const totalEl = document.getElementById("cartTotal");
        const totalSum = document.getElementById("totalSum");
        const btnBuy = document.getElementById("btnBuy");
        
        const cartDishes = getCartDishes();

        if (cart.length == 0) {
            items.innerHTML = '<div class="empty-cart">Корзина пуста</div>';
            totalEl.stylele.disply = 'none';
            btn.disabled = true;
            return
        }

        btn.disabled = false;
        let sum = 0;
        items.innerHTML =  cartDishes.map(function(dish) {
            sum += dish.price * dish.qti;
            return `
            <div class="cart-item">
                <span class="cart-item-name">${dish.name}</span>
                <span class="cart-price">${dish.price * dish.qti}</span>
            </div>

            `
        }).join('')

        totalEl.style.display = 'flex'
        totalSum.textContent = sum + ' р'

}

}


function toggleCart() {
    const panel = document.getElementById("cartPanel");
    const overlay = document.getElementById("overlay");
    panel.classList.toggle("active");
    overlay.classList.toggle("active");

    renderCart();
}

function getCartDishes() {
    const cartIds = Object.keys(cart)
    const result = []

    for (let i = 0; i < cartIds.length; i++) {
        const dishId = cartIds[i]
        const quantity = cart[dishId]

        let dishInfo = null;
        for (let j = 0; j < dishes.length; j++) {
            if (dishes[j].id == dishId) {
                dishInfo = dishes[j]
                break
            }
        }

        const dishWithQty = {
            id: dishInfo.id,
            name: dishInfo.name,
            desc: dishInfo.desc,
            price: dishInfo.price,
            category: dishInfo.category,
            emoji: dishInfo.emoji,
            qti: quantity
        };
        
        result.push(dishWithQty);
    }

    return result;
}

