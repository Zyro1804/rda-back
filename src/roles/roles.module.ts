import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRole } from './entities/user-role.model';
import { Role } from './entities/role.model';

@Module({
  imports: [
    SequelizeModule.forFeature([UserRole, Role]),
  ],
  providers: [RolesService],
  controllers: [RolesController]
})
export class RolesModule {}
