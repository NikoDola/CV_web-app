const pictureBackground = document.getElementById('picture_background');
const allH2Elements = document.querySelectorAll('h2')
const picture = document.querySelector('#picture');
const contact_text = document.querySelector('.contact_text')
const contact_form = document.querySelector('.contact_form')
const span = document.querySelector('.span')

const github =document.getElementById('github')
const behance =document.getElementById('behance')
const dribbble =document.getElementById('dribbble')
const instagram =document.getElementById('instagram')
const linkedin =document.getElementById('linkedin')
const youtube =document.getElementById('youtube')

linkedin.addEventListener('mouseover', ()=>{
    linkedin.style.transition='3s ease'
linkedin.src='assets/Social media icons_linkedin_hover.png'
})
linkedin.addEventListener('mouseleave', ()=>{
    linkedin.src='assets/Social media icons_linkedin.png'
})

let kamen = 1
let drvo = 0

contact_text.addEventListener('click', function(){
    kamen ++
    if(kamen % 2 === 0){
        contact_form.style.transition ='0.5s ease'
        contact_form.style.display='block'
    }
    else{
        contact_form.style.display=''
    }
})

picture.addEventListener('click', function() {
    
    drvo ++
    console.log(`count is ${count}`)
    if (drvo === 1) {
    picture.src="assets/sun-glasess2.png"
    }
    if (drvo === 2){
    picture.src="assets/sun-glasess-gold-chain.png"
    }
  });



let count = 0
const cyan = [1, 5,  9, ]
const magenta = [2, 6, 10, ]
const yellow = [3, 7, 11, ]
const key = [4, 8, 12, ]
pictureBackground.addEventListener('mouseover',function(){
count ++
console.log(count)


if(cyan.includes(count)){
pictureBackground.style.background="#7FCFD5"
allH2Elements.forEach(function (h2Element) {
    h2Element.style.transition ='0.5s ease'
    h2Element.style.color = '#7FCFD5';
    span.style.bottom ="18px"
    // span.style.color='#7FCFD5'


  });
} 

else if(magenta.includes(count)){
    pictureBackground.style.background="#C36AAA"
    allH2Elements.forEach(function (h2Element) {
        h2Element.style.transition ='0.5s ease'
        h2Element.style.color = '#C36AAA';
        span.style.bottom ="36px"
        // span.style.color='#C36AAA'

      });
}

else if(yellow.includes(count)){
    pictureBackground.style.background="#F4943D"
    allH2Elements.forEach(function (h2Element) {
        h2Element.style.transition ='0.5s ease'
        h2Element.style.color = '#F4943D';
        span.style.bottom = `${(36+18)}px`
        // span.style.color='#F4943D'
        

        

      });
    }

else if(key.includes(count)){
    pictureBackground.style.background="#000000"
    allH2Elements.forEach(function (h2Element) {
        h2Element.style.transition ='0.5s ease'
        h2Element.style.color = '#000000';
        span.style.bottom =""
        // span.style.color='#000000'

      });
    }

    pictureBackground.addEventListener('mouseleave',function(){
        pictureBackground.style.background=''
    })
    if (count === 12){
        count = 1
    }
})


