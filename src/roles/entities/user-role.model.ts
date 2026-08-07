import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/user/entities/user.model";
import { Role } from "./role.model";


@Table({
    tableName: 'user_roles',
    timestamps: false
})

export class UserRole extends Model {
    
  @ForeignKey(() => User)
  @Column(DataType.UUID)
  userId: string;

  @ForeignKey(() => Role)
  @Column(DataType.UUID)
  roleId: string;
}