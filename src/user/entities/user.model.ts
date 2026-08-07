import { Model } from "sequelize-typescript";
import {Column, DataType, Default, PrimaryKey, Table, Unique } from "sequelize-typescript";

@Table({
    tableName: 'users',
    timestamps:true
})
export class User extends Model {

  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Unique
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare email: string;

  @Unique
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare numero_telefono: string;


  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  @Default(true)
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  declare isActive: boolean;
}