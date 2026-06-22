import { Genero } from '../paciente.entity';
export declare class CreatePacienteDto {
    cedula?: string;
    nombre?: string;
    apellido?: string;
    fechaNacimiento?: Date;
    genero?: Genero;
    telefono?: string;
    email?: string;
    alergias?: string[];
}
