type Persona={
    nombre:String,
    edad:Number,
    vivo:Boolean
}

let maxi:Persona={
    nombre:"maxi",
    edad:32,
    vivo:true
}
let lista:Persona[]=[
{
        nombre:"maxi",
        edad:32,
        vivo:true
},
{
        nombre:"tomi",
        edad:32,
        vivo:true
}
]
 saludar(lista[1])

 function saludar(persona:Persona){
    console.log(persona.nombre)
 }



 //herencia//
 interface animal{
    nombre:String,
    edad:Number | String,
 }
 interface Perro extends animal{
    raza:String
 }
 interface Gato extends animal{
    color:String
 }
 let tina:Gato={
    nombre:"Tina",
    edad:2,
    color:"blanco, negro y anaranjado",
 }
  let catriel:Perro={
    nombre:"Catriel",
    edad:5,
    raza:"Kelpie Australiano",
 }