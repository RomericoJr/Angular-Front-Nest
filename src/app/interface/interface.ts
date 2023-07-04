export interface rdata {

    name: string
    apellidos: string
    email: string
    status: boolean,
    token: string
}


export interface login {
  password : string;
  email : string;
}


export interface register {

  name : string;
  apellido : string;
  email : string;
  password : string;
  sexo : string;
  edad : string;
}


export interface updateUser {
  name: string;
  apellidos: string;
  password:string;
  sexo:string;
  edad:number;
}


// *interface de tasks

export interface createTask {
  title: string;
  description: string;
  importants: number;
  userId : number;
}

export interface updateTask {
  title: string;
  description: string;
}


export interface TaskReceived {
  id: number,
  title: string,
  description: string,
  importants: number,
  status: boolean }
