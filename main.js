
// Global Scope

let div = null;

window.onload = () => {
    main()
}

function main(){
    const root = document.querySelector('.container')
    const input= document.querySelector('.input-copy');
    const input2= document.querySelector('.input-rgb');
    const copyBtn= document.querySelector('.copy-btn');
    const changeBtn= document.querySelector('#change-btn');
 
    genareatHexColor()


 // changeTheBackgroundColor and  CopyInput

    changeBtn.addEventListener('click', function(){
       const color = generateDecimalCode();
       const hex = genareatHexColor(color);
       const rgb = generatRgbColor(color);
        root.style.background= hex;
        input.value= hex.substring(1).toUpperCase();
        input2.value = rgb
    })

// Copy Input Value

copyBtn.addEventListener('click', function(){
    navigator.clipboard.writeText(input.value);

    if(div !== null){
        div.remove();
        // div = null;
    }
    genarateTostMsg(`#${input.value} Copied`)
});
// isValidHex key  in input 
input.addEventListener('keyup', function(e){
    const color = e.target.value;

    if(color){
        input.value = color.toUpperCase()
        if(isValiedHex(color)){
            root.style.backgroundColor = `#${color}`
        }
    }
})

}

console.log(main())


function generateDecimalCode(){
    const red = Math.floor(Math.random()* 255);
    const green = Math.floor(Math.random()* 255);
    const blue = Math.floor(Math.random()* 255);

    return{
        red,
        green, 
        blue,
    }
}


// generat Hexadecimal color code function one

function genareatHexColor({red, green, blue}){
    
    // const {red, green, blue} = generateDecimalCode()

    const getTwoCode = (value) => {
        const hex = value.toString(16)
        return hex.length === 1 ? `0${hex}` : hex;
    }

    return  `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`
} 

// Generat RGB color code funtion 

function generatRgbColor({red, green, blue}){
    
    const {red, green, blue} = generateDecimalCode()

    return `rgb(${red},${green},${blue})`
}

// generate tost message color function 

function genarateTostMsg(msg){
    div = document.createElement('div');
    div.innerText = msg;
    div.className= 'tost-msg tost-msg-in';

    div.addEventListener('click', function(){
        div.classList.remove('tost-msg-in');
        div.classList.add('tost-msg-out');

        div.addEventListener('animationend', function(){
            div.remove();
            // div = null;
        })
    })
    document.body.appendChild(div)
}

/**
 * @param {string} color : ;
 */

function isValiedHex(color){
    if(color.length !== 6) return false;
    // if (color[0] !== '#') return false;

    return /^[1-9A-Fa-f]{6}$/i.test(color);


}



// Step-1: Creat one hendeler 

// Step-2: 

