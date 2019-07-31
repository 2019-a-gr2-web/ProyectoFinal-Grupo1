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
const pedido_entity_1 = require("../pedido/pedido.entity");
const producto_entity_1 = require("../producto/producto.entity");
let DetalleEntity = class DetalleEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'id_detalle'
    }),
    __metadata("design:type", Number)
], DetalleEntity.prototype, "idDetalle", void 0);
__decorate([
    typeorm_1.Column({
        type: 'decimal',
        name: 'cantidad_producto',
        precision: 10,
        default: 0,
    }),
    __metadata("design:type", Number)
], DetalleEntity.prototype, "cantidadProducto", void 0);
__decorate([
    typeorm_1.Column({
        type: 'decimal',
        name: 'precio_detalle',
        precision: 10,
        default: '0',
    }),
    __metadata("design:type", Number)
], DetalleEntity.prototype, "precioDetalle", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        name: 'producto_id',
    }),
    __metadata("design:type", Number)
], DetalleEntity.prototype, "productoId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => producto_entity_1.ProductoEntity, producto => producto.productoPedido),
    __metadata("design:type", producto_entity_1.ProductoEntity)
], DetalleEntity.prototype, "producto", void 0);
__decorate([
    typeorm_1.ManyToOne(type => pedido_entity_1.PedidoEntity, pedido => pedido.productoPedido),
    __metadata("design:type", pedido_entity_1.PedidoEntity)
], DetalleEntity.prototype, "pedido", void 0);
DetalleEntity = __decorate([
    typeorm_1.Entity('producto_pedido')
], DetalleEntity);
exports.DetalleEntity = DetalleEntity;
//# sourceMappingURL=producto_pedido.entity.js.map