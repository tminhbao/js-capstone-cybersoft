getAllShoeApi = () => {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });
  promise.then((res) => {
    console.log(res);
    renderProduct(res.data.content);
  });
  promise.catch((err) => {
    console.log(err);
  });
};
renderProduct = (data) => {
  let html = "";
  // querry shoe to show in list product
  for (let shoe of data) {
    html += `
        <div class="col-12 col-md-6 col-lg-4 scard">
            <div class="card-container">
              <img src=${shoe.image}>
              <p>${shoe.name}</p>
              <p>${
                shoe.description.length > 20
                  ? shoe.description.substr(0, 20) + "..."
                  : shoe.description
              }</p>
              <div class="buy-card d-flex">
                <a href="./detail.html?id=${shoe.id}" class="w-50">Buy now</a>
                <p class="w-50">${shoe.price}$</p>
              </div>
            </div>
        </div>
        `;
  }
  document.querySelector("#list-card").innerHTML = html;

  // querry on carousel
  let htmlCarousel = "";
  for (let index in data) {
        htmlCarousel += `
        <div class="carousel-item ${data[index].id==1?"active":""}">
        <div class="item-content row justify-content-between">
          <img
            src=${data[index].image}
            class="d-block col-6 "
            alt="..."
          />
          <div class="carousel-content col-5">
            <h3 class="d-md-block d-none">${data[index].name}</h3>
            <p class="d-md-block d-none">${data[index].description.length>20?data[index].description.substr(0,20)+"...":data[index].description}</p>
            <a href="">Buy now</a>
          </div>
        </div>
        </div>
        `;
    
  }

  document.querySelector(".carousel-inner").innerHTML=htmlCarousel;
};

getAllShoeApi();


