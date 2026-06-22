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
exports.OdontogramaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const odontograma_schema_1 = require("./schemas/odontograma.schema");
let OdontogramaService = class OdontogramaService {
    odontogramaModel;
    constructor(odontogramaModel) {
        this.odontogramaModel = odontogramaModel;
    }
    async create(dto) {
        try {
            const odontograma = new this.odontogramaModel(dto);
            return await odontograma.save();
        }
        catch (err) {
            console.error('Error creando odontograma:', err);
            return null;
        }
    }
    async findAll(options) {
        try {
            const { page, limit } = options;
            const items = await this.odontogramaModel
                .find()
                .skip((page - 1) * limit)
                .limit(limit);
            return { items, page, limit };
        }
        catch (err) {
            console.error('Error listando odontogramas:', err);
            return null;
        }
    }
    async findByPaciente(pacienteId, options) {
        try {
            const { page, limit } = options;
            const items = await this.odontogramaModel
                .find({ pacienteId })
                .skip((page - 1) * limit)
                .limit(limit)
                .sort({ fechaEvaluacion: -1 });
            return { items, page, limit };
        }
        catch (err) {
            console.error('Error buscando odontogramas por paciente:', err);
            return null;
        }
    }
    async findLatestByPaciente(pacienteId) {
        try {
            return await this.odontogramaModel
                .findOne({ pacienteId })
                .sort({ fechaEvaluacion: -1 });
        }
        catch (err) {
            console.error('Error buscando odontograma más reciente:', err);
            return null;
        }
    }
    async findOne(id) {
        try {
            return await this.odontogramaModel.findById(id);
        }
        catch (err) {
            console.error('Error buscando odontograma:', err);
            return null;
        }
    }
    async updateDiente(odontogramaId, dto) {
        try {
            const odontograma = await this.odontogramaModel.findById(odontogramaId);
            if (!odontograma)
                return null;
            if (!odontograma.dientes)
                odontograma.dientes = [];
            const diente = odontograma.dientes.find((d) => d.numero === dto.numero);
            if (diente) {
                if (dto.superficies && diente.superficies) {
                    Object.assign(diente.superficies, dto.superficies);
                }
                if (dto.estadoGeneral !== undefined)
                    diente.estadoGeneral = dto.estadoGeneral;
                if (dto.observaciones !== undefined)
                    diente.observaciones = dto.observaciones;
            }
            else {
                odontograma.dientes.push({
                    numero: dto.numero,
                    superficies: {
                        vestibular: dto.superficies?.vestibular ?? 'sano',
                        distal: dto.superficies?.distal ?? 'sano',
                        lingual: dto.superficies?.lingual ?? 'sano',
                        mesial: dto.superficies?.mesial ?? 'sano',
                        oclusal: dto.superficies?.oclusal ?? 'sano',
                    },
                    estadoGeneral: dto.estadoGeneral ?? 'presente',
                    observaciones: dto.observaciones ?? '',
                });
            }
            odontograma.markModified('dientes');
            return await odontograma.save();
        }
        catch (err) {
            console.error('Error actualizando diente:', err);
            return null;
        }
    }
    async remove(id) {
        try {
            const odontograma = await this.findOne(id);
            if (!odontograma)
                return null;
            return await odontograma.deleteOne();
        }
        catch (err) {
            console.error('Error eliminando odontograma:', err);
            return null;
        }
    }
};
exports.OdontogramaService = OdontogramaService;
exports.OdontogramaService = OdontogramaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(odontograma_schema_1.Odontograma.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OdontogramaService);
//# sourceMappingURL=odontograma.service.js.map