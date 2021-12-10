var root = document.documentElement;
const title = document.getElementById("title");

var colorPalette = ["#2F5D62", "#4c969c", "#a52a2a", "#ffffff", "#5E8B7E", "#5f9ea0", "#dfeeea", "#479c95",  "black", "#35696e", "white", "#a52a2a", "#3e7b81", "#a57b2c", "#4ca057",  "black", "#a52a2a", "#529183", "#24464b", "#5ac599"];
const forestColorPalette = ["#2F5D62", "#4c969c", "#a52a2a", "#ffffff", "#5E8B7E", "#64c4c7", "#dfeeea", "#479c95",  "black", "#35696e", "white", "#a52a2a", "#3e7b81", "#a57b2c", "#4ca057", "black", "#a52a2a", "#529183", "#24464b", "#5ac599"];
const watersColorPalette = ["#033a65", "#488fbe", "#ffe96e", "#0066ff", "#339ee6", "#79c9ff", "#9bc2e2", "#3b4caf", "#f0f1ff", "#0d195c", "#b8e9ff", "#ffe96e", "#32a3b9", "#4787ff", "#a2b6ac", "black", "#ffe96e", "#5da4d3", "#033a65", "#7ac3ff"]
const desertColorPalette = ["#9a3600", "#c06d40", "#ffae00", "#ffffff", "#c5825e", "#ff9257", "#e0b583", "#a83b00", "#ffdd9f", "#4b1a00", "#ff5900", "#ffae00", "#ebb272", "#b4613b",  "#deac95", "#94b5bb", "#ffae00", "#d8964b", "#9a3600", "#ffdd9f"]
const body = document.getElementsByTagName("body")[0];

switch (body.id) {
    case "forest":
        colorPalette = forestColorPalette;
        document.getElementById("title").style.backgroundImage = "url(./pictures/forest/forest.jpg)";
        document.getElementsByClassName("border1")[0].style.backgroundImage = "url(./svg/forest/border1.svg)";
        document.getElementsByClassName("border2")[0].style.backgroundImage = "url(./svg/forest/border2.svg)";
        var changing1 = ["provide 25%", "cover 31%", "contain 80%", "absorb 30%"]
        var changing2 = ["medicine.", "landmass.", "biomass.", "greenhouse gas emission."]
        document.getElementsByTagName("label")[4].style.display = "none";
        Initialize()
        gallery();
        colorFill();
        break;
        
    case "waters":
        colorPalette = watersColorPalette;
        document.getElementById("title").style.backgroundImage = "url(./pictures/waters/waters.jpg)";
        document.getElementsByClassName("border1")[0].style.backgroundImage = "url(./svg/waters/border1.svg)";
        document.getElementsByClassName("border2")[0].style.backgroundImage = "url(./svg/waters/border2.svg)";
        var changing1 = ["cover 71%", "contain 94%", "produce 70%", "are the habitat"]
        var changing2 = ["surface.", "living species.", "oxygen.", "largest animal."]
        document.getElementsByTagName("label")[2].style.display = "none";
        document.getElementsByTagName("label")[4].style.display = "none";
        Initialize()
        colorFill();
    break;
            
    case "desert":
        colorPalette = desertColorPalette;
        document.getElementById("title").style.backgroundImage = "url(./pictures/desert/desert.jpg)";
        document.getElementsByClassName("border1")[0].style.backgroundImage = "url(./svg/desert/border1.svg)";
        document.getElementsByClassName("border2")[0].style.backgroundImage = "url(./svg/desert/border2.svg)";
        var changing1 = ["cover 20%", "house 13%", "are one"]
        var changing2 = ["landmass.", "population.", "most extreme regions."]
        Initialize()
        colorFill();
    break;
                
    case "form":
        validate();
    break;
                    
    default:
    break;
}
        
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("move");
    hamburger.classList.toggle("rotate");
});
                    
