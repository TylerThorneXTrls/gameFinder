let lightMode = false;
let history =[]








let games = [
{
name: "Fortnite",
Xbox: true,
Playstation: true,
Steam: true,
mutiplayer: true,
singlePlayer: true,
age: "E+",
img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa2qzgQM2rTsabam2u4_opnYOWw05dAzb06g&s",
favorite: false
},
{
name: "Halo",
Xbox: true,
Playstation: false,
Steam: false,
mutiplayer: true,
singlePlayer: true,
age: "E+",
img: "halo.png",
favorite: false
},
{
name: "God of War (2005)",
Xbox: false,
Playstation: true,
Steam: false,
mutiplayer: false,
singlePlayer: true,
age: "M",
img: "data:image/jpeg;base64,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",
favorite: false
},
{
name: "Red Dead Redemption 2",
Xbox: true,
Playstation: true,
Steam: true,
mutiplayer: true,
singlePlayer: true,
age: "M",
img: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
favorite: false
},
{
name: "Minecraft",
Xbox: true,
Playstation: true,
Steam: true,
mutiplayer: true,
singlePlayer: true,
age: "E",
img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZL3CLPg5qI9Wd19bRJKCrpjPWIbmIVlc9Qn31TL4O38wCVSkxIabgU9cZ-DeH9pqFlg&usqp=CAU",
favorite: false
},
{
name: "Half Life 2",
Xbox: false,
Playstation: false,
Steam: true,
mutiplayer: false,
singlePlayer: true,
age: "E",
img: "https://upload.wikimedia.org/wikipedia/en/2/25/Half-Life_2_cover.jpg",
favorite: false
},
{
name: "BloodBorn",
Xbox: false,
Playstation: true,
Steam: false,
mutiplayer: false,
singlePlayer: true,
age: "M",
img: "bloodborn.png",
favorite: false
},
{
name: "Metal Gear Solid 3",
Xbox: true,
Playstation: true,
Steam: true,
mutiplayer: false,
singlePlayer: true,
age: "M",
img: "metalgear3.png",
favorite: false
},
{
name: "Resident Evil 4",
Xbox: true,
Playstation: true,
Steam: true,
mutiplayer: false,
singlePlayer: true,
age: "E",
img: "residentevil4.png",
favorite: false
},
{
name: "The Last of Us",
Xbox: false,
Playstation: true,
Steam: true,
mutiplayer: false,
singlePlayer: true,
age: "M",
img: "thelastofus.png",
favorite: false
},
{
name: "BioShock",
Xbox: true,
Playstation: true,
Steam: true,
mutiplayer: false,
singlePlayer: true,
age: "T",
img: "https://upload.wikimedia.org/wikipedia/en/6/6d/BioShock_cover.jpg",
favorite: false
},
{
name: "Mass Effect 2",
Xbox: true,
Playstation: true,
Steam: true,
mutiplayer: false,
singlePlayer: true,
age: "M",
img: "https://upload.wikimedia.org/wikipedia/en/0/05/MassEffect2_cover.PNG",
favorite: false
},
{
name: "Final Fantasy VII",
Xbox: true,
Playstation: true,
Steam: true,
mutiplayer: false,
singlePlayer: true,
age: "T",
img: "finalfantasy7.png",
favorite: false
},
{
name: "Disco Elysium",
Xbox: true,
Playstation: true,
Steam: false,
mutiplayer: false,
singlePlayer: true,
age: "M",
img: "disco.png",
favorite: false
},
{
name: "Fallout New Vegas",
Xbox: true,
Playstation: true,
Steam: true,
mutiplayer: false,
singlePlayer: true,
age: "M",
img: "fallNewVegas.png",
favorite: false
},
{
name: "Rocket League",
Xbox: true,
Playstation: true,
Steam: true,
mutiplayer: true,
singlePlayer: false,
age: "E+",
img: "rocket.png",
favorite: false
},
{
    name: "BatmanArkham City",
    Xbox: true,
    Playstation: true,
    Steam: true,
    mutiplayer: false,
    singlePlayer: true,
    age: "T",
    img: "batArkCity.png",
    favorite: false
},
{
    name: "Hollow Knight",
    Xbox: true,
    Playstation: true,
    Steam: true,
    mutiplayer: false,
    singlePlayer: true,
    age: "E+",
    img: "hollow.png",
    favorite: false
},
{
    name: "Diablo 2",
    Xbox: false,
    Playstation: false,
    Steam: true,
    mutiplayer: true,
    singlePlayer: true,
    age: "M",
    img: "diablo2.png",
    favorite: false
},
{
    name: "The Elder Scrolls V: Skyrim",
    Xbox: true,
    Playstation: true,
    Steam: true,
    mutiplayer: false,
    singlePlayer: true,
    age: "M",
    img: "skyrim.png",
    favorite: false
},

];
window.addEventListener('load',()=>{
    loadData()
    startTimer()
    welcomeBack()
    displayItems()

})



