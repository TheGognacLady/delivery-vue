const goods = [
    {
        image: "./images/goods/good-1.jpg",
        title: "Ролл угорь стандарт",
        description: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
        price: "250",
    },
    {
        image: "./images/goods/good-2.jpg",
        title: "Ролл угорь стандарт",
        description: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
        price: "395",
    },
    {
        image: "./images/goods/good-3.jpg",
        title: "Калифорния лосось стандарт",
        description: " Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
        price: "250",
    },
    {
        image: "./images/goods/good-4.jpg",
        title: "Цезарь маки хl",
        description: "Цезарь маки хl",
        price: "250",
    },
    {
        image: "./images/goods/good-5.jpg",
        title: "Ясай маки стандарт 185 г",
        description: "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
        price: "250",
    },
    {
        image: "./images/goods/good-6.jpg",
        title: "Ролл с креветкой стандарт",
        description: "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
        price: "250",
    },

]

const container = document.querySelector(".products-wrapper");

container.innerHTML = goods.map(g => `
     <div class="products-card">
                            <div class="products-card_image">
                                <img src="${g.image}" alt="${g.title}">

                            </div>
                            <div class="products-card-description">
                             <div class="products-card-description-row">
                             <h5 class="products-card-description--title">
                                ${g.title}
                                </h5>  
                             </div>

                             <div class="products-card-description-row">
                               <p class="products-card-description--text">
                                 ${g.description}
                                 </p>
                             </div>

                             <div class="products-card-description-row">
                             <div class="products-card-description-controls">
                              <button class="btn btn-primary">
                               В корзину
                             <img src="./images/icons/goods_cart.svg" alt="shopping cart">
                        </button>
                        <span class="products-card-description-controls--price">${g.price} ₽</span>
                             </div>
                             </div>

                             </div>
                            </div>
                        </div>
    `).join("")