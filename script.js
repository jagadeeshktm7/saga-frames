const products = [
  {
    id: "frame1",
    name: "Elegant Frame",
    price: 300,
    size: "18x12 inches",
    image: "images/frame1.jpg",
    description: "A sleek, elegant wooden frame perfect for modern homes."
  },
  {
    id: "frame2",
    name: "Classic Frame",
    price: 450,
    size: "24x18 inches",
    image: "images/frame2.jpg",
    description: "Classic finish with golden lining for traditional looks."
  },
  {
    id: "frame3",
    name: "Luxury Frame",
    price: 600,
    size: "36x24 inches",
    image: "images/frame3.jpg",
    description: "Premium carved frame for art and photography lovers."
  }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  // 👉 THIS is where your line goes:
  card.innerHTML = `
    <a href="frame-details.html?id=${product.id}">
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <h3>${product.name}</h3>
      <p>₹${product.price} - ${product.size}</p>
    </a>
  `;

  productList.appendChild(card);
});
