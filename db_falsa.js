import { act } from "react"
import { Actores } from "./actores.js"
import { peliculas } from "./pelicula.js"
import { Premio } from "./premio.js"

export class Dbfalsa{
    peliculas=[new peliculas(1,"300","Accion",[1],[1,2]),new peliculas (2,"metegol","Deportes",[1],[]),new peliculas(3,"after","romance",[2,3],[3])]
    actores=[new Actores(1,"ricardo","darin","21/4/1968",[2,1]),new Actores(2,"guillermo","francella","09/19/1975",[3]),new Actores(3,"florecia", "peña","14/05/22",[3])]
    premios=[new Premio(1,"oscar","17/10/2021",1),new Premio (2,"martin fierro", "22/8/2003",1), new Premio(3,"globo de oro","04/11/2023", 3)]

    recuperarPelis() {
        let pelis=this.peliculas
        pelis=pelis.map((peli)=>{
            peli.actores=peli.actores.map((id)=>{
                return this.actores.find(actor=> actor.id==id)
            })
            peli.premios=peli.premios.map((id)=>{
                return this.premios.find(premio => premio.id==id)
            })
            return peli
        })
        return pelis
    }

    recuperarActores() {
        let actores=this.actores
        actores=actores.map((actor)=>{
            actor.peliculas=actor.peliculas.map((id)=>{
                return this.peliculas.find(peli => peli.id==id)
            })
            return actor
        })
        return actores
    }
        recuperarPremios() {
        let premios=this.premios
        premios=premios.map((premio)=>{
           premio.pelicula=this.peliculas.filter(peli=>peli.id==premio.id_pelicula) 
           
            return premio
        })
        return premios
    }

    recuperarPremio(id){
        return this.premios.filter(premio=>premio.id==id)
    }

     recuperarPeli(id){
        return this.peliculas.filter(peli=>peli.id==id)
    }

    recuperarActor(id){
        return this.actores.filter(actor=>actor.id==id)
    }

    borrarActor(id){
        this.actores=this.actores.filter(actor=>actor.id!=id)
        return "actor borrado"
    }

     borrarPremio(id){
        this.premios=this.premios.filter(premio=>premio.id!=id)
        return "premio borrado"
    }

    borrarPeli(id){
        this.peliculas=this.peliculas.filter(peli=>peli.id!=id)
        return "peliculas borrado"
    }

    crearPeli(datos){
        
        const peli= new peliculas (this.peliculas.length+1, datos.titulo,datos.genero,datos.actores,datos.premios)
        this.peliculas.push(peli)
        console.log(datos)
        return peli
        
    }

    crearActor(datos){
         const actor= new Actores (this.actores.length+1,datos.nombre,datos.apellido,datos.fecha_nacimiento,datos.peliculas)
        this.actores.push(actor)

        return actor
        

    }

    crearPremio(datos){
         const premio= new Premio (this.premios.length+1,datos.nombre,datos.fecha,datos.id_peliculas)
        this.premios.push(premio)

        return premio
    }






} 