function colorFill() {      
    root.style.setProperty("--background", colorPalette[0]);
    root.style.setProperty("--header", colorPalette[1]);
    root.style.setProperty("--hamburger", colorPalette[2]);
    root.style.setProperty("--backToTopHover", colorPalette[3]);
    root.style.setProperty("--navBg", colorPalette[4]);
    root.style.setProperty("--navListHover", colorPalette[5]);
    root.style.setProperty("--contentsBg", colorPalette[6]);
    root.style.setProperty("--contentsListBg", colorPalette[7]);
    root.style.setProperty("--contentsListColor", colorPalette[8]);
    root.style.setProperty("--contentsListHover", colorPalette[9]);
    root.style.setProperty("--contentsListHoverText", colorPalette[10]);
    root.style.setProperty("--all", colorPalette[11]);
    root.style.setProperty("--variant1", colorPalette[12]);
    root.style.setProperty("--variant2", colorPalette[13]);
    root.style.setProperty("--variant3", colorPalette[14]);
    root.style.setProperty("--variant4", colorPalette[15]);
    root.style.setProperty("--color", colorPalette[16]);
    root.style.setProperty("--inhabitantsBg", colorPalette[17]);
    root.style.setProperty("--footerBg", colorPalette[18]);
    root.style.setProperty("--footerText", colorPalette[19]); 
}

function Initialize() {
    var border1 = document.getElementsByClassName("border1");
    var backToTop = document.getElementById("backToTop");

    document.addEventListener("scroll", ()=> {
        let offset = border1[0].getBoundingClientRect();
        
        if (offset.y < 0) {
            backToTop.classList.add("backVisible");
        }
        else {
            backToTop.classList.remove("backVisible");
        }
    })

    const span1 = document.getElementById("span1");
    const span2 = document.getElementById("span2");
    var state = 1;

    pacer();
    setInterval(pacer, 3000);

    function pacer() {
        span1.style.opacity = 0;
        span2.style.opacity = 0;
        setTimeout(change, 300);
        function change() {
        span1.innerHTML = changing1[state];
        span2.innerHTML = changing2[state];
        span1.style.opacity = 1;
        span2.style.opacity = 1;
        }
        state++;
        if (state == changing1.length) {
            state = 0;
        }
    }

    const types = document.getElementById("types");
    let position = 0;
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const progress = document.getElementsByClassName("progress");

    button1.addEventListener("click", moveLeft)
    button2.addEventListener("click", moveRight)

    function moveLeft() {
        types.style.transform = "translateX(" +(position+100)+ "%)"
        position += 100;
        if (position == 0) {
            this.style.opacity = 0;
            this.style.pointerEvents = "none"
        }
        button2.style.opacity = 1;
        button2.style.pointerEvents = "";
        for (let i = 0; i < progress.length; i++) {
            progress[i].style.backgroundColor = "transparent";
        }
        progress[position / (-100)].style.backgroundColor = "black";
    }
    function moveRight() {
        types.style.transform = "translateX(" +(position-100)+ "%)"
        position -= 100;
        if (position == (progress.length - 1) * -100) {
            this.style.opacity = 0;
            this.style.pointerEvents = "none";
        }
        button1.style.opacity = 1;
        button1.style.pointerEvents = "";
        for (let i = 0; i < progress.length; i++) {
            progress[i].style.backgroundColor = "transparent";
        }
        progress[position / (-100)].style.backgroundColor = "black";
    }
    
    const allType = document.getElementById("allType");
    const variant1 = document.getElementById("variant1");
    const variant2 = document.getElementById("variant2");
    const variant3 = document.getElementById("variant3");
    const variant4 = document.getElementById("variant4");
    const allInhabitant = document.getElementById("allInhabitant");
    const animalInhabitant = document.getElementById("animalInhabitant");
    const plantInhabitant = document.getElementById("plantInhabitant");
    const variant = [allType, variant1, variant2, variant3, variant4];
    const inhabitantType = [allInhabitant, animalInhabitant, plantInhabitant];
    var variants = "all";
    var inhabitant = "all";
    const cards = document.getElementsByClassName("card");  

    for (let i = 0; i < variant.length; i++) {
        variant[i].addEventListener("change", ()=>{
            for (let j = 0; j < variant.length; j++) {
                variant[j].checked = false;
            }
            variant[i].checked = true;
            variants = variant[i].value;
            visible();
            switch (variants) {  
                case "all": root.style.setProperty("--color", getComputedStyle(root).getPropertyValue("--all")); break;
                case "variant1": root.style.setProperty("--color", getComputedStyle(root).getPropertyValue("--variant1")); break;
                case "variant2":root.style.setProperty("--color", getComputedStyle(root).getPropertyValue("--variant2")); break;
                case "variant3": root.style.setProperty("--color", getComputedStyle(root).getPropertyValue("--variant3")); break;
                case "variant4": root.style.setProperty("--color", getComputedStyle(root).getPropertyValue("--variant4")); break;
                default: break;
            }
        })
    }
    
    for (let i = 0; i < inhabitantType.length; i++) {
        inhabitantType[i].addEventListener("change", ()=>{
            for (let j = 0; j < inhabitantType.length; j++) {
                inhabitantType[j].checked = false;
            }
            inhabitantType[i].checked = true;
            inhabitant = inhabitantType[i].value;
            visible();
        })
    }
    
    function visible() {
        for (let l = 0; l < cards.length; l++) {   
            cards[l].classList.remove("visible");
        }
        for (let k = 0; k < cards.length; k++) {
            if ((cards[k].classList.contains(variants) || variants == "all") && (cards[k].classList.contains(inhabitant) || inhabitant == "all")) {
                cards[k].classList.add("visible");
            }
        }
    }
}

