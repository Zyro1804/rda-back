import { BelongsToMany, Column, DataType, Default, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { Role } from "src/roles/entities/role.model";
import { RolePermission } from "./role-permission.model";


@Table({
    tableName: 'permissions',
    timestamps: true,
})

export class Permission extends Model {

  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @Unique
  @Column
  name: string;

  @Column
  description: string;

  @BelongsToMany(() => Role, () => RolePermission)
  roles: Role[];
}