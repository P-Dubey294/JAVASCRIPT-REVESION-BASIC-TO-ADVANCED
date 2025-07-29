let Fruites = [ "apple" , "banana" ,"pinapple" , "graps" , "mango" , "orange"];
for (fruit of Fruites){
    console.log(fruit);
}

let character = "Pratham Dubey"
for (ch of character){
    console.log(ch);
}

// Nested for of loop 

let heros = [ 
     [ " spiderman" , "ironman" , "thor"],
     [ "superman" , "wonderman" , "fleh"]
]
for (list of heros){
    for(hero of list)
        console.log( hero[i] , hero);
}