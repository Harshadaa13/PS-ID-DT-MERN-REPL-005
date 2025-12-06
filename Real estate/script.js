const properties = [
  {
    id: 1,
    title: "2 BHK Apartment",
    location: "Mumbai",
    price: 7500000,
    img: "assets/2BHK.jpg"
  },
  {
    id: 2,
    title: "Luxury Villa",
    location: "Pune",
    price: 15000000,
    img: "assets/luxury villa.jpg"
  },
  {
    id: 3,
    title: "1 BHK Flat",
    location: "Nagpur",
    price: 3500000,
    img: "assets/1 bhk flat.jpg"
  }
];

const container = document.getElementById("property-list");
const search = document.getElementById("search");

function displayProperties(list) {
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="property-card">
        <img src="${p.img}" alt="house">
        <h3>${p.title}</h3>
        <p>📍 ${p.location}</p>
        <p>💰 ₹${p.price.toLocaleString()}</p>
        <button onclick="viewProperty(${p.id})">View Details</button>
      </div>
    `;
  });
}

displayProperties(properties);

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  const filtered = properties.filter(p =>
    p.location.toLowerCase().includes(value)
  );
  displayProperties(filtered);
});

function viewProperty(id) {
  const prop = properties.find(p => p.id === id);
  alert(
    `${prop.title}\n\nLocation: ${prop.location}\nPrice: ₹${prop.price.toLocaleString()}`
  );
}