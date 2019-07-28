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
const producto_pedido_entity_1 = require("./producto_pedido.entity");
const producto_pedido_controller_1 = require("./producto_pedido.controller");
const producto_pedido_service_1 = require("./producto_pedido.service");
let DetalleModule = class DetalleModule {
};
DetalleModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                producto_pedido_entity_1.DetalleEntity
            ], 'default'),
        ],
        controllers: [producto_pedido_controller_1.DetalleController],
        providers: [producto_pedido_service_1.DetalleService],
        exports: [producto_pedido_service_1.DetalleService]
    })
], DetalleModule);
exports.DetalleModule = DetalleModule;
//# sourceMappingURL=producto_pedido.module.js.map