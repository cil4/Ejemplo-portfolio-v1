

export class UsuarioClass {
    id: number;
    username: string;
    password: string;
    nombre: string;
    apellido: string;
    email: string;
    ocupacion: string;

    constructor(id:number, username:string, password:string, nombre:string, apellido:string, email:string, ocupacion:string){
        this.id=id;
        this.username=username;
        this.password=password;
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.ocupacion=ocupacion;
    }
    nombreCompleto(){
      return  this.nombre + '' + this.apellido;
    }

}
