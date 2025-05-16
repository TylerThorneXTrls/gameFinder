# Game Finder 

## Project Scenories 

**Game finder** is a user freindly Website in order to find games based othe **user** prefrences

The aplication allows the user  to search from a preloaded data base that has real-time filters thems and Recent searches. the program is built to find games with the **user** prefrences such as age rating avalibilty and favorited. 

-[Javascript](#JavaScript)

-[HTML](#HTML)

-[Javascript](#CSS)





## JavaScript 
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

## HTML

### Heading structure
``` HTML

<header class="header">
        
        <h1>Game Finder</h1>
</header>

```
### Alt for img
 all the alt for the img are added in the js 

### from Structure
``` HTML
<div id="filters">
        <div>

            <label for="search" style="background-color: inherit; font-size: 24px;">🔎</label>
            <input id="search" type="text" name="search">
            <label>Age rating</label>
            <select id="ageFilter" >
                <option value="" selected  >All</option>
                <option value="E" >E</option>
                <option value="E+">E+</option>
                <option value="T">T</option>
                <option value="M">M</option>
            </select>
        </div>
        <div>
            <label>Online</label>>

            <select id="onlineFilter">
                <option value="" selected>All</option>
                <option value="true">Multiplayer</option>
                <option value="false">Single Player</option>
            
            </select>
        </div>
        <div>

        <label>Platform</label>

            <select name="Avalibilty" id="avalibiltyFilter">
                <option value="" selected >All</option>
                <option value="Xbox">Xbox</option>
                <option value="ps">PlayStation</option>
                <option value="steam">Steam</option>

            
            </select>
        </div>
        <div>
            <label>Favorited</label>
            <input type="checkbox" name="favorite" id="favoriteButton" value="checkboxValue">
        </div>

        <button onclick="displayItems()">filter</button>
        
    </div>
```
### Button and Input ELements

``` HTML
        <button onclick="displayItems()">filter</button>

        <button id="lightMode">Light Mode</button>

```

### Anchor Tags 
``` HTML
   <script src="script.js"></script>
       <div id="contactBar"><a href="https://github.com/TylerThorneXTrls"><img src="github.png"></a></div>



```
### Responsize Meta Laout
``` HTML
<div id="container">
       
    <div class=topContainer><button id="lightMode">Light Mode</button><h2 id="timer">0:00</h2></div>
    <header class="header">
        
        <h1>Game Finder</h1>
    </header>
<!--filter-->
    <div id="filters">
        <div>

            <label for="search" style="background-color: inherit; font-size: 24px;">🔎</label>
            <input id="search" type="text" name="search">
        </div>
        <div>
            <label>Age rating</label>
            <select id="ageFilter" >
                <option value="" selected  >All</option>
                <option value="E" >E</option>
                <option value="E+">E+</option>
                <option value="T">T</option>
                <option value="M">M</option>
            </select>
        </div>
        <div>
            <label>Online</label>>

            <select id="onlineFilter">
                <option value="" selected>All</option>
                <option value="true">Multiplayer</option>
                <option value="false">Single Player</option>
            
            </select>
        </div>
        <div>

        <label>Platform</label>

            <select name="Avalibilty" id="avalibiltyFilter">
                <option value="" selected >All</option>
                <option value="Xbox">Xbox</option>
                <option value="ps">PlayStation</option>
                <option value="steam">Steam</option>

            
            </select>
        </div>
        <div>
            <label>Favorited</label>
            <input type="checkbox" name="favorite" id="favoriteButton" value="checkboxValue">
        </div>

        <button onclick="displayItems()">filter</button>
        
    </div>
```
### responsive img and media
``` CSS
.displayGame {
    width: 20%;
    background: #4e5961;
    min-height: 300px;
    max-height: 400px;
    min-width: 150px;
    border-radius: 10px;
    height: auto;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition:  0.3s ease;

    
}



.displayGame > img {
    width: 100%;
    aspect-ratio: 1/1;
    background-color: aliceblue;

}
.displayGame:hover {
    transform: scale(1.1);
}



```
### Helpful Comments
``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="favicon-32x32.png">
</head>
<body>
<div id="container">
       <!--top area-->
    <div class=topContainer><button id="lightMode">Light Mode</button><h2 id="timer">0:00</h2></div>
    <header class="header"> 
        <h1>Game Finder</h1>
    </header>
  <!--filter-->
    <div id="filters">
        <div>
            <label for="search" style="background-color: inherit; font-size: 24px;">🔎</label>
            <input id="search" type="text" name="search">
        </div>
        <div>
            <label>Age rating</label>
            <select id="ageFilter">
                <option value="" selected>All</option>
                <option value="E" >E</option>
                <option value="E+">E+</option>
                <option value="T">T</option>
                <option value="M">M</option>
            </select>
        </div>
        <div>
            <label>Online</label>
            <select id="onlineFilter">
                <option value="" selected>All</option>
                <option value="true">Multiplayer</option>
                <option value="false">Single Player</option>
            </select>
        </div>

        
        <div>
            <label>Platform</label>
            <select name="Avalibilty" id="avalibiltyFilter">
                <option value="" selected >All</option>
                <option value="Xbox">Xbox</option>
                <option value="ps">PlayStation</option>
                <option value="steam">Steam</option>
            </select>
        </div>
        <div>
            <label>Favorited</label>
            <input type="checkbox" name="favorite" id="favoriteButton" value="checkboxValue">
        </div>
        

        <button onclick="displayItems()">filter</button><!-- display all the avilble games-->
        
    </div>
   <!--display for all the games-->
    <div id="display"></div>

</div>
    <!--contact bar-->
    <div id="contactBar"><a href="https://github.com/TylerThorneXTrls"><img src="github-removebg-preview.png" alt="Github link"></a></div>


   <script src="script.js"></script>
   




    
</body>
</html>
```
### consisten indentation and format
``` HTML
    <div id="filters">
        <div>
            <label for="search" style="background-color: inherit; font-size: 24px;">🔎</label>
            <input id="search" type="text" name="search">
        </div>
        <div>
            <label>Age rating</label>
            <select id="ageFilter">
                <option value="" selected>All</option>
                <option value="E" >E</option>
                <option value="E+">E+</option>
                <option value="T">T</option>
                <option value="M">M</option>
            </select>
        </div>
        <div>
            <label>Online</label>

            <select id="onlineFilter">
                <option value="" selected>All</option>
                <option value="true">Multiplayer</option>
                <option value="false">Single Player</option>
            
            </select>
        </div>
        <div>

        <label>Platform</label>

            <select name="Avalibilty" id="avalibiltyFilter">
                <option value="" selected >All</option>
                <option value="Xbox">Xbox</option>
                <option value="ps">PlayStation</option>
                <option value="steam">Steam</option>
            </select>
        </div>
        <div>
            <label>Favorited</label>
            <input type="checkbox" name="favorite" id="favoriteButton" value="checkboxValue">
        </div>

        <button onclick="displayItems()">filter</button>
        
    </div>

```
### Fav icon
``` HTML
    <link rel="icon" href="favicon-32x32.png">

```



## CSS 

### Global reset and box model
``` CSS
* {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


```
### use of css varible
``` CSS
:root{--maincolor: white}

```
### Organized Css Structure
```CSS
/* Filter area*/
 
#search {
    width: 95%;
    height: 30px;
    color: white;
    background-color: rgb(67, 103, 12);
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
}
label {
    font-size: 16px;
    margin-right: 10px;
    color: #f6f6f6;

}
#filters {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-bottom: 20px;
}

#filters > div {
    display: flex;
    align-items: center;
    gap: 10px;
}


button {
    background-color: rgb(67, 103, 12);
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    
}
select {
    color: white;
    background-color: rgb(67, 103, 12);
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px;
    margin: 5px 0;

}

```
### Reponsive Design
``` CSS

@media screen and  (max-width: 630px){
    #filters{
        flex-direction: column;
    }
    
    
}
```
### Typographic Style
```CSS
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;



