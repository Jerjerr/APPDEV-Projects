const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
//#f15052 #AA0123 #ADF000 sample outputs
//controls the events fro our button btn
const btn = document.getElementById("btn")
//controls the content of span class = color
const color = document.querySelector(".color")
//control
btn.addEventListener("click", ()=>{
    let hexColor = '#'
    for(let i=0; i<6; i++){
        //get a random value from our hex values array
        hexColor += hex[getRandomNumber()]
    }
    //controls the changes the text of span class color
    color.textContent = hexColor
    //changes the background color to the hexColor value
    document.body.style.backgroundColor = hexColor
})
getRandomNumber = ()=>{
    return Math.floor(Math.random() * hex.length)
}