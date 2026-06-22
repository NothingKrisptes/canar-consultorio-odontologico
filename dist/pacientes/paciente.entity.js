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
exports.Paciente = exports.EstadoPaciente = exports.Genero = void 0;
const typeorm_1 = require("typeorm");
var Genero;
(function (Genero) {
    Genero["MASCULINO"] = "masculino";
    Genero["FEMENINO"] = "femenino";
    Genero["OTRO"] = "otro";
})(Genero || (exports.Genero = Genero = {}));
var EstadoPaciente;
(function (EstadoPaciente) {
    EstadoPaciente["ACTIVO"] = "activo";
    EstadoPaciente["INACTIVO"] = "inactivo";
})(EstadoPaciente || (exports.EstadoPaciente = EstadoPaciente = {}));
let Paciente = class Paciente {
    id;
    cedula;
    nombre;
    apellido;
    fechaNacimiento;
    genero;
    telefono;
    email;
    alergias;
    estado;
    createdAt;
    updatedAt;
};
exports.Paciente = Paciente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Paciente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Paciente.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Paciente.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: Genero }),
    __metadata("design:type", String)
], Paciente.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: true }),
    __metadata("design:type", String)
], Paciente.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], Paciente.prototype, "alergias", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: EstadoPaciente, default: EstadoPaciente.ACTIVO }),
    __metadata("design:type", String)
], Paciente.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Paciente.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Paciente.prototype, "updatedAt", void 0);
exports.Paciente = Paciente = __decorate([
    (0, typeorm_1.Entity)('pacientes')
], Paciente);
//# sourceMappingURL=paciente.entity.js.map