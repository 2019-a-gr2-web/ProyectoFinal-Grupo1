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
const typeorm_1 = require("@nestjs/typeorm");
const producto_entity_1 = require("./producto.entity");
const typeorm_2 = require("typeorm");
let ProductoService = class ProductoService {
    constructor(_productosRepository) {
        this._productosRepository = _productosRepository;
        this.bddProductos = [];
        const producto = {
            nombreProducto: 'Producto 1',
            descripcion: 'Producto 1',
            codigoProducto: 'Producto 1',
            PVP: 25.20,
            imagenProducto: '',
            tipo: 'Hombre',
        };
        this.crear(producto);
        const respuestaUpdate = this.buscarTodo();
        respuestaUpdate
            .then((datos) => {
            this.bddProductos = datos;
        })
            .catch((error) => {
            console.error('Error:', error);
        });
    }
    getHello() {
        return 'ME GUSTAS ABIGAIL JEJE !♥ ♥!';
    }
    crear(nuevoProducto) {
        const objetoEntidad = this._productosRepository.create(nuevoProducto);
        return this._productosRepository.save(objetoEntidad);
    }
    buscarTodo(parametrosBusqueda) {
        return this._productosRepository.find(parametrosBusqueda);
    }
    actualizar(productoActualizado) {
        return this._productosRepository.save(productoActualizado);
    }
    eliminar(productoEliminado) {
        return this._productosRepository.delete(productoEliminado);
    }
    getProductById(idProducto) {
        return this._productosRepository.findOne(idProducto);
    }
};
ProductoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(producto_entity_1.ProductoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductoService);
exports.ProductoService = ProductoService;
//# sourceMappingURL=producto.service.js.map