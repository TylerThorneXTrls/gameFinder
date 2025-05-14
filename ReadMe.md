# Game Finder 

## Project Scenories 

**Game finder** is a user freindly Website in order to find games based othe **user** prefrences

The aplication allows the user  to search from a preloaded data base that has real-time filters thems and Recent searches. the program is built to find games with the **user** prefrences such as age rating avalibilty and favorited. 
## Java Script requirments
### Varible  Nameing and Identation : ####let lightMode = false;
### function nameing and modularity
 ```javascript
 

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
```
array and object usage 
``` javascript
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
img: "
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
            

```
## array method 
``` javascript 
if(age!=""){
        filtered =filtered.filter( (game) =>{
            if(game.age === age)
            {
                console.log(game.age)
                console.log(age)
                return game
            }
        })
    }

```
## loop and iteration
``` javascript
 FilteredBooks.forEach( (game) =>{ // a for each loop inorder to add div element containng the game title game name and a img  into the display
            const  gameDipslay = document.createElement('div') //
            gameDipslay.className = !lightMode ? "displayGame":"displayGameWhite"
            
            const  title = document.createElement('h2')
            title.className = "GameTitle"
            title.innerHTML = game.name

            const img = document.createElement('img')
            img.src = game.img
            const Favorite = document.createElement('button')
            Favorite.textContent = "💚"

            

            if(!game.favorite)
            {Favorite.textContent = "🤍"}

            Favorite.addEventListener('click',()=>{favorite(game,Favorite)})
            

            gameDipslay.appendChild(title)
            gameDipslay.appendChild(img)
            gameDipslay.appendChild(Favorite)


            display.appendChild(gameDipslay)
        })

```

## json handeling
``` javascript 
function saveData(){
        localStorage.setItem('saveGames',JSON.stringify(games))
        console.log("data saved")
        localStorage.setItem('saveTheme',lightMode)

    }
```
## web storage retrieiving
```javascript
    function loadData(){
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
    }
```
## Cookies with expiraiton date
``` javascript
function makeCookie(name,days,value){
    const makeDate = new Date( Date.now() +(1000*60*60*24*days))
    console.log(makeDate)
    document.cookie = `${name}=${value};expires=${makeDate.toUTCString()} UTC; path=/`
    console.log(`${name}=${value};expires=${makeDate} UTC; path=/`);
    
    
    



}
```
## Dom Manipulaiton
``` javascript
function displayWelcome(message){

    const container =document.getElementById('container')
    const welcomeback = document.createElement('div')
    const title = document.createElement('h1')
    const button = document.createElement('button')
    button.textContent ='X'
    button.addEventListener('click',()=>{
        welcomeback.style.display = 'none';

    })
    welcomeback.className = !lightMode? "WelcomeMessage": "welcomeMessageWhite"
    title.textContent = message
    welcomeback.appendChild(title)
    welcomeback.appendChild(button)

    container.appendChild(welcomeback)
    console.log(container)



}

```
## Css Manipulaiton
``` javascript
        function changeColor(){ lightModeButton.innerText =lightMode ? "DarkMode":"LightMode"
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

```

## theme prefrence 
``` javascript
        localStorage.setItem('saveTheme',lightMode)


```
## helpful comments
``` javascript
welcomeback.className = !lightMode? "WelcomeMessage": "welcomeMessageWhite" // if light mode is false it mkaes the class normal and when light mode it active it chages the class name to welcome backmessagewhite
```

## error handeling and debugging
``` javascript
   function loadData(){
        if(localStorage.getItem('saveGames')){
            games = JSON.parse(localStorage.getItem('saveGames'))
            console.log("data Loaded")




        }}

```
## regex validaiton
``` javascript
if(search.search(/\w+/)){

            }
            else{
                
                filtered = filtered.filter((game)=>{
                    
                    if(game.name.toLocaleLowerCase().includes(search)){
                        addHistory(search)
                        
                        return game
                        
                    }
                })
            }

```
## TImer and date objsects
``` javascript
const makeDate = new Date( Date.now() +(1000*60*60*24*days))
```
## Mathstring Methods

``` javascript
const minutes = Math.floor(timer/60)
const seconds = Math.floor(timer%60)


``` 

Event Listners
``` javascript
autoSearch.addEventListener('input',()=>{
    displayItems()
})
```
















