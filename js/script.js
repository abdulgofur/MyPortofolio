

$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemn ybs
    var elementujuan = $(tujuan);

    $('html,body').animate({
      scrollTop: elementujuan.offset().top - 50
    }, 1258, 'easeInOutExpo');

    e.preventDefault();
});


$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('.jumbotron img').css({
      'transform' : 'translate(0px, '+ wScroll/2+'%)'
  });

  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/1+'%)'
  });

  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/1+'%)'
  });


//portfolio
if (wScroll > $('.portfolio').offset().top - 400) {
  $('.portfolio .thumbnail').each(function(i){
    setTimeout(function(){
      $('.portfolio .thumbnail').eq(i).addClass('timbul');
    },300 * (i+1));
  });
}
else if (wScroll > $('.about').offset().top-300) {
  $('.about .thumbnail').each(function(i){
    setTimeout(function(){
      $('.about .thumbnail').eq(i).addClass('timbul');
    },300 * (i+1));
  });
}

});



//slider

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


//blackbox CONTACT

function masukannama() {
  if (document.f.nama.value == "") {
    alert("anda belum memasukan nama");
  }
}

function masukanalamat() {
  if (document.f.alamat.value == "") {
    alert("anda belum memasukan alamat");
  }
}

function masukantelp() {
  if (document.f.telp.value == "") {
    alert("anda belum memasukan telp");
  }
}

function masukanemail() {
  if (document.f.email.value == "") {
    alert("anda belum memasukan Email");
  }
}

function masukanpesan() {
  if (document.f.pesan.value == "") {
    alert("anda belum memasukan pesan");
  }
}

function terimakasih() {
  if ((document.f.nama.value != "") && (document.f.alamat.value != "") && (document.f.telp.value != "")) {
    window.open('pesan.html');

  }
  else
    alert("Mohon data di lengkapi");
}
//menghapus form
function eraseText() {
     document.getElementById("output").value = "";
     document.getElementById("nd").value = "";
     document.getElementById("nb").value = "";
     document.getElementById("email").value = "";
	}
