// Image Slider Logic

const track = document.querySelector(".imageTrack")
const slides = document.querySelectorAll(".li")
const imageList = document.querySelectorAll(".image")
const nextButton = document.querySelector(".nextButton")
const prevButton = document.querySelector(".prevButton")
const slidesArray = Array.from(slides)
const navButtons = document.querySelectorAll(".navButton")
const navButtonsArray = Array.from(navButtons)



nextButton.addEventListener("click", (e) => {
        let currentSlide = document.querySelector(".currentSlide")
        let nextSlide = currentSlide.nextElementSibling
    if (nextSlide != null) 
    {
        
        

        let amountToMove = nextSlide.getBoundingClientRect().width
        track.style.transform = `translateX(-${amountToMove * slidesArray.indexOf(nextSlide)}px)`
        currentSlide.classList.remove("currentSlide")
        nextSlide.classList.add("currentSlide")

        let currentDot = navButtonsArray[slidesArray.indexOf(currentSlide)]
        currentDot.classList.remove("currentSlide")
    
        currentSlide = nextSlide
        nextSlide = currentSlide.nextElementSibling
       
        currentDot = navButtonsArray[slidesArray.indexOf(currentSlide)]
        currentDot.classList.add("currentSlide")
        
        
    } else
    {
        let amountToMove = currentSlide.getBoundingClientRect().width
        track.style.transform = `translateX(0px)`
        let currentDot = navButtonsArray[slidesArray.indexOf(currentSlide)]
        currentDot.classList.remove("currentSlide")
        currentSlide.classList.remove("currentSlide")
        slidesArray[0].classList.add("currentSlide")
        currentSlide = slidesArray[0]
        currentDot = navButtonsArray[slidesArray.indexOf(currentSlide)]
        currentDot.classList.add("currentSlide")

        
    }

    


})

navButtonsArray.forEach(button => {
    let index = navButtonsArray.indexOf(button)
    button.addEventListener("click", (e) => {
        let currentSlide = document.querySelector(".currentSlide")
        let nextSlide = slidesArray[index]
        if (nextSlide != null) 
    {
        
        

        let amountToMove = nextSlide.getBoundingClientRect().width
        track.style.transform = `translateX(-${amountToMove * slidesArray.indexOf(nextSlide)}px)`
        currentSlide.classList.remove("currentSlide")
        nextSlide.classList.add("currentSlide")

        let currentDot = navButtonsArray[slidesArray.indexOf(currentSlide)]
        currentDot.classList.remove("currentSlide")
    
        currentSlide = nextSlide
        nextSlide = currentSlide.nextElementSibling
       
        currentDot = navButtonsArray[slidesArray.indexOf(currentSlide)]
        currentDot.classList.add("currentSlide")
        
        
    } else
    {
        let amountToMove = currentSlide.getBoundingClientRect().width
        track.style.transform = `translateX(0px)`
        let currentDot = navButtonsArray[slidesArray.indexOf(currentSlide)]
        currentDot.classList.remove("currentSlide")
        currentSlide.classList.remove("currentSlide")
        slidesArray[0].classList.add("currentSlide")
        currentSlide = slidesArray[0]
        currentDot = navButtonsArray[slidesArray.indexOf(currentSlide)]
        currentDot.classList.add("currentSlide")

        
    }

    })
})


