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
const producto_pedido_entity_1 = require("../productoToPedido/producto_pedido.entity");
let PedidoEntity = class PedidoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'id_pedido',
    }),
    __metadata("design:type", Number)
], PedidoEntity.prototype, "idPedido", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        name: 'direccion_cliente',
    }),
    __metadata("design:type", String)
], PedidoEntity.prototype, "direccionCliente", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        name: 'identificacion',
    }),
    __metadata("design:type", String)
], PedidoEntity.prototype, "identificacion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'decimal',
        name: 'subtotal',
        precision: 10,
        scale: 2,
        default: '0',
    }),
    __metadata("design:type", Number)
], PedidoEntity.prototype, "subtotal", void 0);
__decorate([
    typeorm_1.Column({
        type: 'decimal',
        name: 'total',
        precision: 10,
        scale: 2,
        default: '0',
    }),
    __metadata("design:type", Number)
], PedidoEntity.prototype, "total", void 0);
__decorate([
    typeorm_1.Column({
        type: 'date',
        name: 'fecha',
        default: '2019-06-19'
    }),
    __metadata("design:type", Date)
], PedidoEntity.prototype, "fecha", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: "10",
        name: 'estado',
    }),
    __metadata("design:type", String)
], PedidoEntity.prototype, "estado", void 0);
__decorate([
    typeorm_1.OneToMany(type => producto_pedido_entity_1.ProductoPedidoEntity, (productoPedido) => productoPedido.pedido),
    __metadata("design:type", Array)
], PedidoEntity.prototype, "productoPedido", void 0);
PedidoEntity = __decorate([
    typeorm_1.Entity('bd_pedido')
], PedidoEntity);
exports.PedidoEntity = PedidoEntity;
//# sourceMappingURL=pedido.entity.js.map