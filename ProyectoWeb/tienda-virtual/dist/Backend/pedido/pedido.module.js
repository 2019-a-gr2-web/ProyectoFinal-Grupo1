"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pedido_entity_1 = require("./pedido.entity");
const pedido_controller_1 = require("./pedido.controller");
const pedido_service_1 = require("./pedido.service");
const producto_pedido_service_1 = require("../productoToPedido/producto_pedido.service");
const producto_service_1 = require("../producto/producto.service");
const producto_entity_1 = require("../producto/producto.entity");
const producto_pedido_entity_1 = require("../productoToPedido/producto_pedido.entity");
let PedidoModule = class PedidoModule {
};
PedidoModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                pedido_entity_1.PedidoEntity,
                producto_entity_1.ProductoEntity,
                producto_pedido_entity_1.DetalleEntity,
            ], 'default'),
        ],
        controllers: [pedido_controller_1.PedidoController],
        providers: [producto_service_1.ProductoService, pedido_service_1.PedidoService, producto_pedido_service_1.DetalleService],
        exports: [producto_service_1.ProductoService, pedido_service_1.PedidoService, producto_pedido_service_1.DetalleService]
    })
], PedidoModule);
exports.PedidoModule = PedidoModule;
//# sourceMappingURL=pedido.module.js.map