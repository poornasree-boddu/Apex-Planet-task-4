// Theme toggle logic
const toggleButton = document.getElementById("themeToggle");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
    toggleButton.textContent = currentTheme === "dark" ? "☀️" : "🌙";
  });

  // Load theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️";
  }
}




const products = [
  { name: "Phone", price: 300, rating: 4.5 },
  { name: "Laptop", price: 800, rating: 4.8 },
  { name: "Headphones", price: 150, rating: 4.2 },
  { name: "Monitor", price: 200, rating: 4.6 }
];

function renderProducts() {
  const sortValue = document.getElementById("sort").value;
  let sorted = [...products];

  if (sortValue === "priceLow") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortValue === "priceHigh") {
    sorted.sort((a, b) => b.price - a.price);
  }

  const container = document.getElementById("productList");
  container.innerHTML = sorted.map(product =>
    `<div class="card">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
    </div>`
  ).join('');
}

renderProducts();




let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    taskList.innerHTML += `<li>${task} <button onclick="deleteTask(${index})">❌</button></li>`;
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  if (taskInput.value.trim()) {
    tasks.push(taskInput.value.trim());
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    displayTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

displayTasks();
