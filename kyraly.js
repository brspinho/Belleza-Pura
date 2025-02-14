// Seleciona o botão do hambúrguer e o menu (ul)
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Adiciona o evento de clique ao hambúrguer
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active'); 
});




function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.querySelector(".blur-overlay").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.querySelector(".blur-overlay").style.display = "none";
  }

  const contactButton = document.querySelector('.contato');
  const formPopup = document.getElementById('myForm');
  
  contactButton.addEventListener('click', function() {
    openForm();
    formPopup.querySelector('input[type="text"]').focus();
  });

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();   
}, 4500)

function nextImage(){
    count++;
    if(count>4){
        count=1;
    
    }

    document.getElementById("radio"+count).checked = true;
}


document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.slider-wrapper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
});


document.querySelector('.nav-link.produtos').addEventListener('click', function() {
    document.querySelector('.produtos').classList.add('active');
    document.querySelector('.sobre').classList.remove('active');
});

document.querySelector('.nav-link.sobre').addEventListener('click', function() {
    document.querySelector('.sobre').classList.add('active');
    document.querySelector('.produtos').classList.remove('active');
});


o
function handleFormSubmit(event) {
    event.preventDefault(); 
     
    document.getElementById('successMessage').style.display = 'block';
    
    document.getElementById('contactForm').style.display = 'none';
    
   
}


function closeForm() {
    document.getElementById('myForm').style.display = 'none'; 
    document.querySelector('.blur-overlay').style.display = 'none'; 
}

