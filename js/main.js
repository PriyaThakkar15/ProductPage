
function imageGray() {
    var pic = "img/wollen-shoes.png";
    var img =document.getElementById('img-show');
    img.src = pic.replace('90x90', '225x225');
    var price = document.getElementById('priceTag');
    price.innerHTML = "$250.00";

    function total()
    {
        var sum;
        if((pic =="img/wollen-shoes.png")||(price=="$250")){

        }
    }
}
function imageblack() {
    var pic = "img/black.png";
    var img = document.getElementById('img-show');
    img.src = pic.replace('90x90', '225x225');
    document.getElementById('priceTag').innerHTML ="$280.00";
}