```
### Color Scheme and Contrast
```CSS
.displayGameWhite > button{
    width: 100%;
    height: fit-content;
    font-size: 24px;
    background: #0095ff;
    color: rgb(255, 255, 255);
    border: none;
    padding: 10px;
    cursor: pointer;
    transition:  0.3s ease;

}
```
### Flex Box 
``` CSS
#filters {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-bottom: 20px;
}
```
### Button and Input Style
``` CSS
.displayGame > button:hover {
    background: #4e5961;
}
```
### componet resuablity
``` CSS
.displayGame {
    width: 20%;
    background: #4e5961;
    max-width: 400px;
    min-height: 310px;
    min-width: 190px;
    border-radius: 10px;
    height: auto;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition:  0.3s ease;

    
}
```
### CSS Transistio
``` CSS
.displayGame:hover {
    transform: scale(1.1);
    transition:  0.3s ease;

}

```
### Hover Focus Effects
``` CSS
.displayGame:hover {
    transform: scale(1.1);
}
```
### layout container
``` CSS
#container {
    background: linear-gradient(90deg, rgba(78, 89, 97, 1) 7%, rgba(78, 89, 94, 1) 11%, rgba(80, 89, 94, 1) 17%, rgba(74, 86, 89, 1) 23%);
    min-height: 100vh;

    transition:  0.3s ease;

}
#display {
    background: #2d2d30;
    min-height: 83vh;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    justify-content: center;
}
```
### Layering with Z-Index
``` CSS
.WelcomeMessage{
    display: block;
    z-index: 10000000;
    position: fixed;
    top: 200px;
    width: 100%;
    left: 0px;
    height: 300px;

    background-color: gray;
    border: black solid 2px;
    display: flex;
    flex-direction: column;
}
.welcomeMessageWhite{
    display: block;
    z-index: 10000000;
    position: fixed;
    top: 200px;
    width: 100%;
    left: 0px;
    height: 300px;
    background-color: rgb(255, 255, 255);
    border: black solid 2px;
    display: flex;
    flex-direction: column;

}
```
### shadows and boxes
``` CSS
.displayGame {
    width: 20%;
    background: #4e5961;
    max-width: 400px;
    min-height: 310px;
    min-width: 190px;
    border-radius: 10px;
    height: auto;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition:  0.3s ease;

    
}
```
### custom scroll bar
``` CSS
  * {
    scrollbar-width: none;
  }


  *::-webkit-scrollbar {
    width: 0px;
  }

```
### Theme Customizaiton
#### all done through js

### Nameing Convetion
``` CSS
displayGame {
    width: 20%;
    background: #4e5961;
    max-width: 400px;
    min-height: 310px;
    min-width: 190px;
    border-radius: 10px;
    height: auto;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition:  0.3s ease;

    
}
``` 

### cleanliness  and Commenting
```

```




 



















