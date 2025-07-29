let heroes = [["ironman" , "Spiderman"  , "Thor"] , ["Superman" , "Wonderman" , "Flash"]]

for(let i=0; i<heroes.length; i++){
    console.log(i, heroes[i], heroes[i].length);
    for( let j = 0; j<heroes[i].length; j++)
        console.log(`j=${j}, ${heroes[i][j]}`);   
}

let Student = [ ["Aman" ,55] , ["Akash" , 67] , ["Virat" , 69]];
for(let i = 0; i<Student.length; i++){
    console.log(`student info ${i+1}`);
    for(let j = 0; j<Student[i].length; j++){
        console.log(Student[i][j]);
    }

}

let color = [
     [ "red", "blue" , "sky"] , 
     ["orange", "green" , "yellow"],
     ["magenta" , "safraon" , "darkblue"]
]

// for(let i=0; i<color.length; i++){
//     console.log(` color info ${i+1}`);
//     for(let j=0; j<color[i].length; j++){
//         console.log(color[i][j]);
//     }
// }

console.log(" Reversed the color info");

for(let i = color.length-1; i>=0; i--){
    console.log(` color info ${i+1}`);
    for(let j=0; j<color[i].length; j++){
        console.log(color[i][j]);
    }
}