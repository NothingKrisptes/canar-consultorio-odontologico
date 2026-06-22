import { OdontogramaService } from './odontograma.service';
import { CreateOdontogramaDto } from './dto/create-odontograma.dto';
import { UpdateDienteDto } from './dto/update-diente.dto';
import { SuccessResponseDto } from "../common/dto/response.dto";
export declare class OdontogramaController {
    private readonly odontogramaService;
    constructor(odontogramaService: OdontogramaService);
    create(dto: CreateOdontogramaDto): Promise<SuccessResponseDto<import("./schemas/odontograma.schema").Odontograma>>;
    findAll(page?: number, limit?: number): Promise<SuccessResponseDto<any>>;
    findByPaciente(pacienteId: string, page?: number, limit?: number): Promise<SuccessResponseDto<any>>;
    findLatest(pacienteId: string): Promise<SuccessResponseDto<import("./schemas/odontograma.schema").Odontograma>>;
    findOne(id: string): Promise<SuccessResponseDto<import("./schemas/odontograma.schema").Odontograma>>;
    updateDiente(id: string, dto: UpdateDienteDto): Promise<SuccessResponseDto<import("./schemas/odontograma.schema").Odontograma>>;
    remove(id: string): Promise<SuccessResponseDto<import("./schemas/odontograma.schema").Odontograma>>;
}
