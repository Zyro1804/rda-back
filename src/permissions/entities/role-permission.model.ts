
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/entities/role.model";
import { Permission } from "./permission.model";


@Table({
    tableName: 'role_permissions',
    timestamps: true
})

export class RolePermission extends Model{
    
    @ForeignKey(() => Role)
    @Column(DataType.UUID)
    roleId: string;

    @ForeignKey(() => Permission)
    @Column(DataType.UUID)
    permissionId: string;
} 
