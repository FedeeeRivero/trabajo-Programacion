

import { Actores } from "./actores.js"
import { peliculas } from "./pelicula.js"
import { Premio } from "./premio.js"


export class Dbfalsa{
    peliculas=[new peliculas(1,"300","Accion",[1],[1,2]),new peliculas (2,"metegol","Deportes",[1],[]),new peliculas(3,"after","romance",[2,3],[3])]
    actores=[new Actores(1,"ricardo","darin","21/4/1968",[2,1]),new Actores(2,"guillermo","francella","09/19/1975",[3]),new Actores(3,"florecia", "peña","14/05/22",[3])]
    premios=[new Premio(1,"oscar","17/10/2021",1),new Premio (2,"martin fierro", "22/8/2003",1), new Premio(3,"globo de oro","04/11/2023", 3)]


    recuperarPelis() {
        let pelis = this.peliculas.map((peli) => {
            const peliCopia = { ...peli };
            peliCopia.actores = peli.actores.map((id) => {
                return this.actores.find(actor => actor.id == id);
            });
            peliCopia.premios = peli.premios.map((id) => {
                return this.premios.find(premio => premio.id == id);
            });
            return peliCopia;
        });
        return pelis;
    }


    recuperarActores() {
        let actores = this.actores.map((actor) => {
            const actorCopia = { ...actor };
            actorCopia.peliculas = actor.peliculas.map((id) => {
                return this.peliculas.find(peli => peli.id == id);
            });
            return actorCopia;
        });
        return actores;
    }
    recuperarPremios() {
        let premios = this.premios.map((premio) => {
            const premioCopia = { ...premio };
            premioCopia.pelicula = this.peliculas.filter(peli => peli.id == premio.id_pelicula);
            return premioCopia;
        });
        return premios;
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


    modificacionActor(body,id){
   const encontrado = this.actores.filter(actor=>actor.id==id)[0]
    encontrado.nombre=body.nombre
     encontrado.apellido=body.apellido
    encontrado.fecha_nacimiento=body.fecha_nacimiento
       
    return encontrado  
     
       
    }

        modificacionPeli(body,id){
        const encontrado = this.peliculas.filter(peli=>peli.id==id)[0]

        encontrado.titulo=body.titulo
        encontrado.genero=body.genero

        return encontrado
    }

    modificacionPremio(body,id){
        const encontrado = this.premios.filter(premio=>premio.id==id)[0]
        encontrado.premio = body.premio
        encontrado.fecha = body.fecha

        return encontrado
    }

}









