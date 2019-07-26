export interface DireccionCompra {
    id: string;
    nombreCompleto: string;
    direccion: string;
    pais: number;
    departamento: number;
    ciudad: number;
    codigoPostal: number;
    telefono: string;
    observaciones: string;
    fechaCreacion: Date;
    email:string;
}
export interface TarjetaCompra {
    id: string;
    nombreTarjeta: string;
    numeroTarjeta: string;
    mesExpiracion: number;
    anioExpiracion: number;
    fechaCreacion: Date;

}
export interface PaypalCompra {
    id: string;
    usuario: string;
    acceso: string;
}