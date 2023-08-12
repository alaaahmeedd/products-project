
var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('producPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');
var addBtn = document.getElementById('addBtn');
var UpdateBtn = document.getElementById('UpdateBtn');


var productList=[];

if(localStorage.getItem('products') != null){ //zbon 2adem

    productList = JSON.parse(localStorage.getItem('products'));
    displayProduct(productList);



}

function addProduct(){

    var product= {
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        desc:productDescInput.value
    }

    productList.push(product);
    localStorage.setItem('products',JSON.stringify(productList));
    console.log(productList);
    displayProduct(productList);
    clearForm()

}

function searchProduct(term){
    var matchedProducts=[];
    
    for(var i=0; i<productList.length; i++){
        if(productList[i].name.toLowerCase().includes(term.toLowerCase())===true){
            matchedProducts.push(productList[i]);
        }
    }
    console.log(matchedProducts);
    displayProduct(matchedProducts)

}

function clearForm(){
    productNameInput.value='',
    productPriceInput.value='',
    productCategoryInput.value='',
    productDescInput.value=''

}

function displayProduct(list){

    var cartoona = '';

    for(var i =0; i< list.length; i++){
        cartoona+=`<tr>
                    <td> ${list[i].name}</td>
                    <td> ${list[i].price}</td>
                    <td> ${list[i].category} </td>
                    <td> ${list[i].desc} </td>
                    <td> <button onclick="setFormForUpdate(${i})" class="btn btn-outline-warning">Update</button> </td>
                    <td> <button onclick="deleteProduct(${i})"class="btn btn-outline-danger">Delete</button> </td>
                  </tr> `
    }

    document.getElementById('tableBody').innerHTML=cartoona;

    console.log(cartoona);

}

function deleteProduct(productIndex){
    productList.splice(productIndex,1);
    localStorage.setItem('products',JSON.stringify(productList))
    displayProduct(productList);
}

function setFormForUpdate(index){
    addBtn.classList.replace('d-block','d-none');
    updateBtn.classList.replace('d-none','d-block');
    productNameInput.value = productList[index].name;
    productPriceInput.value = productList[index].price;
    productCategoryInput.value = productList[index].category;
    productDescInput.value = productList[index].desc;

}

localStorage.setItem('company','Route');
localStorage.getItem('company');
localStorage.length();

sessionStorage.setItem('username','alaa') 