import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from 'src/dto/auth.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/usuario')
    async loginUsuario(@Body() auth: AuthDTO): Promise<{ token: string }> {
        const token = await this.authService.validateUser(
            auth.username,
            auth.password,
        );
        return { token };
    }
}
