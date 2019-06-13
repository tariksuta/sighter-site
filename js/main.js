// var message = "Welcome to sighter homepage";
// document.getElementById("message").innerHTML = message;
var niz = ['slika1', 'slika2', 'slika3'];
var slike = ['../img/david-marcu-125458-unsplash.png', "/img/simon-matzinger-294978-unsplash.png", "/img/maid-milinkic-663024-unsplash.png"];
var brojac = 0;
var brojacslika1 = 0;
var brojacslika2 = 0;
var brojacslika3 = 0;

function dodjeliSliku(naziv, rb) {
    for (var i = 0; i < niz.length; i++) {
        if (niz[i] == naziv) {
            if (i == 0) {


                if (brojac > 0) {
                    showSlides(1);

                    document.getElementById("glavna").src = '../img/david-marcu-125458-unsplash.png';
                    document.getElementById("slika1").src = '../img/simon-matzinger-294978-unsplash.png';


                    brojac = 0;
                } else {
                    if (rb == 1) {
                        showSlides(2);

                        document.getElementById("glavna").src = '../img/simon-matzinger-294978-unsplash.png';
                        document.getElementById("slika1").src = '../img/david-marcu-125458-unsplash.png';
                        brojac++;
                    }
                }


            } else if (i == 1) {
                showSlides(2);
                document.getElementById("glavna").src = '../img/simon-matzinger-294978-unsplash.png';
                document.getElementById("slika1").src = '../img/david-marcu-125458-unsplash.png';



            } else if (i == 2) {
                if (brojac > 0) {
                    showSlides(2);

                    document.getElementById("glavna").src = '../img/simon-matzinger-294978-unsplash.png';
                    document.getElementById("slika3").src = '../img/maid-milinkic-663024-unsplash.png';


                    brojac = 0;
                } else {
                    if (rb == 3) {
                        showSlides(3);

                        document.getElementById("glavna").src = '../img/maid-milinkic-663024-unsplash.png';
                        document.getElementById("slika3").src = '../img/simon-matzinger-294978-unsplash.png';
                        brojac++;
                    }
                }



            }

        }
    }



}


function showSlides(n) {
    var slideIndex = n;
    var i;
    var img = document.getElementsByClassName("artikal");
    var dots = document.getElementsByClassName("krug");
    if (n > img.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = img.length }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[slideIndex - 1].className += " active";
}

