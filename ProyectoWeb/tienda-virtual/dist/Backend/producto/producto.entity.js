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
let ProductoEntity = class ProductoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'id_producto',
    }),
    __metadata("design:type", Number)
], ProductoEntity.prototype, "idProducto", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        name: 'nombre_producto',
    }),
    __metadata("design:type", String)
], ProductoEntity.prototype, "nombreProducto", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 100,
        name: 'descripcion_producto',
    }),
    __metadata("design:type", String)
], ProductoEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'codigo_producto',
    }),
    __metadata("design:type", String)
], ProductoEntity.prototype, "codigoProducto", void 0);
__decorate([
    typeorm_1.Column({
        type: 'decimal',
        name: 'precio_venta_publico',
        precision: 10,
        scale: 2,
        default: '0',
    }),
    __metadata("design:type", Number)
], ProductoEntity.prototype, "PVP", void 0);
__decorate([
    typeorm_1.Column({
        type: 'longtext',
        name: 'imagen_producto',
    }),
    __metadata("design:type", Object)
], ProductoEntity.prototype, "imagenProducto", void 0);
ProductoEntity = __decorate([
    typeorm_1.Entity('bd_producto')
], ProductoEntity);
exports.ProductoEntity = ProductoEntity;
//# sourceMappingURL=producto.entity.js.map