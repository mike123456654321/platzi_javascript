/*

let base = 5
let altura = 7

const triangleArea = (base, altura) => base*altura/2

console.log('el are del triangulo es de base ${base} y altura ${altura} es: ${triangleArea(base, altura)}')
*/

/*
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

*/

function platzom(str)
{
    let translation = str
    //si la palabra ternima en "ar" se le quita los dos caracteres
    if(str.toLowerCase().endsWith('ar'))
        {
            translation= str.slice(0, -2)
        }

    //si la palabra empieza con z se le añade "pe" al final
    if(str.toLowerCase().startsWith('z'))
       {
       translation +='pe'
       }

    //si la palabra tiene mas de 10 letras se debe partir a la mitad y unir con un "-"
    const length = translation.length
    if(length>=10)
       {
       const firstHalf = translation.slice(0,Math.round(length/2))
       const secontHalf = translation.slice(Math.round(length/2))
       translation = (firstHalf+"-"+secontHalf)
       }
    //si la palabra es un palindromo ninguna regla anterior no cuentan

    const reverse =(str) => str.split('').reverse().join('')

    function misnMay(str)
    {
        const leng = str.length
        let translation =''
        let capitalize = true
        for (let i = 0; i<length; i++)
            {
                const char = str.charAt(i)
                translation += capitalize ? char.toUpperCase() : char.toLowerCase()
                capitalize = !capitalize
            }
        return translation
    }
    if(str == reverse(str))
       {
       return misnMay(str)
       }

    return translation
}
console.log(platzom('progragar'))
console.log(platzom('zorro'))
console.log(platzom('zarpar'))
console.log(platzom('abecedario'))
console.log(platzom('sometemos'))



