import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto } from './dto/singIn.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  signIn(@Body() payload: SignInDto) {
    return this.authService.singIn(payload);
  }
}
