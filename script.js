const inputProduct = document.querySelector('.box-top-input')
const ulList = document.querySelector('.ulList')
let newProduct;
let myData;
let liItems, liElement;
const searchEngine = e => {    
    const text = e.target.value.toLowerCase();
    
    myData.forEach(el => {
        liElement = document.getElementById(el.id)
        if (el.name.toLowerCase().indexOf(text) !== -1) {
            liElement.style.display = 'block'
            console.log(text)
        } else {
            liElement.style.display = 'none'
        }
    })
}

inputProduct.addEventListener('keyup', searchEngine)


const API_LNK = 'http://localhost:3000/products'

axios.get(API_LNK).then(res => {
    for (let i = 0; i < res.data.length; i++) {
        myData = res.data;
        newProduct = document.createElement('li')
        newProduct.textContent = myData[i].name;
        newProduct.setAttribute('id', myData[i].id)
        ulList.append(newProduct)
        if (i >= 3) {
            newProduct.style.display= 'none'
        }
    }
    
})