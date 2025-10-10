export class Actores {
    nombre
    apellido
    fecha_nacimiento
    peliculas=[]
    
    constructor(nombre, apellido,fecha_nacimiento,peliculas){
        this.nombre = nombre
        this.apellido  = apellido
        this.fecha_nacimiento = fecha_nacimiento
        this.peliculas = peliculas
    }
}