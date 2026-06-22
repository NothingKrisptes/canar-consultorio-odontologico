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
exports.OdontogramaController = void 0;
const common_1 = require("@nestjs/common");
const odontograma_service_1 = require("./odontograma.service");
const create_odontograma_dto_1 = require("./dto/create-odontograma.dto");
const update_diente_dto_1 = require("./dto/update-diente.dto");
const response_dto_1 = require("../common/dto/response.dto");
let OdontogramaController = class OdontogramaController {
    odontogramaService;
    constructor(odontogramaService) {
        this.odontogramaService = odontogramaService;
    }
    async create(dto) {
        const result = await this.odontogramaService.create(dto);
        if (!result)
            throw new common_1.InternalServerErrorException('Error al crear el odontograma');
        return new response_dto_1.SuccessResponseDto('Odontograma creado exitosamente', result);
    }
    async findAll(page = 1, limit = 10) {
        const result = await this.odontogramaService.findAll({ page: +page, limit: +limit });
        if (!result)
            throw new common_1.InternalServerErrorException('Error al listar odontogramas');
        return new response_dto_1.SuccessResponseDto('Odontogramas obtenidos exitosamente', result);
    }
    async findByPaciente(pacienteId, page = 1, limit = 10) {
        const result = await this.odontogramaService.findByPaciente(pacienteId, { page: +page, limit: +limit });
        if (!result)
            throw new common_1.InternalServerErrorException('Error al buscar odontogramas del paciente');
        return new response_dto_1.SuccessResponseDto('Odontogramas del paciente obtenidos', result);
    }
    async findLatest(pacienteId) {
        const result = await this.odontogramaService.findLatestByPaciente(pacienteId);
        if (!result)
            throw new common_1.NotFoundException('No se encontró un odontograma para este paciente');
        return new response_dto_1.SuccessResponseDto('Último odontograma obtenido', result);
    }
    async findOne(id) {
        const result = await this.odontogramaService.findOne(id);
        if (!result)
            throw new common_1.NotFoundException('Odontograma no encontrado');
        return new response_dto_1.SuccessResponseDto('Odontograma obtenido exitosamente', result);
    }
    async updateDiente(id, dto) {
        const result = await this.odontogramaService.updateDiente(id, dto);
        if (!result)
            throw new common_1.NotFoundException('Odontograma o diente no encontrado');
        return new response_dto_1.SuccessResponseDto('Diente actualizado exitosamente', result);
    }
    async remove(id) {
        const result = await this.odontogramaService.remove(id);
        if (!result)
            throw new common_1.NotFoundException('Odontograma no encontrado');
        return new response_dto_1.SuccessResponseDto('Odontograma eliminado exitosamente', result);
    }
};
exports.OdontogramaController = OdontogramaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_odontograma_dto_1.CreateOdontogramaDto]),
    __metadata("design:returntype", Promise)
], OdontogramaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OdontogramaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('paciente/:pacienteId'),
    __param(0, (0, common_1.Param)('pacienteId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], OdontogramaController.prototype, "findByPaciente", null);
__decorate([
    (0, common_1.Get)('paciente/:pacienteId/ultimo'),
    __param(0, (0, common_1.Param)('pacienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OdontogramaController.prototype, "findLatest", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OdontogramaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/diente'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_diente_dto_1.UpdateDienteDto]),
    __metadata("design:returntype", Promise)
], OdontogramaController.prototype, "updateDiente", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OdontogramaController.prototype, "remove", null);
exports.OdontogramaController = OdontogramaController = __decorate([
    (0, common_1.Controller)('odontograma'),
    __metadata("design:paramtypes", [odontograma_service_1.OdontogramaService])
], OdontogramaController);
//# sourceMappingURL=odontograma.controller.js.map