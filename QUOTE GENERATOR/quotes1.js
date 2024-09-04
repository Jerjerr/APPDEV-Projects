const colors = ["If someone succeeds in provoking you, realize that your mind is complicit in the provocation.","You become what you give your attention to.","If you wish to improve, be content to appear foolish or stupid.","How long are you going to wait before you demand the best for yourself?","If your choices are beautiful, so too will you be beautiful."]
const btn=document.getElementById("btn")
const color = document.querySelector(".color")
//function for changing the colors of the HTML file
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

/*
const colors = ["green","red","rgba(133,122,200)","#f15025"]
const btn=document.getElementById("btn")
const color = document.querySelector(".color")
//function for changing the colors of the HTML file
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
*/

/*
const quotes = ["test","test2","test3","test5"]
const btn=document.getElementById("btn")
const quote = document.querySelector(".quote")
//function for chaning the colors of the HTML file
btn.addEventListener("click",()=>{
    //targeting the document body
    console.log(document.body)//not required
    //getting a random number from getRandomNumber
    const randomNumber = getRandomNumber()
    
})
getRandomNumber = ()=>{
    return Math.floor(Math.random() * quotes.length)
}
*/

