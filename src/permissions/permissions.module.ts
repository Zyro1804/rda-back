import { Module } from '@nestjs/common';
import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Permission } from './entities/permission.model';
import { RolePermission } from './entities/role-permission.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Permission, RolePermission]),
  ],
  controllers: [PermissionsController],
  providers: [PermissionsService]
})
export class PermissionsModule {}
