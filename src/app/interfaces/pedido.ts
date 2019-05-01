export interface Pedido {
    id: string;
    uidCompra: number;
    pedidoNumero: string;
    monto: number;
    fecha: Date;
    estado: number;
    estadoDes: string;
    detalle: [];
    confirmacionPago: {}
  }