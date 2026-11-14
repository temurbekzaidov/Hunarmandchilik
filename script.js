// Mahsulotlar bazasi (Yangi buyumlarni shu yerga qo'shing)
const crafts = [
    {
        id: 1,
        title: "Rishton sopol lagani",
        category: "kulolchilik",
        price: "250 000 so'm",
        desc: "Qo'lda naqshlangan an'anaviy moviy rangli sopol lagan.",
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "O'ymakor lavh (kitob tagligi)",
        category: "yogoch",
        price: "400 000 so'm",
        desc: "Yong'oq daraxtidan yasalgan nafis o'ymakorlik ishi.",
        image: "https://images.unsplash.com/photo-1605627079912-97c3810a11a4?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "Buxoro so'zanasi",
        category: "kashtachilik",
        price: "1 200 000 so'm",
        desc: "Tabiiy ipak iplar bilan tikilgan milliy devoriy kashta.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80"
    }
];

const gallery = document.getElementById('gallery');
const filterBtns = document.querySelectorAll('.filter-btn');

// Mahsulotlarni ekranga chiqarish funksiyasi
function renderCrafts(items) {
    gallery.innerHTML = ''; // Oldingi elementlarni tozalash

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="card-info">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
                <span class="price">${item.price}</span>
            </div>
        `;
        gallery.appendChild(card);
    });
}

// Kategoriya bo'yicha filtrlash
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Aktiv tugmani o'zgartirish
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');
        
        if (category === 'all') {
            renderCrafts(crafts);
        } else {
            const filtered = crafts.filter(item => item.category === category);
            renderCrafts(filtered);
        }
    });
});

// Sahifa yuklanganda barcha mahsulotlarni ko'rsatish
renderCrafts(crafts);