import { Model } from 'mongoose';
import { Odontograma } from './schemas/odontograma.schema';
import { CreateOdontogramaDto } from './dto/create-odontograma.dto';
import { UpdateDienteDto } from './dto/update-diente.dto';
export declare class OdontogramaService {
    private readonly odontogramaModel;
    constructor(odontogramaModel: Model<Odontograma>);
    create(dto: CreateOdontogramaDto): Promise<Odontograma | null>;
    findAll(options: {
        page: number;
        limit: number;
    }): Promise<any | null>;
    findByPaciente(pacienteId: string, options: {
        page: number;
        limit: number;
    }): Promise<any | null>;
    findLatestByPaciente(pacienteId: string): Promise<Odontograma | null>;
    findOne(id: string): Promise<Odontograma | null>;
    updateDiente(odontogramaId: string, dto: UpdateDienteDto): Promise<Odontograma | null>;
    remove(id: string): Promise<Odontograma | null>;
}
