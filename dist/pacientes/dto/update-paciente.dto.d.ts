import { EstadoPaciente, Genero } from '../paciente.entity';
export declare class UpdatePacienteDto {
    nombre?: string;
    apellido?: string;
    genero?: Genero;
    telefono?: string;
    email?: string;
    alergias?: string[];
    estado?: EstadoPaciente;
}
