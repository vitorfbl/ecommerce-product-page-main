const cart = document.getElementById("cOpen")
const cartI = document.getElementById("cartImg")
var timeoutId;
const mais = document.getElementById("mais")
const menos = document.getElementById("menos")
const qtd = document.getElementById("quantidade")
const btn = document.getElementById("cart-btn")
const qOrders = document.getElementById("qtdC")
var nmr = 0
var orders = 0
const Empty = document.getElementById("empty")
const pcart = document.getElementById("pCart")
const pQtd = document.getElementById("Pqtd")
const price = document.getElementById("priceT")
const qRequired = document.getElementById("required")


cartI.onmouseover = function () {
    timeoutId = setTimeout(function () {
        cart.classList.remove("hidden")
    }, 200);
}

cart.onmouseover = function () {
    clearTimeout(timeoutId);
}

cartI.onmouseout = function () {
    timeoutId = setTimeout(function () {
        cart.classList.add("hidden")
    }, 200);
}
cart.onmouseout = function () {
    timeoutId = setTimeout(function () {
        cart.classList.add("hidden")
    }, 200);
}

mais.onclick = function () {
    if (nmr <= 0) {
        nmr = 0
    }
    nmr++
    qtd.innerText = nmr

}

menos.onclick = function () {
    nmr--
    qtd.innerText = nmr
    if (nmr <= 0) {
        qtd.innerText = 0
    }
}


btn.onclick = function () {
    orders++
    qOrders.innerHTML = orders
    pQtd.innerText = nmr
    price.innerHTML = "$" + 125.00 * nmr + ".00"
    if (orders !== "0") {
        pcart.classList.remove("hidden")
        Empty.classList.add("hidden")
    } else {
        Empty.classList.remove("hidden")
        pcart.classList.add("hidden")
    }

}
document.getElementById("lixeira").onclick = function(){
    orders--
    qOrders.innerText = orders
    if(orders == 0){
        Empty.classList.remove("hidden")
        pcart.classList.add("hidden")
    }
}


var img = [document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3"), document.getElementById("img4")];
var divs = [document.getElementById("topDiv"), document.getElementById("lowDiv"), document.getElementById("qtdDiv"), document.getElementById("lowImgDiv")];
var cl = document.getElementById("close")
var currentImage = null;

img.forEach(function (image, index) {
    image.onclick = function () {
        img.forEach(function (img, i) {
            if (i === index) {
                currentImage = i + 1;
                document.getElementById("large" + currentImage).classList.remove("hidden");
                cl.classList.remove("hidden")
            } else {
                document.getElementById("large" + (i + 1)).classList.add("hidden");
            }
        });
        divs.forEach(function (div) {
            div.classList.add("cla");
            document.getElementById("p1").classList.remove("hidden")
            document.getElementById("n1").classList.remove("hidden")
            document.getElementById("body").classList.add("darkbo")
        });
        cl.onclick = function () {
            document.getElementById("large" + currentImage).classList.add("hidden");
            cl.classList.add("hidden");
            divs.forEach(function (div) {
                div.classList.remove("cla");
                document.getElementById("p1").classList.add("hidden")
                document.getElementById("n1").classList.add("hidden")
                document.getElementById("body").classList.remove("darkbo")
            });
        }
        document.getElementById("p1").onclick = function(){
            if (currentImage > 1) {
                document.getElementById("large" + currentImage).classList.add("hidden");
                currentImage--;
                document.getElementById("large" + currentImage).classList.remove("hidden");
            }
        }
        document.getElementById("n1").onclick = function(){
            if (currentImage < img.length) {
            document.getElementById("large" + currentImage).classList.add("hidden");
            currentImage++;
            document.getElementById("large" + currentImage).classList.remove("hidden");
            }
            }
            

    }
});