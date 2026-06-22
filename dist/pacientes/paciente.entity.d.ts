export declare enum Genero {
    MASCULINO = "masculino",
    FEMENINO = "femenino",
    OTRO = "otro"
}
export declare enum EstadoPaciente {
    ACTIVO = "activo",
    INACTIVO = "inactivo"
}
export declare class Paciente {
    id?: string;
    cedula?: string;
    nombre?: string;
    apellido?: string;
    fechaNacimiento?: Date;
    genero?: Genero;
    telefono?: string;
    email?: string;
    alergias?: string[];
    estado?: EstadoPaciente;
    createdAt?: Date;
    updatedAt?: Date;
}
