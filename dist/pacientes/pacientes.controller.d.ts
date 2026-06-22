import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Paciente } from './paciente.entity';
import { SuccessResponseDto } from "../common/dto/response.dto";
import { QueryDto } from "../common/dto/query.dto";
export declare class PacientesController {
    private readonly pacientesService;
    constructor(pacientesService: PacientesService);
    create(dto: CreatePacienteDto): Promise<SuccessResponseDto<Paciente>>;
    findAll(query: QueryDto): Promise<SuccessResponseDto<Pagination<Paciente>>>;
    findByCedula(cedula: string): Promise<SuccessResponseDto<Paciente>>;
    findOne(id: string): Promise<SuccessResponseDto<Paciente>>;
    update(id: string, dto: UpdatePacienteDto): Promise<SuccessResponseDto<Paciente>>;
    remove(id: string): Promise<SuccessResponseDto<Paciente>>;
    findOneConOdontograma(id: string): Promise<SuccessResponseDto<any>>;
}
