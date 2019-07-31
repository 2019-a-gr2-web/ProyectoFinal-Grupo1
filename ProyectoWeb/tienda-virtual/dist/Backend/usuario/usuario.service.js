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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("./usuario.entity");
const typeorm_2 = require("@nestjs/typeorm");
let UsuarioService = class UsuarioService {
    constructor(_usuariosRepository) {
        this._usuariosRepository = _usuariosRepository;
    }
    getHello() {
        return 'Hello World!';
    }
    crear(nuevoUsuario) {
        const objetoEntidad = this._usuariosRepository.create(nuevoUsuario);
        return this._usuariosRepository.save(objetoEntidad);
    }
    buscarTodo(parametrosBusqueda) {
        return this._usuariosRepository.find(parametrosBusqueda);
    }
    actualizar(usuarioActualizado) {
        return this._usuariosRepository.save(usuarioActualizado);
    }
    eliminar(usuarioEliminado) {
        return this._usuariosRepository.delete(usuarioEliminado);
    }
    getUserById(idProducto) {
        return this._usuariosRepository.findOne(idProducto);
    }
};
UsuarioService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(usuario_entity_1.UsuarioEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map