let fizzInput = document.querySelector('.fizz-input');


fizzInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        let fizzContainer = document.querySelector('.fizz-buzz-output');


        //reset input content 
        fizzContainer.innerHTML='';
        fizzInput.style.borderColor='white';


        if(isNaN(fizzInput.value) || fizzInput.value > 100) {
            fizzContainer.innerHTML="<h3 style='color: white; text-align: center;'>Must be a number & it must be less than 100!</h3>";
            fizzInput.style.borderColor='red';
        } else {

            for(i = 1; i <= fizzInput.value; i++){
                if(i % 3 === 0 && i % 5 === 0 ) {
                    fizzContainer.append('Fizzbuzz, ');
                } else if(i % 3 === 0) {
                    fizzContainer.append('Fizz, ');
                }else if(i % 5 === 0) {
                    fizzContainer.append('Buzz, ');
                } else {
                    fizzContainer.append(`${i}, `);
                }
    
            }
        }

        
    }
});

const isPalindrome = () => {
    let palContainer = document.querySelector('.pal-output');
    let pal1 = document.querySelector('.pal1');
    let palLowerCase = pal1.value.toLowerCase();
    let reversed = pal1.value.split('').reverse().join('').toLowerCase();

    //reset content html
    palContainer.innerHTML='';


    if (!isNaN(pal1.value)) {
        palContainer.innerHTML="<h2 class='pal-answer-nan'>Needs to be a word >:|</h2>";

    }else if (palLowerCase === reversed) {
        palContainer.innerHTML="<h2 class='pal-answer-right'>True :D</h2>";
    }else {
        palContainer.innerHTML="<h2 class='pal-answer-wrong'>False :(</h2>";

    }
    
};


//small variables quiz


const varToF = () => {

    let btns = document.querySelectorAll('.btn');
    let scoreOutput = document.querySelector('.score');
    let score = 0;
    
    btns.forEach(btn => {
        btn.addEventListener('click', (e)=> {
            e.preventDefault();
            
            if(btn.className.includes('right')) {
                score++;
                btn.classList.toggle('check');
                btn.disabled=true;
            }else if(btn.className.includes('wrong')){
                btn.classList.toggle('cross');
            }

            if(score <= 3) {
                scoreOutput.innerHTML=`Your Score: ${score}/3`;
            }else {
                return;
            }
        });
    }) ;

    
};

varToF();
