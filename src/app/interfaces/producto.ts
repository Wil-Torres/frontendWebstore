export interface Producto {
    id: string;
    codigo: string;
    nombre: string;
    descripcion: string;
    fechaIngreso: Date;
    descuento: number;
    precio: number;
    marca: string;
    categorias: [];
    color:[];
    imagenes:[];
    preview: PreviewProducto[];
    talla:string;
    rating: number;
  }

  export interface PreviewProducto {
    email:string;
    name: string;
    rating: number;
    review: string;
    subject: string
  }