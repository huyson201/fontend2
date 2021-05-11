 async function getProductById(productId) {
     const url = "productdetail.php";
     const data = {
         id: productId
     };

     //gửi yêu cầu lên server
     const request = await fetch(url, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json; charset=utf-8',
             'Accept': 'application/json; charset=utf-8'
         },
         body: JSON.stringify(data)
     });

     //nhận kết quả trả về
     const result = await request.json();

     const description = document.querySelector('#productDescription');
     const name = document.querySelector('#productName');
     name.innerHTML = result.product_name;
     description.innerHTML = result.product_description;
     var myModal = new bootstrap.Modal(document.getElementById('modal'), option);
     myModal.show();


 }

 async function getProductByCategory() {
     var checkBox = document.querySelectorAll(".myCheck");
     const url = "productByCategory.php";
     var categoryId = [];

     checkBox.forEach(element => {
         if (element.checked) {
             categoryId.push(element.id);
         }
     });
     //  console.table(categoryId);
     const data = {
         id: categoryId
     };
     //gửi yêu cầu lên server
     const request = await fetch(url, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json; charset=utf-8',
             'Accept': 'application/json; charset=utf-8'
         },
         body: JSON.stringify(data)
     });

     //nhận kết quả trả về
     const result = await request.json();

     console.table(result);
     const productByCategory = document.getElementById("productByCategory");
     productByCategory.innerHTML = '';
     if (result === false) {
         return;
     }
     result.forEach(element => {
         productByCategory.innerHTML += `<div class="col-md-4">
          <div class="card">

              <a href="#">
                  <img src="./public/images/${element.product_photo} ?>" class="card-img-top" alt="...">
              </a>
              <div class="card-body">
                  <h5 class="card-title" data-bs-toggle="modal" data-bs-target="#modal" onclick="getProductById(${element.id})">${element.product_name}</h5>
                  <p class="card-text">${element.product_price}</p>
              </div>
          </div>
      </div>`
     });

 }

//  search processing

const searchBox = document.querySelector('#search-box'),
      feedBack = document.querySelector('.feed-back')


searchBox.onfocus = function(){
    if(!searchBox.classList.contains('active')){
        feedBack.classList.add('active')
    }
}
document.body.onclick = function(event){
     if(event.target !== searchBox){
         feedBack.classList.remove('active')
     }

    
}
searchBox.onkeyup = function(){
    let key = this.value

}

function search(key){
    const url = "getdatasearch.php"
    const method = "POST"
    let data = {key : key}

    fetch(url,{
        method : method,
        headers: {
            "Content-Type" : 'application/json;charset=UTF-8',
            "Accept" : 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
    .then(function(data){
       let result = ""
       data.forEach( e =>{
           result += `<div class="border-bottom p-2">${e.product_name}</div>`
       })
       
       feedBack.innerHTML = result
    })
}
