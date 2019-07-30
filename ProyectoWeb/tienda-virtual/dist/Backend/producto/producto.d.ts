export interface Producto {
    idProducto?: number;
    nombreProducto: string;
    descripcion: string;
    codigoProducto: string;
    PVP: any | number;
    imagenProducto: any;
    tipo?: 'Hombre' | 'Mujer' | 'Niño';
}
