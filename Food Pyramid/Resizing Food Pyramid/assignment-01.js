var under5 = true;
let layers = document.querySelectorAll('.layer'); 
console.log("running");
for(let i=0; i<layers.length; i++){
    const layer = layers[i];
    let counter = layer.querySelector('.counter');
    let minus = layer.querySelector('.minus');
    let plus = layer.querySelector('.plus');

    if(layer.id == "sweets")counter.style.background = "green";
    if(layer.id == "fats")counter.style.background = "green";

    //listens for plus click and preforms logic for 1-4 or 5 and up to change colours
    plus.addEventListener('click', () =>{
        const num = parseInt(counter.textContent)+1;
        counter.textContent = num;
        layer.style.height = ((num + 1) * 10) +"vh";

        //1-4
        if(under5)
        {
            if(layer.id == "sweets")
            {
                if(num > 0)
                {
                counter.style.background = "red";
                }
            }

            if(layer.id == "fats")
            {
                if(num > 1)
                {
                    counter.style.background = "red";
                }

                else if(num > 0)
                {
                    counter.style.background = "green";
                }
            }

            if(layer.id == "meat")
            {
                if(num > 2)
                {
                    counter.style.background = "red";
                }

                else if(num > 0)
                {
                    counter.style.background = "green";
                }
            }

            if(layer.id == "dairy")
            {
                if(num == 3)
                {
                    counter.style.background = "green";
                }

                else if(num > 3)
                {
                    counter.style.background = "red";
                }
            }

            if(layer.id == "carbs")
            {
                if(num > 3)
                {
                    counter.style.background = "red";
                }

                else if(num > 1)
                {
                    counter.style.background = "green";
                }
            }

            if(layer.id == "fruitNveg")
            {
                if(num > 2 && num < 5)
                {
                    counter.style.background = "green";
                }

                else if(num > 4)
                {
                    counter.style.background = "red";
                }
            }
        }

        //for 5 and up
        else
        {
            if(layer.id == "sweets")
            {
                if(num > 0)
                {
                counter.style.background = "red";
                }
            }

            if(layer.id == "fats")
            {
                if(num > 1)
                {
                    counter.style.background = "red";
                }

                else if(num > 0)
                {
                    counter.style.background = "green";
                }
            }

            if(layer.id == "meat")
            {
                if(num > 2)
                {
                    counter.style.background = "red";
                }

                else if(num > 1)
                {
                    counter.style.background = "green";
                }
            }

            if(layer.id == "dairy")
            {
                if(num == 3)
                {
                    counter.style.background = "green";
                }

                else if(num > 3)
                {
                    counter.style.background = "red";
                }
            }

            if(layer.id == "carbs")
            {
                if(num > 5)
                {
                    counter.style.background = "red";
                }

                else if(num > 2)
                {
                    counter.style.background = "green";
                }
            }

            if(layer.id == "fruitNveg")
            {
                if(num > 7)
                {
                    counter.style.background = "red";
                }

                else if(num > 4)
                {
                    counter.style.background = "green";
                }
            }
        }


    })

    //listens for minus click and preforms logic for 1-4 or 5 and up to change colours
    minus.addEventListener('click', () =>
    {
            const num = Math.max(0,parseInt(counter.textContent)-1);
            counter.textContent = num;
            layer.style.height = ((num + 1)*10) +"vh";

            //1-4
            if(under5)
            {
                if(layer.id == "sweets")
                {
                    if(num < 1)
                    {
                    counter.style.background = "green";
                    }
                }
    
                if(layer.id == "fats")
                {
                    if(num < 2)
                    {
                        counter.style.background = "green";
                    }
                }
    
                if(layer.id == "meat")
                {
                    if(num == 2)
                    {
                        counter.style.background = "green";
                    }
    
                    else if(num < 1)
                    {
                        counter.style.background = "grey";
                    }
                }
    
                if(layer.id == "dairy")
                {
                    if(num == 3)
                    {
                        counter.style.background = "green";
                    }
    
                    else if(num < 3)
                    {
                        counter.style.background = "grey";
                    }
                }
    
                if(layer.id == "carbs")
                {
                    if(num < 6 && num > 2)
                    {
                        counter.style.background = "green";
                    }
    
                    else if(num < 2)
                    {
                        counter.style.background = "grey";
                    }
                }
    
                if(layer.id == "fruitNveg")
                {
                    if(num < 8 && num > 2)
                    {
                        counter.style.background = "green";
                    }
    
                    else if(num < 3)
                    {
                        counter.style.background = "grey";
                    }
                }
            }
    
            //for 5 and up
            else
            {
                if(layer.id == "sweets")
                {
                    if(num > 0)
                    {
                    counter.style.background = "red";
                    }
                }
    
                if(layer.id == "fats")
                {
                    if(num > 1)
                    {
                        counter.style.background = "red";
                    }
    
                    else if(num > 0)
                    {
                        counter.style.background = "green";
                    }
                }

                if(layer.id == "meat")
                {
                    if(num > 2)
                    {
                        counter.style.background = "red";
                    }
    
                    else if(num > 1)
                    {
                        counter.style.background = "green";
                    }
                }
    
                if(layer.id == "dairy")
                {
                    if(num == 3)
                    {
                        counter.style.background = "green";
                    }
    
                    else if(num > 3)
                    {
                        counter.style.background = "red";
                    }
                }
    
                if(layer.id == "carbs")
                {
                    if(num > 5)
                    {
                        counter.style.background = "red";
                    }
    
                    else if(num > 2)
                    {
                        counter.style.background = "green";
                    }
                }
    
                if(layer.id == "fruitNveg")
                {
                    if(num > 7)
                    {
                        counter.style.background = "red";
                    }
    
                    else if(num > 4)
                    {
                        counter.style.background = "green";
                    }
                }
            }

    })

    //listens for button click and resets variables so it can be used in the other mode
    button.addEventListener("click", () =>
    {
        counter.textContent = 0;
        layer.style.height = 10+"vh";
        if(layer.id == "sweets")counter.style.background = "green";
        if(layer.id == "fats")counter.style.background = "green";
        if(layer.id == "meat")counter.style.background = "grey";
        if(layer.id == "dairy")counter.style.background = "grey";
        if(layer.id == "carbs")counter.style.background = "grey";
        if(layer.id == "fruitNveg")counter.style.background = "grey";
    })

    //toggle switch for logic, if true set false. if false set true
    function under5()  
    {
        if(!under5)
        {
            button.textContent = "Under 5"
            under5 = true;
            console.log("true");
        }

        else
        {
            button.textContent = "Over 5"
            under5 = false;
            console.log("false");
        }
    }
}