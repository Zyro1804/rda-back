import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.model';
import * as bcrypt from 'bcrypt'


@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel : typeof User
    ){}

    async createUser(createUserDto: CreateUserDto) {
        const existUser = await this.userModel.findOne({
            where: {
            email: createUserDto.email,
            },
        });
        if (existUser) {
            throw new BadRequestException(
            'El correo ya está registrado',
            );
        }
         const existe = await this.userModel.findOne({
            where: {
            numero_telefono: createUserDto.numero_telefono,
            },
        });

        if (existe) {
            throw new BadRequestException(
            'El número de teléfono ya está registrado.',
            );
        }
        const hashedPassword = await bcrypt.hash(
            createUserDto.password,
            10,
        );

        const user = await this.userModel.create({
            ...createUserDto,
            password: hashedPassword,
        });
        console.log('Usuario creado', user)

        return {
            message: 'Usuario creado correctamente',
        };
    }

    async validateEmail(email : string){
        const exist = await this.userModel.findOne({
            where: {
                email: email
            }
        })
        if (!exist) {
            throw new BadRequestException(
            'El correo no esta registrado',
            );
        }
        return {
            message : 'Correo validado'
        }
    }
}
