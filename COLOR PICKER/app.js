const colors = ["rrerer","fsafasdasd","rgba(133,122,200)","#f15025"]
const btn=document.getElementById("btn")
const color = document.querySelector(".color")
//function for chaning the colors of the HTML file
btn.addEventListener("click",()=>{
    //targeting the document body
    console.log(document.body)//not required
    //getting a random number from getRandomNumber
    const randomNumber = getRandomNumber()
    //referencing background color of the document body
    document.body.style.backgroundColor = colors[randomNumber]
    //change the text color for our span tag
    color.textContent = colors[randomNumber]
})
getRandomNumber = ()=>{
    return Math.floor(Math.random() * colors.length)
}