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
const usuario_rol_entity_1 = require("../usuarioToRol/usuario_rol.entity");
const pedido_entity_1 = require("../pedido/pedido.entity");
let UsuarioEntity = class UsuarioEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'id_cliente',
    }),
    __metadata("design:type", Number)
], UsuarioEntity.prototype, "idUsuario", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        name: 'nombre',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        name: 'apellido',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "apellido", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        name: 'identificacion',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "identificacion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        name: 'direccion',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "direccion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        name: 'username',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        name: 'password',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 32,
        name: 'rol',
        default: 'Cliente',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "rol", void 0);
__decorate([
    typeorm_1.OneToMany((type) => usuario_rol_entity_1.UsuarioRolEntity, (usuarioRol) => usuarioRol.usuario),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "usuarioRol", void 0);
__decorate([
    typeorm_1.OneToMany((type) => pedido_entity_1.PedidoEntity, (pedido) => pedido.usuario),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "usuarioPedido", void 0);
UsuarioEntity = __decorate([
    typeorm_1.Entity('bd_usuario')
], UsuarioEntity);
exports.UsuarioEntity = UsuarioEntity;
//# sourceMappingURL=usuario.entity.js.map