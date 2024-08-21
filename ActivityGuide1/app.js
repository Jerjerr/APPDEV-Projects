//This is the component for the first item
const btn1 = document.getElementById("btn1")
//for displaying the information
btn1.addEventListener("click", () => {
    //create and initialize our variables
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telephone = document.getElementById("telephone").value
    let major = document.getElementById("major").value

    //display message in a template string
    let x = `Hello! ${name}, I see that you are from ${address} 
    and you are also pursuing ${major} and you can be 
    contacted using ${telephone}`
    document.getElementById("output1").innerHTML = x
    })

    //Item2
    btn2.addEventListener("click",() =>{
        let sales = document.getElementById("sales").value
        sales = sales * 0.23
    
        let y = `Your annual profit is ${sales}`
        document.getElementById("output2").innerHTML = y
    })

    //Item3
    btn3.addEventListener("click",() =>{
        let distance1 = 60 * 5 
        let distance2 = 60 * 8
        let distance3 = 60 * 12
        let dis1 = `The distance that the car will travel in 5 hours is: ${distance1}miles.`
        document.getElementById("output3").innerHTML = dis1
        let dis2 = `The distance that the car will travel in 8 hours is: ${distance2}miles.`
        document.getElementById("output3a").innerHTML = dis2
        let dis3 = `The distance that the car will travel in 12 hours is: ${distance3}miles.`
        document.getElementById("output3b").innerHTML = dis3
    })

    //Item4
    btn4.addEventListener("click",() =>{
        let miles = document.getElementById("miles").value
        let gas = document.getElementById("gas").value
        let z = miles/gas
    
        let ff = `Your car's miles PER gallon is: ${z}`
        document.getElementById("output4").innerHTML = ff
    })

    //Item5
    btn5.addEventListener("click",() =>{
        let cels = document.getElementById("cels").value
        farr = cels * (9/5) + 32
    
        let jj = `Your degrees converted to Fahrenheit is: ${farr}`
        document.getElementById("output5").innerHTML = jj
    })

    //Item6
    btn6.addEventListener("click",() =>{
        let ckies = document.getElementById("ckies").value
        ckies = ckies * 75
    
        let jj = `You have consumed ${ckies} calories!`
        document.getElementById("output6").innerHTML = jj
    })

    //Item7
    btn7.addEventListener("click",() =>{
        let malee = document.getElementById("malee").value
        let femalee = document.getElementById("femalee").value
        total = (+malee)+(+femalee)
      
        let malep = +malee/total * 100
        let femalep = +femalee/total * 100

        let ff = `There are ${malep}% male students, while there's ${femalep}% female students`
        document.getElementById("output7").innerHTML = ff
    })







