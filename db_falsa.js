import { Actores } from "./actores"
import { peliculas } from "./pelicula"
import { Premio } from "./premio"

export class Dbfalsa{
    peliculas=[new peliculas(1,"300","Accion",[1],[1,2]),new peliculas (2,"metegol","Deportes",[1],[]),new peliculas(3,"after","romance",[2,3],[3])]
    actores=[new Actores(1,"ricardo","darin","21/4/1968",[2,1]),new Actores(2,"guillermo","francella","09/19/1975",[3]),new Actores(3,"florecia", "peña","14/05/22",[3])
    ]
    premios=[new Premio(1,"oscar","17/10/2021",1),new Premio (2,"martin fierro", "22/8/2003",1), new Premio(3,"globo de oro","04/11/2023", 3)]
}