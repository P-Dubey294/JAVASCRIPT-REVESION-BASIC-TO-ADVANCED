let fruites  = [ " Apple" ,"Bnana" ,"Pinaaaple" , "Orange" ,"Graps" , 'Mangos'];
fruites.push("Chiku")
for (let i=0; i<fruites.length; i++){
    console.log(i , fruites[i]);
}

console.log( "Reversed the Fruites array ");

for (let i = fruites.length-1; i>=0; i--){
    console.log(i, fruites[i]);
}
