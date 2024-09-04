const hex = ["1: I know nothing, except the fact of my ignorance.","2: In a rich man's house there is no place to spit but his face.","3: Stand a little less between me and the sun.","4: The mob is the mother of tyrants.","5: No man is hurt but by himself."]
//#f15052 #AA0123 #ADF000 sample outputs
//controls the events fro our button btn
const btn = document.getElementById("btn")
//controls the content of span class = color
const color = document.querySelector(".color")

let numb1= 0
    btn.addEventListener("click", ()=>{
        let hexColor = 'Diogenes Quote '
        hexColor += hex[numb1]
        //controls the changes the text of span class color
        color.textContent = hexColor
        //changes the background color to the hexColor value
        document.body.style.backgroundColor = hexColor
    })

btn.addEventListener("click", ()=>{
    if(numb1<=3){
        numb1 = numb1 + 1
    }
    else
    numb1 = numb1 - 4
})


/*
btn.addEventListener("click", ()=>{
    let hexColor = 'Diogenes Quote: '
    for(let i=0; i<6; i++){
        //get a random value from our hex values array
        hexColor += hex[i]
    }
    //controls the changes the text of span class color
    color.textContent = hexColor
    //changes the background color to the hexColor value
    document.body.style.backgroundColor = hexColor
})
*/


//NEED IF CONDITION


/*
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
*/
