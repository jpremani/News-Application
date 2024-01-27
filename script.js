let Key="021c711e8cb84c22ac668c52d736e0da";
// let searchBtn=document.getElementById("searchBtn");
const getdata=async(input)=>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${Key}`);
    let jsonData=await res.json();
    console.log(jsonData);


    let cardData=document.querySelector(".cardData");
    cardData.innerHTML="";
    jsonData.articles.forEach(element => {

        console.log(element);
        
        let divs=document.createElement("div");
        divs.classList.add("card");
        
        cardData.appendChild(divs);
        
        divs.innerHTML=`
        <img src="${element.urlToImage}" alt="No Image">
        <h3>${element.title}</h3>
        <p>${element.description}</p>
         `
         divs.addEventListener("click",()=>window.open(element.url));
        
    });
    
    
}
function Search(){
    console.log("Button Click");
    let inputData=document.getElementById("input-data").value;
    getdata(inputData);
    
}
window.addEventListener("load",()=>
getdata("India")
)
// function NAVClick(value){
    // console.log("Politics Click");
    // console.log(value);
    // let input=value.toUpperCase();
    // if(input=='POLITICS'){
    // getdata("Politics");
    // }
    // else if(input=='SPORTS'){
    //     getdata("Sports");
    // }
    // else{
    //     getdata("TECHNOLOGY");
    // }
// }
function NAVClick(value){
        console.log("Politics Click");
        
        console.log(value);
        let input=value.toUpperCase();
        if(input=='POLITICS'){
        getdata("Politics");
        }
        else if(input=='SPORTS'){
            getdata("Sports");
        }
        else{
            getdata("TECHNOLOGY");
        }}