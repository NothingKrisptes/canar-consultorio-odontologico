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
exports.PacientesController = void 0;
const common_1 = require("@nestjs/common");
const pacientes_service_1 = require("./pacientes.service");
const create_paciente_dto_1 = require("./dto/create-paciente.dto");
const update_paciente_dto_1 = require("./dto/update-paciente.dto");
const response_dto_1 = require("../common/dto/response.dto");
const query_dto_1 = require("../common/dto/query.dto");
let PacientesController = class PacientesController {
    pacientesService;
    constructor(pacientesService) {
        this.pacientesService = pacientesService;
    }
    async create(dto) {
        const paciente = await this.pacientesService.create(dto);
        if (!paciente)
            throw new common_1.InternalServerErrorException('Error al crear el paciente');
        return new response_dto_1.SuccessResponseDto('Paciente creado exitosamente', paciente);
    }
    async findAll(query) {
        if (query.limit && query.limit > 100)
            query.limit = 100;
        const result = await this.pacientesService.findAll(query);
        if (!result)
            throw new common_1.InternalServerErrorException('Error al listar pacientes');
        return new response_dto_1.SuccessResponseDto('Pacientes obtenidos exitosamente', result);
    }
    async findByCedula(cedula) {
        const paciente = await this.pacientesService.findByCedula(cedula);
        if (!paciente)
            throw new common_1.NotFoundException('Paciente no encontrado');
        return new response_dto_1.SuccessResponseDto('Paciente obtenido exitosamente', paciente);
    }
    async findOne(id) {
        const paciente = await this.pacientesService.findOne(id);
        if (!paciente)
            throw new common_1.NotFoundException('Paciente no encontrado');
        return new response_dto_1.SuccessResponseDto('Paciente obtenido exitosamente', paciente);
    }
    async update(id, dto) {
        const paciente = await this.pacientesService.update(id, dto);
        if (!paciente)
            throw new common_1.NotFoundException('Paciente no encontrado');
        return new response_dto_1.SuccessResponseDto('Paciente actualizado exitosamente', paciente);
    }
    async remove(id) {
        const paciente = await this.pacientesService.remove(id);
        if (!paciente)
            throw new common_1.NotFoundException('Paciente no encontrado');
        return new response_dto_1.SuccessResponseDto('Paciente eliminado exitosamente', paciente);
    }
    async findOneConOdontograma(id) {
        const result = await this.pacientesService.findOneConOdontograma(id);
        if (!result)
            throw new common_1.NotFoundException('Paciente no encontrado');
        return new response_dto_1.SuccessResponseDto('Paciente con odontograma obtenido', result);
    }
};
exports.PacientesController = PacientesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paciente_dto_1.CreatePacienteDto]),
    __metadata("design:returntype", Promise)
], PacientesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.QueryDto]),
    __metadata("design:returntype", Promise)
], PacientesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('cedula/:cedula'),
    __param(0, (0, common_1.Param)('cedula')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PacientesController.prototype, "findByCedula", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PacientesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_paciente_dto_1.UpdatePacienteDto]),
    __metadata("design:returntype", Promise)
], PacientesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PacientesController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id/odontograma'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PacientesController.prototype, "findOneConOdontograma", null);
exports.PacientesController = PacientesController = __decorate([
    (0, common_1.Controller)('pacientes'),
    __metadata("design:paramtypes", [pacientes_service_1.PacientesService])
], PacientesController);
//# sourceMappingURL=pacientes.controller.js.map