const autoSearch = document.getElementById('search')
autoSearch.addEventListener('input',()=>{
    displayItems()
})


function welcomeBack(){
    if(document.cookie){
        displayWelcome("Welcomeback")
        console.log("welcomeback")
    }
    else{
        displayWelcome("Welcome")
        console.log("welcome")
    }
    makeCookie("welcomeBack" ,3, true )
    
    

}
addEventListener('keydown',(key)=>{
    console.log(key.key)
    console.log("")
    if(key.key ==='Enter'){
    addHistory()
}
function addHistory(){
    const search = document.getElementById('search').value
    console.log(search)
    if(search.trim() !== ""){
        history.unshift(search)
        console.log("addHIstory"+search)

    console.log(history)
    if(history.length > 1){
        history.pop()

    }
    saveData()
    displayHistory()

}   
}


})
function displayHistory(){
    const search = document.getElementById('search')

    const historyDisplay =document.getElementById('searchHistory')
    historyDisplay.innerHTML =""

    history.forEach((history)=>{
        item =document.createElement('li')
        item.textContent =  history
        item.addEventListener('click',()=>{
            search.value = history
            displayItems()

        })
        historyDisplay.appendChild(item)

    }
    )

    

} 
function displayWelcome(message){

    const container =document.getElementById('container')
    const welcomeback = document.createElement('div')
    const title = document.createElement('h1')
    const button = document.createElement('button')
    button.textContent ='X'
    button.addEventListener('click',()=>{
        welcomeback.style.display = 'none';

    })
    welcomeback.className = !lightMode? "WelcomeMessage": "welcomeMessageWhite" // if light mode is false it mkaes the class normal and when light mode it active it chages the class name to welcome backmessagewhite
    title.textContent = message
    welcomeback.appendChild(title)
    welcomeback.appendChild(button)

    container.appendChild(welcomeback)
    console.log(container)



}

function makeCookie(name,days,value){
    const makeDate = new Date( Date.now() +(1000*60*60*24*days))
    console.log(makeDate)
    document.cookie = `${name}=${value};expires=${makeDate.toUTCString()} UTC; path=/`
    console.log(`${name}=${value};expires=${makeDate} UTC; path=/`);
    
    
    



}





