import { DienteDto } from './diente.dto';
export declare class CreateOdontogramaDto {
    pacienteId: string;
    fechaEvaluacion: Date;
    odontologoId: string;
    dientes: DienteDto[];
    estado?: string;
    observacionesGenerales?: string;
}
