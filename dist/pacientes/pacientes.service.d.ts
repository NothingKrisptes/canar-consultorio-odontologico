import { Repository } from 'typeorm';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Paciente } from './paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { QueryDto } from "../common/dto/query.dto";
import { OdontogramaService } from "../odontograma/odontograma.service";
export declare class PacientesService {
    private readonly pacienteRepo;
    private readonly odontogramaService;
    constructor(pacienteRepo: Repository<Paciente>, odontogramaService: OdontogramaService);
    create(dto: CreatePacienteDto): Promise<Paciente | null>;
    findAll(queryDto: QueryDto): Promise<Pagination<Paciente> | null>;
    findOne(id: string): Promise<Paciente | null>;
    findByCedula(cedula: string): Promise<Paciente | null>;
    update(id: string, dto: UpdatePacienteDto): Promise<Paciente | null>;
    remove(id: string): Promise<Paciente | null>;
    findOneConOdontograma(id: string): Promise<any | null>;
}