for (let i = 0; i < document.getElementsByName("delivery").length; i++) {
    document.getElementsByName("delivery")[i].addEventListener("change", ()=> {
        if (document.getElementsByName("delivery")[0].checked) {
            document.getElementById("addressContainer").style.display = "none";
        }
        else {
            document.getElementById("addressContainer").style.display = "initial";
        }
    })
}

function gallery() {
    $(document).ready(function() {
        $('#images0').galleria({
        width: 600,
        height: 600,
        imagePan: false,
        fullscreenDoubleTap: false
    });
    });
    
    $(document).ready(function() {
        $('#images1').galleria({
        width: 600,
        height: 600,
        imagePan: false,
        fullscreenDoubleTap: false
    });
    });
    
    $(document).ready(function() {
        $('#images2').galleria({
        width: 600,
        height: 600,
        imagePan: false,
        fullscreenDoubleTap: false
    });
    });
}


function validate() {
    $("#subscribe").validate({
        rules: {
            firstName: "required",
            lastName: "required",
            email: {
                email: true,
                required: true
            },
            city: {
                required: "#mail:checked",
            },
            postalCode: {
                required: "#mail:checked",
                digits: true,
                maxlength: 4,
                minlength: 4
            },
            street: {
                required: "#mail:checked",

            },
            number: {
                required: "#mail:checked",
                digits: true
            },
            agree: "required"
        },
        messages: {
            firstName: "Required!",
            lastName: "Required!",
            email: {
                required: "Required!",
                email: "Please enter a valid e-mail!" 
            },
            city: "Required!",
            postalCode: {
                required: "Required!",
                digits: "Please enter a valid postal code!",
                minlength: "Please enter a valid postal code!",
                maxlength: "Please enter a valid postal code!"
            },
            street: "Required!",
            number: "Required!",
            agree: "Please agree to our Terms of Use!"
        },
    });

    const inputs = document.getElementsByTagName("input");
    const nameInputs = document.getElementById("nameContainer").getElementsByTagName("input");
    const addressInputs = document.getElementById("addressContainer").getElementsByTagName("input");
    const progressBar = document.getElementById("progressBar");
    subscribe = document.getElementById("subscribe");
    var correction = addressInputs.length;
    
    progressBar.max = nameInputs.length
    progressBar.value = 0;
    for (let i = 0; i < 2; i++) {
        inputs[i].addEventListener("change", ()=> {
            if (inputs[0].checked) {
                correction = addressInputs.length;
                progressBar.max = nameInputs.length;
                console.log(progressBar.max);
            }
            else {
                correction = 0;
                progressBar.max = nameInputs.length + addressInputs.length;
                console.log(progressBar.max);
            }
        })
    }

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("focusout", ()=> {
            var incorrect = 0;
            for (let j = 0; j < inputs.length; j++) {
            if (inputs[j].classList.contains("error") || inputs[j].value == '') {
                incorrect++;
                }
            }
            progressBar.value = progressBar.max - incorrect + correction;
        })
    }
}