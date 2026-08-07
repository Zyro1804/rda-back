import { BelongsToMany, Column, DataType, Default, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { User } from "src/user/entities/user.model";
import { UserRole } from "./user-role.model";
import { Permission } from "src/permissions/entities/permission.model";
import { RolePermission } from "src/permissions/entities/role-permission.model";


@Table({
    tableName: 'roles',
    timestamps:true
})

export class Role extends Model{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    declare id: string;

    @Unique
    @Column
    name : string

    @Column
    description: string;

    @BelongsToMany(() => User, () => UserRole)
    users: User[];

    @BelongsToMany(() => Permission, () => RolePermission)
    permissions: Permission[];
    
}