import { Body, Controller, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {

    constructor(
        private roleService : RolesService
    ){}

    @Post('/create')
    createRole(@Body() payload : CreateRoleDto){
        console.log(payload)
        return this.roleService.createRole(payload)
    }
}
