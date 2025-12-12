const restaurants = [
    {
        name: "Пицца Плюс",
        img: "./images/restaurants/pizza-plus.jpg",
        badge: "50мин",
        raiting: "4,5",
        price: "900",
        group: "Пицца",
    },
    {
        name: "Тануки",
        img: "./images/restaurants/tanuki.jpg",
        badge: "50мин",
        raiting: "4,5",
        price: "900",
        group: "Пицца",
    },
    {
        name: "FoodBand",
        img: "./images/restaurants/foodband.jpg",
        badge: "50мин",
        raiting: "4,5",
        price: "900",
        group: "Пицца",
    },
    {
        name: "Жадина Пицца",
        img: "./images/restaurants/zhadina-pizza.jpg",
        badge: "50мин",
        raiting: "4,5",
        price: "900",
        group: "Пицца",
    },
    {
        name: "Точка Еды",
        img: "./images/restaurants/tochka-food.jpg",
        badge: "50мин",
        raiting: "4,5",
        price: "900",
        group: "Пицца",
    },
    {
        name: "Pizza Burger",
        img: "./images/restaurants/pizza-burger.jpg",
        badge: "50мин",
        raiting: "4,5",
        price: "900",
        group: "Пицца",
    }
]

const modalItems = [1, 2, 3, 4, 5]

const modalContainer = document.querySelector(".cart-modal_body")

const container = document.querySelector(".products-wrapper");

container.innerHTML = restaurants.map(pr => `
     <a href="./goods.html" class="products-card">
                            <div class="products-card_image">
                                <img src="${pr.img}" alt="${pr.name}">

                            </div>
                            <div class="products-card-description">
                             <div class="products-card-description-row">
                             <h4 class="products-card-description--title">
                                ${pr.name}
                                </h4>
                                 <div class="products-card-description--badge">${pr.badge}</div>
                             </div>

                             <div class="products-card-description-row">
                        <div class="products-card-description-info">
                         <div class="products-card-description-info--rating">
                         <img src="./images/icons/star.svg" alt="star">
                        ${pr.raiting}
                         </div>
                         <div class="products-card-description-info--price">
                         От ${pr.price} ₽
                         </div>
                         <div class="products-card-description-info--group">
                         ${pr.group}
                         </div>
                        </div>
                             </div>
                            </div>
                        </a>
    `).join("")

modalContainer.innerHTML = modalItems.map(() => `
 <div class="cart-item">
                        <p class="cart-item_title">
                            Ролл угорь стандарт
                        </p>
                        <div class="cart-item_controls">
                            <div class="cart-item_controls--price">250 ₽</div>
                            <button class="btn btn-outline">-</button>
                            <div class="cart-item_controls--count">1</div>
                            <button class="btn btn-outline">+</button>

                        </div>
                    </div>
`).join("")