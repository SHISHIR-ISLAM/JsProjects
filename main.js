
// Global Scope

let div = null;

window.onload = () => {
    main()
}

function main(){
    const root = document.querySelector('.container')
    const input= document.querySelector('.input-copy');
    const copyBtn= document.querySelector('.copy-btn');
    const changeBtn= document.querySelector('#change-btn');
 
    genareatHexColor()


 // changeTheBackgroundColor and  CopyInput

    changeBtn.addEventListener('click', function(){
        bg = genareatHexColor();
        root.style.background= bg;
        input.value= bg.substring(1);
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
    if(color && isValied){
        root.style.background = `#${color}`;
    }
})

}

console.log(main())

function genareatHexColor(){
    const red = Math.floor(Math.random()* 255);
    const green = Math.floor(Math.random()* 255);
    const blue = Math.floor(Math.random()* 255);

    return  `#${red.toString(16) }${green.toString(16) }${blue.toString(16)}`
} 


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

function isValied(color){
    if(color.length !== 6) return false;
    // if (color[0] !== '#') return false;

    return /^[1-9A-Fa-f]{6}$/i.test(color);


}




