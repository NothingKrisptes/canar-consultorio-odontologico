"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacientesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const paciente_entity_1 = require("./paciente.entity");
const odontograma_service_1 = require("../odontograma/odontograma.service");
let PacientesService = class PacientesService {
    pacienteRepo;
    odontogramaService;
    constructor(pacienteRepo, odontogramaService) {
        this.pacienteRepo = pacienteRepo;
        this.odontogramaService = odontogramaService;
    }
    async create(dto) {
        try {
            const paciente = this.pacienteRepo.create(dto);
            return await this.pacienteRepo.save(paciente);
        }
        catch (err) {
            console.error('Error creando paciente:', err);
            return null;
        }
    }
    async findAll(queryDto) {
        try {
            const { page, limit, search, searchField, sort, order } = queryDto;
            const query = this.pacienteRepo.createQueryBuilder('paciente');
            if (search) {
                if (searchField) {
                    switch (searchField) {
                        case 'nombre':
                            query.where('paciente.nombre ILIKE :search', { search: `%${search}%` });
                            break;
                        case 'apellido':
                            query.where('paciente.apellido ILIKE :search', { search: `%${search}%` });
                            break;
                        case 'cedula':
                            query.where('paciente.cedula ILIKE :search', { search: `%${search}%` });
                            break;
                        default:
                            query.where('(paciente.nombre ILIKE :search OR paciente.apellido ILIKE :search OR paciente.cedula ILIKE :search)', { search: `%${search}%` });
                    }
                }
                else {
                    query.where('(paciente.nombre ILIKE :search OR paciente.apellido ILIKE :search OR paciente.cedula ILIKE :search)', { search: `%${search}%` });
                }
            }
            if (sort) {
                query.orderBy(`paciente.${sort}`, (order ?? 'ASC'));
            }
            return await (0, nestjs_typeorm_paginate_1.paginate)(query, { page, limit });
        }
        catch (err) {
            console.error('Error listando pacientes:', err);
            return null;
        }
    }
    async findOne(id) {
        try {
            return await this.pacienteRepo.findOne({ where: { id } });
        }
        catch (err) {
            console.error('Error buscando paciente:', err);
            return null;
        }
    }
    async findByCedula(cedula) {
        try {
            return await this.pacienteRepo.findOne({ where: { cedula } });
        }
        catch (err) {
            console.error('Error buscando paciente por cédula:', err);
            return null;
        }
    }
    async update(id, dto) {
        try {
            const paciente = await this.findOne(id);
            if (!paciente)
                return null;
            Object.assign(paciente, dto);
            return await this.pacienteRepo.save(paciente);
        }
        catch (err) {
            console.error('Error actualizando paciente:', err);
            return null;
        }
    }
    async remove(id) {
        try {
            const paciente = await this.findOne(id);
            if (!paciente)
                return null;
            return await this.pacienteRepo.remove(paciente);
        }
        catch (err) {
            console.error('Error eliminando paciente:', err);
            return null;
        }
    }
    async findOneConOdontograma(id) {
        try {
            const paciente = await this.findOne(id);
            if (!paciente)
                return null;
            const odontograma = await this.odontogramaService.findLatestByPaciente(id);
            return { paciente, odontograma };
        }
        catch (err) {
            console.error('Error buscando paciente con odontograma:', err);
            return null;
        }
    }
};
exports.PacientesService = PacientesService;
exports.PacientesService = PacientesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(paciente_entity_1.Paciente)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        odontograma_service_1.OdontogramaService])
], PacientesService);
//# sourceMappingURL=pacientes.service.js.map