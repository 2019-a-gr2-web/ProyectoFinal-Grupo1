"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const producto_entity_1 = require("./Backend/producto/producto.entity");
const bodega_entity_1 = require("./Backend/bodega/bodega.entity");
const cliente_entity_1 = require("./Backend/cliente/cliente.entity");
const pedido_entity_1 = require("./Backend/pedido/pedido.entity");
const proveedor_entity_1 = require("./Backend/proveedor/proveedor.entity");
const rol_entity_1 = require("./Backend/rol/rol.entity");
const tipo_entity_1 = require("./Backend/tipo/tipo.entity");
const usuario_rol_entity_1 = require("./Backend/usuarioToRol/usuario_rol.entity");
const producto_module_1 = require("./Backend/producto/producto.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [producto_module_1.ProductoModule,
            typeorm_1.TypeOrmModule.forRoot({
                name: 'default',
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'proyecto',
                entities: [
                    producto_entity_1.ProductoEntity,
                    bodega_entity_1.BodegaEntity,
                    cliente_entity_1.ClienteEntity,
                    pedido_entity_1.PedidoEntity,
                    proveedor_entity_1.ProveedorEntity,
                    rol_entity_1.RolEntity,
                    tipo_entity_1.TipoEntity,
                    usuario_rol_entity_1.UsuarioRolEntity,
                ],
                synchronize: true,
                insecureAuth: true,
                dropSchema: false,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map