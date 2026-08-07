import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor( private userService : UserService){}

    @Post('/crear_usuario')
    createUser(@Body() user : CreateUserDto){
        console.log(user)
        return this.userService.createUser(user)
    }

    @Get('/email_validar/:email')
    validEmail(@Param('email') email : string){
        return this.userService.validateEmail(email)
    }

}
