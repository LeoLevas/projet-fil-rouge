window.addEventListener('load', function()  {

    var searchBar = this.document.getElementById("SearchHeader")
    var dataDisplay = this.document.getElementById("dataDisplay")
    var dataSlide = this.document.getElementById("dataSlide")
    

    var linkBoxes = this.document.getElementsByClassName("headLinkBox")

    var wasSearchActive = false;

    let DataDivs = [];

    //for (i = 0; i < linkBoxes.length; i++){ linkBoxes[i].addEventListener("mouseover", exitSearch)}

    for (i = 0; i < linkBoxes.length; i++){ linkBoxes[i].onmouseover = function() {exitSearch()}}
    for (i = 0; i < linkBoxes.length; i++){ linkBoxes[i].onmouseout = function() {enterSearch()}}

    //get in and out of seach bar

    function exitSearch(){
        if(document.activeElement == searchBar){
            searchBar.blur();
            wasSearchActive = true
        }
    }
    function enterSearch(){
        if(wasSearchActive){
            searchBar.focus();
            wasSearchActive = false;
        }
    }


    for (i = 0; i < 16; i++){
        var newDiv = this.document.createElement("div");
        var text = this.document.createElement("p")
        var image = this.document.createElement("img")
        var newContent = this.document.createTextNode("data" + i)
        
        image.src = "resource/ubuntu.jpg"
        image.classList.add("imgBox")


        text.classList.add("dataTitle")
        text.appendChild(newContent);
        
        newDiv.appendChild(text)
        newDiv.appendChild(image)
        newDiv.classList.add("dataBox")
        newDiv.classList.add("dataBoxHover")
        dataDisplay.appendChild(newDiv)

        newDiv.setAttribute('id', 'data' + i)

        DataDivs.push(newDiv);
    }
    console.log(DataDivs)

    let dataSlidesArr = []
    let slideArr = []

    for(i = 0; i < 3; i++){
        dataSlidesArr.push(this.document.getElementById("data" + i))
    
        let slide = dataSlidesArr[i].cloneNode(true)
        slide.classList.add("slideImg")
        slide.setAttribute('id', 'slide' + i)
        slide.classList.remove("dataBoxHover")

        var caption = this.document.createElement("p")
        caption.classList.add("captionSlide")
        caption.textContent = ("caption data " + i)

        slide.appendChild(caption)

        slideArr.push(slide)
    
        dataSlide.appendChild(slide)
        if(i == 0){
            slideArr[0].classList.add("active")
        }
    }

    //slideshow


    //get les variables
    var indexSlide = 0;

    const suivant = document.querySelector('.next');
    const precedent = document.querySelector('.prev');
    const nbSlide = slideArr.length


    //#region allez a la slide suivante
    function slideSuivante(){
        slideArr[indexSlide].classList.remove('active');
    
        if(indexSlide < nbSlide - 1){
            indexSlide++;
        } else {
            indexSlide = 0;
        }
    
        slideArr[indexSlide].classList.add('active')
        
    }
    suivant.addEventListener('click', slideSuivante)
    
    //allez a la slide précedente
    function slidePrecedente(){
        slideArr[indexSlide].classList.remove('active');
    
        if(indexSlide > 0){
            indexSlide--;
        } else {
            indexSlide = nbSlide - 1;
        }
    
        slideArr[indexSlide].classList.add('active')        
    }
    precedent.addEventListener('click', slidePrecedente)
    //#endregion


})

function formOn() {
    document.getElementById("formOverlay").style.display = "block";
    document.getElementById("formDisplay").style.display = "block";

    elForm = document.getElementById("formDisplay");

    const logInDisplay = document.getElementById("logInId");

    const blockInput = logInDisplay.querySelectorAll(".logIn.block-cube.block-input");

    console.log(blockInput.length + "blockInput");
    for (x = 0; x < blockInput.length; x++){
        console.log(x);
        const logInInput = blockInput[x].querySelector("input");
        const bgTop = blockInput[x].querySelector(".bg-top");
        const bgRight = blockInput[x].querySelector(".bg-right");
        logInInput.addEventListener('focus', (event)=>{
            bgTop.style.scale = "1";
            bgRight.style.scale = "1";
        });
        logInInput.addEventListener('blur', (event) => {
            bgRight.style.scale = "0";
            bgTop.style.scale = "0";
        })        
        
        logInInput.addEventListener('mouseover', (event)=>{
             bgTop.style.scale = "1";
             bgRight.style.scale = "1";
        });        
        logInInput.addEventListener('mouseout', (event)=>{
            if (logInInput !== document.activeElement){
                bgTop.style.scale = "0";
                bgRight.style.scale = "0";
            }
       });
    };

}
  
function formOff() {
    document.getElementById("formOverlay").style.display = "none";
    document.getElementById("formDisplay").style.display = "none";
}


//