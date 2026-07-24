function loadProducts() {

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {

            let output = "";

            data.forEach(product => {

                output += `
                    <div class="card">
                        <img src="${product.image}" alt="${product.title}">
                        <h3>${product.title}</h3>
                        <p class="price">$${product.price}</p>
                    </div>
                `;

            });

            document.getElementById("products").innerHTML = output;

        })
        .catch(error => {
            console.log("Error:", error);
        });

}

loadProducts();