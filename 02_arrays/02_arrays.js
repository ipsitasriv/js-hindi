const marvel_heroes=['thor','ironman','spiderman']
const dc_heros=['superwoman','flash','batman']
marvel_heroes.push(dc_heros)//adds lsit as one element
marvel_heroes.concat(dc_heros)//adds two arrays and returns new array
al_new_hero=[...marvel_heroes,...dc_heros]
const another_array=[1,2,3,[4,5,6],7,[6,7,5,7,[7,8,9]]]
const another_new_array=another_array.flat(Infinity)//removes inetrnal dimensions 
Array.isArray()//is array or not
Array.from("hdfjhsdkfhjds")//creates array out of word,if dictionary present we tell what to use
let score1=100
Array.of(score)//returns array of elemnts 

