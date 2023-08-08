let layers = document.querySelectorAll('.layer'); 
console.log("running");
for(let i=0; i<layers.length; i++){
    const layer = layers[i];
    let counter = layer.querySelector('.counter');
    let minus = layer.querySelector('.minus');
    let plus = layer.querySelector('.plus');
    minus.addEventListener('click', () =>{
            const num = Math.max(0,parseInt(counter.textContent)-1);
            counter.textContent = num;
  
    })
    plus.addEventListener('click', () =>{
        const num = parseInt(counter.textContent)+1;
        counter.textContent = num;
    })
}