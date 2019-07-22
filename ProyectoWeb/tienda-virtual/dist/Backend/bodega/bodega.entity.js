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
const typeorm_1 = require("typeorm");
let BodegaEntity = class BodegaEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'id_bodega',
    }),
    __metadata("design:type", Number)
], BodegaEntity.prototype, "idBodega", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        name: 'nombre_bodega',
    }),
    __metadata("design:type", String)
], BodegaEntity.prototype, "nombreBodega", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        name: 'direccion_bodega',
    }),
    __metadata("design:type", String)
], BodegaEntity.prototype, "direccionBodega", void 0);
BodegaEntity = __decorate([
    typeorm_1.Entity('bd_bodega')
], BodegaEntity);
exports.BodegaEntity = BodegaEntity;
//# sourceMappingURL=bodega.entity.js.map