
renDerShoeRelate = (arrShoe) => {
  let htmlCard = "";
  for (let shoe of arrShoe) {
    htmlCard += `
        <div class="col-lg-4 my-4">
            <div class="card-product">
                <img src="${shoe.image}" alt="shoe-img" />
                <p class="product-name">${shoe.name}</p>
                <p class="desc">${shoe.description.length>20?shoe.description.substr(0,20):shoe.description}</p>
                <div class="button-wrapper">
                    <button class="buy-now">Buy now</button>
                    <span class="price">${shoe.price}$</span>
                </div>
            </div>
        </div>
        `;
  }
  document.querySelector("#list-shoes").innerHTML=htmlCard;
};

getAPIShoe = (id_shoe) => {
  let promise = axios({
    url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id_shoe}`,
    method:'GET'
  })
  promise.then((shoe) => {
    renDerShoeDetail(shoe.data.content)
    renDerShoeRelate(shoe.data.content.relatedProducts)
  })
}

renDerShoeDetail= (shoe) => {
  document.querySelector("#shoe-detail").innerHTML = `
  <div class="row align-items-center">
  <div class="col-lg-4">
    <div class="product-detail-left">
      <img src="${shoe.image}" alt="shoe-img" class="w-100"/>
    </div>
  </div>
  <div class="col-lg-8">
    <div class="product-detail-right">
      <p class="product-name">${shoe.name}</p>
      <p class="description">
        ${shoe.description}
      </p>
      <p class="available-size">Available size</p>
      <span>${shoe.size[0]}</span>
      <span>${shoe.size[1]}</span>
      <span>${shoe.size[2]}</span>
      <span>${shoe.size[3]}</span>
      <span>${shoe.size[4]}</span>
      <span>${shoe.size[5]}</span>
      <span>${shoe.size[6]}</span>
      <p class="price">${shoe.price}$</p>

      <p class="quantity">
        <button class="increase">+</button>
        1
        <button class="decrease">-</button>
      </p>
      <button class="add-to-cart">Add to cart</button>
    </div>
  </div>
  </div>
  `;
}

searchDetailShoe = () =>{
  let urlParams = new URLSearchParams(window.location.search);
  getAPIShoe(urlParams.get('id'));
}


searchDetailShoe();
