let name = document.querySelector(".name")
let Email = document.querySelector(".Email")
let date = document.querySelector(".date")
let time = document.querySelector(".time")
let btn = document.querySelector(".book")
let img= document.querySelector(".sumImg")

// let summary = document.querySelector(".summary")////////
let summaryText = document.querySelector(".summaryText")

btn.addEventListener("click" , afterClick)

function afterClick(){
    img.style.display = "block";
    summaryText.innerHTML = "";

    let p1 = document.createElement("p")
    p1.innerHTML = `Hi <span class="jspart">${name.value}</span> thanks for booking table at Urban Feast , <br>
     Your table is <span class="jspart">successfully</span> booked on <span class="jspart">${date.value}</span> at <span class="jspart">${time.value}</span> <br> 
     We will update you on given Email <span class="jspart">${Email.value}</span> <br>
     We look forward to serving you at Urban Feast 🍽️` 

     let p2 = document.createElement("p")
     p2.innerHTML = `Sorry ${name.value},<span class="jspart"> All tables are booked</span> <br>
     We are currently <span class="jspart">fully booked</span> for the selected date and time. <br>
     Please try another time slot or visit us on a different day. <br>
     Thank you for your <span class="jspart">understanding</span>  ❤️`

     let luck = Math.floor(Math.random()*10) + 1

     if(luck >= 4){
        summaryText.append(p1)
        img.setAttribute("src" , "./assests/images/main6.png")
     } else{
        summaryText.append(p2)
        img.setAttribute("src" , "./assests/images/main7.png")
     }

    name.value = ""
    Email.value = ""
    date.value = ""
    time.value = ""
}


const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
    window.location.href = "index.html"; // yaha home page ka path daal do
});