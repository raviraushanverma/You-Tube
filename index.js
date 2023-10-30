var container = document.querySelector("#container");
var searchItem = document.querySelector("#searchitem");
const api = "https://dummyjson.com/products/search?q=";

function kaka(juraHuaApi) {
  fetch(juraHuaApi, {
    method: "GET",
  }).then(function (result) {
    result.json().then(function (result) {
      container.innerHTML = "";
      result.products.forEach(function (element) {
        var div = document.createElement("div");
        div.classList.add("item");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var img = document.createElement("img");
        p1.innerHTML = element.title;
        p2.innerHTML = element.brand;
        p3.innerHTML = element.price;
        div.appendChild(img);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        img.setAttribute("src", element.thumbnail);
        container.appendChild(div);
      });
    });
  });
}

searchItem.addEventListener("change", function (event) {
  kaka(api + event.target.value);
});

kaka(api);
