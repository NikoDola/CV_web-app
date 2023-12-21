const span = document.querySelector('.span');
const circle = document.querySelector('.circle');
let metal = 0;

circle.addEventListener('mouseover', () => {
    metal += 1; // or metal++
    if (metal === 1) {
        span.style.bottom = '18px';
        console.log(metal);
    }
    else if(metal === 2)
    {
        span.style.bottom = '37px';
        console.log(metal);
    }
    else if(metal === 3)
    {
        span.style.bottom = '56px';
        console.log(metal);
    }
    else if(metal === 4)
    {   metal = 0
            span.style.bottom = '0px';
            console.log(metal);

    }
    circle.addEventListener('mouseout', () => {
    })
});