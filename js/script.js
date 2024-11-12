const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const productList = document.getElementById("productList");
const products = document.querySelectorAll(".product");

// Function to filter products
const filteredProducts = () => {
  const searchQuery = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  products.forEach((product) => {
    const productName = product.querySelector("h3").innerHTML.toLowerCase();
    const productCategory = product.getAttribute("data-category");

    // Check if product matches search query and category
    const matchSearch = productName.includes(searchQuery);
    const matchCategory =
      selectedCategory === "all" || selectedCategory === productCategory;

    // Show or hide product based on match
    if (matchSearch && matchCategory) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

// Add event listeners for the input and filter select
searchInput.addEventListener("input", filteredProducts);
categoryFilter.addEventListener("change", filteredProducts);
