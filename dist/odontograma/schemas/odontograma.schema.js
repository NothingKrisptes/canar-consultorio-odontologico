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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OdontogramaSchema = exports.Odontograma = exports.DienteSchema = exports.Diente = exports.SuperficiesSchema = exports.Superficies = exports.EstadoSuperficie = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var EstadoSuperficie;
(function (EstadoSuperficie) {
    EstadoSuperficie["SANO"] = "sano";
    EstadoSuperficie["CARIES"] = "caries";
    EstadoSuperficie["OBTURADO"] = "obturado";
    EstadoSuperficie["FRACTURA"] = "fractura";
    EstadoSuperficie["AUSENTE"] = "ausente";
})(EstadoSuperficie || (exports.EstadoSuperficie = EstadoSuperficie = {}));
let Superficies = class Superficies {
    vestibular;
    distal;
    lingual;
    mesial;
    oclusal;
};
exports.Superficies = Superficies;
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: EstadoSuperficie.SANO }),
    __metadata("design:type", String)
], Superficies.prototype, "vestibular", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: EstadoSuperficie.SANO }),
    __metadata("design:type", String)
], Superficies.prototype, "distal", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: EstadoSuperficie.SANO }),
    __metadata("design:type", String)
], Superficies.prototype, "lingual", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: EstadoSuperficie.SANO }),
    __metadata("design:type", String)
], Superficies.prototype, "mesial", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: EstadoSuperficie.SANO }),
    __metadata("design:type", String)
], Superficies.prototype, "oclusal", void 0);
exports.Superficies = Superficies = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Superficies);
exports.SuperficiesSchema = mongoose_1.SchemaFactory.createForClass(Superficies);
let Diente = class Diente {
    numero;
    superficies;
    estadoGeneral;
    observaciones;
};
exports.Diente = Diente;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Diente.prototype, "numero", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.SuperficiesSchema, required: true }),
    __metadata("design:type", Superficies)
], Diente.prototype, "superficies", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'presente' }),
    __metadata("design:type", String)
], Diente.prototype, "estadoGeneral", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], Diente.prototype, "observaciones", void 0);
exports.Diente = Diente = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Diente);
exports.DienteSchema = mongoose_1.SchemaFactory.createForClass(Diente);
let Odontograma = class Odontograma extends mongoose_2.Document {
    pacienteId;
    fechaEvaluacion;
    odontologoId;
    dientes;
    estado;
    observacionesGenerales;
};
exports.Odontograma = Odontograma;
__decorate([
    (0, mongoose_1.Prop)({ required: true, index: true }),
    __metadata("design:type", String)
], Odontograma.prototype, "pacienteId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Odontograma.prototype, "fechaEvaluacion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Odontograma.prototype, "odontologoId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.DienteSchema], required: true, default: [] }),
    __metadata("design:type", Array)
], Odontograma.prototype, "dientes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'activo' }),
    __metadata("design:type", String)
], Odontograma.prototype, "estado", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], Odontograma.prototype, "observacionesGenerales", void 0);
exports.Odontograma = Odontograma = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Odontograma);
exports.OdontogramaSchema = mongoose_1.SchemaFactory.createForClass(Odontograma);
//# sourceMappingURL=odontograma.schema.js.map