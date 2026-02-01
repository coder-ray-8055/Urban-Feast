const cards = document.querySelectorAll(".ele1");
const ul = document.querySelector(".billList")
const genBtn = document.querySelector(".billGenerator")

let cost = []

cards.forEach(card => {
    card.addEventListener("click", () => {
        const name = card.dataset.name;
        const price = Number(card.dataset.price);
        cost.push(price)
        console.log(cost)

        console.log(name, price);
        createElement(name, price)

        toggleCart()
    });
});

const section = document.querySelector(".result")
const cart = document.querySelector(".cartHead")

function createElement(name, price) {

    const li = document.createElement("li");
    li.innerHTML = `${name} of Rs. ${price} <button class="delete">Delete</button>`;
    ul.appendChild(li);

    li.querySelector(".delete").addEventListener("click", () => {
        li.remove();

        // 🔥 cost se hamesha remove
        const index = cost.indexOf(price);
        if (index > -1) {
            cost.splice(index, 1);
        }

        // button show/hide
        toggleCart()
    });

    toggleCart()
}

function toggleCart() {
    if (ul.children.length > 0) {
        genBtn.style.display = "block";
    } else {
        genBtn.style.display = "none";
        billSection.style.display = "none"; // cart empty → bill bhi hide
    }
}



let bill = document.querySelector(".billGenerator")
let billSection = document.querySelector(".finalBill")
bill.addEventListener("click", genBill)


function genBill() {

    billSection.style.display = "flex";

    const result = Total();   // 👈 yahin magic hai
    const gTotal = grandTotal()

    // billSection.innerHTML = "";  // clear old bill

    billSection.classList.add("newSecionStyle")
    let para1 = document.querySelector(".p1")
    para1.innerHTML = `<i class="fa-solid fa-check"></i> Thanks for ordering... `

    let para2 = document.querySelector(".p2")
    para2.innerHTML = result

    let para3 = document.querySelector(".p3")
    para3.innerHTML = "GST : 18%"

    let para4 = document.querySelector(".p4")
    para4.innerHTML = gTotal

    let para5 = billSection.querySelector(".p5");
    para5.innerText = "Rider wil accepts all payment options — card, UPI, or cash.";

    let para6 = billSection.querySelector(".p6")
    para6.innerText = " Thank you for your order! Visit again 😊"

    billSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Total() {
    let sum = 0
    for (let i = 0; i < cost.length; i++) {
        sum += cost[i]
    }
    let statement = `Sub-Total : <span class="billBold">Rs.${sum}</span>`
    return statement
}

function grandTotal() {

    let final = 0
    for (let i = 0; i < cost.length; i++) {
        final += cost[i]
    }
    let gst = final * 0.18
    let grand = final + gst
    let state = `Grand-Total : <span class="billBold">Rs. ${grand.toFixed(2)} </span>`

    return state
}

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
    window.location.href = "index.html"; // yaha home page ka path daal do
});