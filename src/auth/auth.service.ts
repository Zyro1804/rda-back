import { BadRequestException, Injectable } from '@nestjs/common';
import { SignInDto } from './dto/singIn.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/user/entities/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async singIn(body: SignInDto) {
    const user = await this.userModel.findOne({
      where: { email: body.email },
    });

    if (!user) {
      throw new BadRequestException('Correo o contraseña incorrectos');
    }

    const passwordMatches = await bcrypt.compare(body.password, user.password);
    if (!passwordMatches) {
      throw new BadRequestException('Correo o contraseña incorrectos');
    }

    return {
      message: 'Inicio de sesión exitoso',
    };
  }
}
