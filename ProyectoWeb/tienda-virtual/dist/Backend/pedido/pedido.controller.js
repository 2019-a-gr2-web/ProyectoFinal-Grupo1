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
const pedido_service_1 = require("./pedido.service");
const producto_pedido_service_1 = require("../productoToPedido/producto_pedido.service");
const producto_service_1 = require("../producto/producto.service");
let PedidoController = class PedidoController {
    constructor(_pedidoService, _productoService, _detalleService) {
        this._pedidoService = _pedidoService;
        this._productoService = _productoService;
        this._detalleService = _detalleService;
    }
    getHello() {
        return "Hola Producto";
    }
    crearPedido(res, req, session) {
        return __awaiter(this, void 0, void 0, function* () {
            const existePedidoPendiente = yield this._pedidoService.buscarPedidoIniciado({ estado: 'Iniciado' });
            const productoActual = yield this._productoService.getProductById({ idProducto: req.params.idProducto });
            if (existePedidoPendiente) {
                const detalle = {
                    idDetalle: 0,
                    cantidadProducto: 2,
                    precioDetalle: productoActual.PVP * 2,
                    producto: productoActual,
                    pedido: existePedidoPendiente,
                    productoId: productoActual.idProducto,
                };
                const respuestaDetalle = yield this._detalleService.crear(detalle);
                console.log(respuestaDetalle);
                res.redirect('/tiendavirtual/pedido/modal?pedido=' + existePedidoPendiente.idPedido);
            }
            else {
                console.log(session);
                const pedido = {
                    identificacion: session.identificacion,
                    nombreCliente: session.nombre,
                    direccionCliente: session.direccion,
                };
                const response = yield this._pedidoService.crearPedido(pedido);
                const detalle = {
                    idDetalle: 0,
                    cantidadProducto: 2,
                    precioDetalle: productoActual.PVP * 2,
                    producto: productoActual,
                    pedido: response,
                    productoId: productoActual.idProducto,
                };
                const respuestaDetalle = yield this._detalleService.crear(detalle);
                res.redirect('/tiendavirtual/pedido/modal?pedido=' + response.idPedido);
            }
        });
    }
    mostartMesajeExito(res, pedido) {
        res.render('vistas_pedido/confirmarCompra', {
            idPedido: pedido,
        });
    }
    verCarrito(res, session) {
        return __awaiter(this, void 0, void 0, function* () {
            const existePedidoPendiente = yield this._pedidoService.buscarPedidoIniciado({ estado: 'Iniciado' });
            if (existePedidoPendiente) {
                const detallesDelPedidoActual = yield this._detalleService.buscarTodo({ pedido: existePedidoPendiente });
                const productoPorDetalle = [];
                detallesDelPedidoActual.forEach(detalle => {
                    productoPorDetalle.push(detalle.productoId);
                });
                const productos = yield this._productoService.buscarPorId(productoPorDetalle);
                res.render('vistas_pedido/verCarrito', {
                    detalles: detallesDelPedidoActual,
                    listaDeProductos: productos,
                    usuario: session,
                    pedido: existePedidoPendiente,
                });
            }
            else {
                return "No exiten Productos";
            }
        });
    }
    facturaGenerada(res) {
        res.render('vistas_factura/facturaGenerada');
    }
    pagarFactura(res, req, session) {
        return __awaiter(this, void 0, void 0, function* () {
            const idPedido = req.params.idProducto;
            const responsePedido = yield this._pedidoService.buscarPedidoPorId({ idPedido: idPedido });
            responsePedido.estado = 'PorDespachar';
            responsePedido.usuario = session.idUsuario;
            const guardarPedido = yield this._pedidoService.actualizarPedido(responsePedido);
            console.log(guardarPedido);
            res.redirect('/tiendavirtual/pedido/facturagenerada');
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "getHello", null);
__decorate([
    common_1.Get('/crear/:idProducto'),
    __param(0, common_1.Res()),
    __param(1, common_1.Req()),
    __param(2, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PedidoController.prototype, "crearPedido", null);
__decorate([
    common_1.Get('modal'),
    __param(0, common_1.Res()), __param(1, common_1.Query('pedido')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "mostartMesajeExito", null);
__decorate([
    common_1.Get('vercarrito'),
    __param(0, common_1.Res()), __param(1, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PedidoController.prototype, "verCarrito", null);
__decorate([
    common_1.Get('facturagenerada'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "facturaGenerada", null);
__decorate([
    common_1.Get('pagarfactura/:idProducto'),
    __param(0, common_1.Res()), __param(1, common_1.Req()), __param(2, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PedidoController.prototype, "pagarFactura", null);
PedidoController = __decorate([
    common_1.Controller('/tiendavirtual/pedido'),
    __metadata("design:paramtypes", [pedido_service_1.PedidoService,
        producto_service_1.ProductoService,
        producto_pedido_service_1.DetalleService])
], PedidoController);
exports.PedidoController = PedidoController;
//# sourceMappingURL=pedido.controller.js.map