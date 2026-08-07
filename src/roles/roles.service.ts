import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './entities/role.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RolesService {

    constructor(
        @InjectModel(Role)
        private roleModel : typeof Role
    ){}

    async createRole(payload: CreateRoleDto){
        const existRole = await this.roleModel.findOne({
            where:{
                name: payload.name
            }
        })
        if(existRole){
            throw new BadRequestException(
                'El Rol Ya existe'
            );
        }

        const role = await this.roleModel.create({
            ...payload
        })

        return {
            message :'Rol creado Correctamente',
            data:role
        }
    }
}
