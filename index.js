// let data = [
//   {
//     id: 1,
//     name: "Cheeseburger",
//     price: 5.99,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?cheeseburger",
//   },
//   {
//     id: 2,
//     name: "Pizza",
//     price: 8.99,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?pizza",
//   },
//   {
//     id: 3,
//     name: "Tacos",
//     price: 3.99,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?tacos",
//   },
//   {
//     id: 4,
//     name: "Sushi",
//     price: 11.99,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?sushi",
//   },
//   {
//     id: 5,
//     name: "Pasta",
//     price: 9.99,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?pasta",
//   },
//   {
//     id: 6,
//     name: "Fried Chicken",
//     price: 7.99,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?fried_chicken",
//   },
//   {
//     id: 7,
//     name: "Grilled Cheese Sandwich",
//     price: 4.99,
//     imgSrc:
//       "https://source.unsplash.com/random/1920x1080/?grilled_cheese_sandwich",
//   },
//   {
//     id: 8,
//     name: "Steak",
//     price: 15.99,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?steak",
//   },
//   {
//     id: 9,
//     name: "Caesar Salad",
//     price: 6.99,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?caesar_salad",
//   },
//   {
//     id: 10,
//     name: "Fish and Chips",
//     price: 8.49,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?fish_and_chips",
//   },
//   {
//     id: 11,
//     name: "Ramen",
//     price: 9.49,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?ramen",
//   },
//   {
//     id: 12,
//     name: "Burrito",
//     price: 7.49,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?burrito",
//   },
//   {
//     id: 13,
//     name: "Pho",
//     price: 8.99,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?pho",
//   },
//   {
//     id: 14,
//     name: "Pad Thai",
//     price: 9.99,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?pad_thai",
//   },
//   {
//     id: 15,
//     name: "Gyro",
//     price: 6.49,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?gyro",
//   },
//   {
//     id: 16,
//     name: "Ice Cream",
//     price: 3.99,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?ice_cream",
//   },
//   {
//     id: 17,
//     name: "Smoothie",
//     price: 4.99,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?smoothie",
//   },
//   {
//     id: "18",
//     name: "Apple Pie",
//     price: 4.49,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?apple_pie",
//   },
//   {
//     id: 19,
//     name: "Chocolate Cake",
//     price: 5.49,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?chocolate_cake",
//   },
//   {
//     id: 20,
//     name: "Pancakes",
//     price: 4.99,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?pancakes",
//   },
//   {
//     id: 21,
//     name: "Cupcake",
//     price: 2.99,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?cupcake",
//   },
//   {
//     id: 22,
//     name: "Crepes",
//     price: 5.99,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?crepes",
//   },
//   {
//     id: 23,
//     name: "Club Sandwich",
//     price: 6.99,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?club_sandwich",
//   },
//   {
//     id: 24,
//     name: "Falafel",
//     price: 5.49,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?falafel",
//   },
//   {
//     id: 25,
//     name: "Curry",
//     price: 9.49,
//     imgSrc: "https://source.unsplash.com/random/1920x1080/?curry",
//   },
// ];
let data;

async function getMenu() {
  try {
    let response = await fetch(
      "https://sandeep836.github.io/json/food.json"
    );
    let result = await response.json();
    data=result;
    showThumbnails(result);
  } catch (error) {
    console.log(error);
  }
}
getMenu();

function showThumbnails(data){
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
       // console.log(item.id, item.name, item.price, item.imgSrc);
        let element=document.createElement("div");
        element.className="col";
        element.innerHTML=`<div class="card">
                                <img src=${item.imgSrc} class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">Price ${item.price}</p>
                                </div>
                            </div>`
        let division=document.getElementById("newcontainer");
        division.append(element);                     
        
      }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function TakeOrder(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      let count=3;
      let length=data.length;
      let order=[];
      while(order.length<count){
        let randomIndex=getRandomInt(0,length-1);
        order.push(data[randomIndex]);
    }
    resolve(order);
    },2500)
  })
}



function orderPrep(){
  return new Promise((resolve)=>{
    resolve({order_status:true, paid:false});
  },1500);
}

function payOrder(){
  return new Promise((resolve)=>{
    resolve({order_status:true, paid:true});
  },1000)
}
 function thankyouFnc(){
  window.alert("Thank You for eating with us today!!")
 }

 TakeOrder()
 .then((orders)=>{
  console.log(orders)
  return orderPrep();
})
.then((prepStatus)=>{
  console.log(prepStatus)
  return payOrder();
})
.then((payStatus)=>{
  console.log(payStatus)
  return thankyouFnc();
})
.catch((error) => {
  console.log('Error:', error);
});            