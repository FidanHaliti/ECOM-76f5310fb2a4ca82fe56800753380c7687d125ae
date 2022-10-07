const main = document.querySelector(".products");
let products = [];

const trimText = (value, number) => {
  return value.substring(0, number) + "...";
};

const listitems = (images, title, category, price) => {
  let Product = document.createElement("div");
  let Image = document.createElement("img");
  let Title = document.createElement("h2");
  let Category = document.createElement("h4");
  let Price = document.createElement("h3");
  let button = document.createElement("div");


  for (let i = 0; i < button.classList.length; i++) { 
    button[i].addEventListener("click", function(e) {
      e.preventDefault();
      
    })
  } 


  Product.classList.add("product");
  button.classList.add("hudhe");

  
  Image.src = images;
  Title.textContent = title;
  Category.textContent = category;
  Price.textContent = price + " €.";
  button.textContent = "Shto ne shporte";
  button.innerHTML += `${"<i class='fas fa-cart-arrow-down'></i>"}`;
  Product.appendChild(Image);
  Product.appendChild(Title);
  Product.appendChild(Category);
  Product.appendChild(Price);
  Product.appendChild(button);
  main.appendChild(Product);
};

const getproducts = async () => {
  let data = await fetch("https://api.escuelajs.co/api/v1/products");
  let result = await data.json();
  products = result;
  products.map((item) => {
    listitems(item.images, trimText(item.title, 25), item.category.name, item.price);
    
  });
  
  
};

getproducts();
