const products = [
  {
    name: "Elegant Frame",
    price: 300,
    size: "small",
    image: "images/frame1.png"
  },
  {
    name: "Classic Frame",
    price: 450,
    size: "medium",
    image: "images/frame2.jpg"
  },
  {
    name: "Luxury Frame",
    price: 600,
    size: "large",
    image: "images/frame3.jpg"
  }
];

const productList = document.getElementById("productList");
const priceFilter = document.getElementById("priceFilter");
const sizeFilter = document.getElementById("sizeFilter");

function renderProducts(productsToRender) {
  productList.innerHTML = "";
  productsToRender.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <p>Size: ${product.size}</p>
    `;
    productList.appendChild(card);
  });
}

function filterAndSortProducts() {
  let filtered = [...products];

  const size = sizeFilter.value;
  if (size !== "all") {
    filtered = filtered.filter(p => p.size === size);
  }

  const priceSort = priceFilter.value;
  if (priceSort === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (priceSort === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

priceFilter.addEventListener("change", filterAndSortProducts);
sizeFilter.addEventListener("change", filterAndSortProducts);

// Initial render
renderProducts(products);
