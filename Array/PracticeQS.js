// For the given state start of an array.change its to final 
//from using splice.

// start = [ 'january','julay','march','august']
// final = [ 'julay' , 'june' , 'march' ,'august']


let Start = [ 'january ' , 'jualy', 'march' , 'august']
console.log(Start.splice(0,1));
console.log(Start);
console.log(Start.splice(0,1,"julay","june"));
console.log(Start);

// Return the index of the javascript from the given array. it was reversed

let Languages = ['C' , 'C++' ,'Javascript' ,'Pyhton' , 'Java' , 'C#', 'SQl']
console.log(Languages.reverse());