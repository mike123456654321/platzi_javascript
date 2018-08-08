/*

let base = 5
let altura = 7

const triangleArea = (base, altura) => base*altura/2

console.log('el are del triangulo es de base ${base} y altura ${altura} es: ${triangleArea(base, altura)}')
*/

const starwars = "star wars: el despertar de las fuerzas"
const pgstarwars = 13

const name1 = "mike"
const age1 = 24

const name2 = "uriel"
const age2 = 11

function whatchstarwar(name, age, whitchadulto = false)
{
    if(age >= pgstarwars)
        {
            alert("${name} puede puede pasar a ver ${starwars}")
        }
    else if(whitchadulto)
        {
            alert ("${name} puede pasar por q esta acompañado de un adulto")
        }
    else
        {
            alert("${name} no tiene acceso a ver la pelicula ${starwars}, tienes ${age} años y necesitas tener ${pgstarwars}")

        }
}
whatchstarwar (name1, age1)
whatchstarwar (name2, age2, true)




