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
const rol_entity_1 = require("../rol/rol.entity");
let ClienteEntity = class ClienteEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'id_cliente',
    }),
    __metadata("design:type", Number)
], ClienteEntity.prototype, "idCliente", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        name: 'nombre_cliente',
    }),
    __metadata("design:type", String)
], ClienteEntity.prototype, "nombreCliente", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        name: 'apellido_cliente',
    }),
    __metadata("design:type", String)
], ClienteEntity.prototype, "apellidoCliente", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        name: 'nombre_usuario',
    }),
    __metadata("design:type", String)
], ClienteEntity.prototype, "nombreUsuario", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        name: 'contraseña',
    }),
    __metadata("design:type", String)
], ClienteEntity.prototype, "contrase\u00F1a", void 0);
__decorate([
    typeorm_1.ManyToMany(type => rol_entity_1.RolEntity),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], ClienteEntity.prototype, "roles", void 0);
ClienteEntity = __decorate([
    typeorm_1.Entity('bd_cliente')
], ClienteEntity);
exports.ClienteEntity = ClienteEntity;
//# sourceMappingURL=cliente.entity.js.map