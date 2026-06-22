"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OdontogramaModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const odontograma_controller_1 = require("./odontograma.controller");
const odontograma_service_1 = require("./odontograma.service");
const odontograma_schema_1 = require("./schemas/odontograma.schema");
let OdontogramaModule = class OdontogramaModule {
};
exports.OdontogramaModule = OdontogramaModule;
exports.OdontogramaModule = OdontogramaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: odontograma_schema_1.Odontograma.name, schema: odontograma_schema_1.OdontogramaSchema },
            ]),
        ],
        controllers: [odontograma_controller_1.OdontogramaController],
        providers: [odontograma_service_1.OdontogramaService],
        exports: [odontograma_service_1.OdontogramaService],
    })
], OdontogramaModule);
//# sourceMappingURL=odontograma.module.js.map