import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  idProducto: number;

  @Column()
  NombreProducto: string;

  @Column()
  idMarca: number;

  @Column()
  idModelo: number;

  @Column()
  idColor: number;

  @Column()
  idTalla: number;

  @Column()
  imagen: string;

  @Column('decimal')
  PrecioVenta: number;
}
