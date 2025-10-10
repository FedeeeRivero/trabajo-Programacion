export class Actores {
    id
    nombre
    apellido
    fecha_nacimiento
    peliculas=[]
    
    constructor(id,nombre, apellido,fecha_nacimiento,peliculas){
        this.id=id
        this.nombre = nombre
        this.apellido  = apellido
        this.fecha_nacimiento = fecha_nacimiento
        this.peliculas = peliculas
    }
}