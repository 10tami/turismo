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