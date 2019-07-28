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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const producto_service_1 = require("./producto.service");
let ProductoController = class ProductoController {
    constructor(_productoService) {
        this._productoService = _productoService;
    }
    getHello() {
        return "Hola Producto";
    }
    loginVista(res) {
        res.render('vistas_login/login');
    }
    helloWorld() {
        return 'Hello world';
    }
    getAllProducts(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productsList = yield this._productoService.buscarTodo();
            res.render('vistas_producto/main-view', {
                productos: productsList,
            });
        });
    }
    deleteProductGet(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._productoService.eliminar(req.params.idProducto);
            res.redirect('/tiendavirtual/producto/all');
        });
    }
    editarProductGet(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            res.redirect('/tiendavirtual/producto/all');
        });
    }
    createProductGet(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            res.render('vistas_producto/new');
        });
    }
    createProductPost(res, producto) {
        return __awaiter(this, void 0, void 0, function* () {
            producto.nombreProducto = producto.nombreProducto;
            producto.descripcion = producto.descripcion;
            producto.codigoProducto = producto.codigoProducto;
            producto.PVP = producto.PVP;
            producto.imagenProducto = producto.imagenProducto;
            yield this._productoService.crear(producto);
            res.redirect('/tiendavirtual/producto/all');
        });
    }
    getProductDescription(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const producto = yield this._productoService.getProductById({ idProducto: req.params.idProducto });
            console.log(producto.nombreProducto);
            res.render('vistas_producto/description', {
                producto: producto,
            });
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ProductoController.prototype, "getHello", null);
__decorate([
    common_1.Get('/login'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductoController.prototype, "loginVista", null);
__decorate([
    common_1.Get('/hello-world'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ProductoController.prototype, "helloWorld", null);
__decorate([
    common_1.Get('/all'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "getAllProducts", null);
__decorate([
    common_1.Get('/delete/:idProducto'),
    __param(0, common_1.Res()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "deleteProductGet", null);
__decorate([
    common_1.Get('/update/:idProducto'),
    __param(0, common_1.Res()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "editarProductGet", null);
__decorate([
    common_1.Get('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "createProductGet", null);
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "createProductPost", null);
__decorate([
    common_1.Get('/ver/:idProducto'),
    __param(0, common_1.Res()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "getProductDescription", null);
ProductoController = __decorate([
    common_1.Controller('tiendavirtual/producto'),
    __metadata("design:paramtypes", [producto_service_1.ProductoService])
], ProductoController);
exports.ProductoController = ProductoController;
//# sourceMappingURL=producto.controller.js.map