function displayItems(){
    event.preventDefault();


    FilteredBooks = filter() //calls the funciton filter and is returned the value from the selected fitlers\

    


  


    

    const display = document.getElementById('display') // declare the display in wich all the games will be added into
    display.innerHTML =""
    
        FilteredBooks.forEach( (game) =>{ // a for each loop inorder to add div element containng the game title game name and a img  into the display
            const  gameDipslay = document.createElement('div') //
            gameDipslay.className = !lightMode ? "displayGame":"displayGameWhite"
            
            const  title = document.createElement('h2')
            title.className = "GameTitle"
            title.innerHTML = game.name

            const img = document.createElement('img')
            img.src = game.img
            img.alt = game.name
            const Favorite = document.createElement('button')
            Favorite.textContent = "💚" // only exist so when you rreload the website it stay updated 


            

            if(!game.favorite)
            {Favorite.textContent = "🤍"}

            Favorite.addEventListener('click',()=>{favorite(game,Favorite)})
            

            gameDipslay.appendChild(title)
            gameDipslay.appendChild(img)
            gameDipslay.appendChild(Favorite)


            display.appendChild(gameDipslay)
        })
            
        }


            
            
        
    
    function filter(){ // called in the displaygamefuntion 
        const age = document.getElementById('ageFilter').value
        const online = document.getElementById('onlineFilter').value
        const avalibilty = document.getElementById('avalibiltyFilter').value
        const search = document.getElementById('search').value.toLowerCase()
        const toggleFavorite =document.getElementById('favoriteButton')

        console.log(toggleFavorite.checked)


        if(age===""&&online===""&&avalibilty===""&&search===""&&!toggleFavorite.checked){
        console.log('clear') // check if the user has put in any input 

        return games
    }

        else{  
            let filtered =games
            if(age!=""){
                filtered =filtered.filter( (game) =>{
                    if(game.age === age){
                        console.log(game.age)
                        console.log(age)
                        return game
                    }
                })
            }
            if(online!=""){
                filtered =filtered.filter( (game) =>{
                    console.log(game.mutiplayer)

                    
                    if(game.mutiplayer&&online ==="true"){
                        console.log(game.age)
                        console.log(age)
                        return game
                    }

                    if(game.singlePlayer&&online ==="false"){
                        console.log(game.age)
                        console.log(age)
                        return game
                    }
                })
            }
            if(avalibilty!=""){
                filtered =filtered.filter( (game) =>{
                    if(game.Xbox&&avalibilty === "Xbox"){
                        console.log(game.age)
                        console.log(age)
                        return game
                    }
                    if(game.Playstation&&avalibilty === "ps"){
                        console.log(game.age)
                        console.log(age)
                        return game
                    }
                    if(game.Steam&&avalibilty === "steam"){
                        console.log(game.age)
                        console.log(age)
                        return game
                    }
                })
            }
            
            if(search.search(/\w+/)){ // check if the seach bar has anynone character  other than white spaces

            }
            else{
                
                filtered = filtered.filter((game)=>{
                    
                    if(game.name.toLocaleLowerCase().includes(search)){
                        
                        return game
                        
                    }
                })
            }
            if(toggleFavorite.checked){
            console.log("favorited")
            filtered = filtered.filter((game)=>{
                    
                    if(game.favorite){
                        
                        return game
                        
                    }
                })

            }
            
            console.log(filtered)
            return filtered





        }
        
        
    }
    function favorite(game,text){
        game.favorite =  game.favorite ? false : true // swap between favorite being true or false 
        saveData()
        text.innerText = game.favorite ? "💚": "🤍" // changes the haert to a differnt color 
        
        console.log(game)




    }
    function saveData(){ // saves the games and the them prefrenc
        localStorage.setItem('saveGames',JSON.stringify(games))
        console.log("data saved")
        localStorage.setItem('saveTheme',lightMode)
        localStorage.setItem('recentSearch',JSON.stringify(history))
        console.log(JSON.parse(localStorage.getItem('recentSearch')))

    }
    
    function loadData(){ // load the data 
        if(localStorage.getItem('saveGames')){
            games = JSON.parse(localStorage.getItem('saveGames'))
            console.log("data Loaded")




        }
        if(localStorage.getItem('saveTheme')){
            lightMode= JSON.parse(localStorage.getItem('saveTheme'))
            changeColor()
            console.log("colorChanged")
            console.log(lightMode+"lightmode")
        }
        if(JSON.parse(localStorage.getItem('recentSearch'))){
        console.log("history"+history)
        history = JSON.parse(localStorage.getItem('recentSearch'))
        console.log(history)
        
        }
        displayHistory()


        
        
        

    }
    function startTimer(){ // the itmer on the top left hand of the website 
        var timer = 0 

        setInterval(()=>{
            timer++
            const minutes = Math.floor(timer/60)
            let seconds = Math.floor(timer%60)
            if(seconds <10){ // to add a zero so the display of the time looks nicer
                seconds =`0${seconds}`
            }

            document.getElementById('timer').innerText = `${minutes}:${seconds}`


        },1000)



    }
    const lightModeButton = document.getElementById('lightMode')
    lightModeButton.addEventListener('click',lightmode)
    function lightmode(){ // changes wether the light mode is true or false than changes the color diplay with the new value
        lightMode = lightMode ? false:true
        console.log(lightMode)
        changeColor()
        saveData()
        
         
       
        };
        function changeColor(){ lightModeButton.innerText =lightMode ? "DarkMode":"LightMode" // changes the color based on wether ight mode is true or not 
        document.getElementById('contactBar').style.background =lightMode ? "#4264c9" : "#404241";
        document.getElementById('timer').style.backgroundColor = lightMode ? " #0095ff":"rgb(67, 103, 12)"
        console.log(document.getElementsByTagName("label"))
        
        document.getElementById('container').style.background = lightMode ? "#0095ff":"linear-gradient(90deg, rgba(78, 89, 97, 1) 7%, rgba(78, 89, 94, 1) 11%, rgba(80, 89, 94, 1) 17%, rgba(74, 86, 89, 1) 23%)"
        document.getElementById('display').style.backgroundColor = lightMode ? " white":"#2d2d30"
        Array.from(document.getElementsByTagName("select")).forEach(select => {
            select.style.background = lightMode ? "white" : " rgb(67, 103, 12)";  
            select.style.color = lightMode ? "black" : "white";  

        });
        document.getElementById('search').style.color = lightMode ? "black" : "white";
        
        document.getElementById('search').style.background = lightMode ? "white" : " rgb(67, 103, 12)";
        const buttons =document.getElementsByTagName("button")
        Array.from(buttons).forEach((button) => {
            button.style.background = lightMode ? "white" : " rgb(67, 103, 12)"; 
            button.style.color = lightMode ? "black" : "white"; 
       
})


    
        
       

        displayItems()



        
    }
