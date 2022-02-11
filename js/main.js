
// Step-1. Create onload handler;

window.onload = () =>{

    main()
}

function main(){

    const container = document.getElementById('root');

    const btn = document.getElementById('change-btn');

    btn.addEventListener('click', function () {

        const bgColor = colorRgbGenerator();
        container.style.backgroundColor = bgColor;
    })

}
// Step-2. Random color generate;

function colorRgbGenerator(){

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}

// Step-3. Click button handler;

// Step-4. All necessary reference;
