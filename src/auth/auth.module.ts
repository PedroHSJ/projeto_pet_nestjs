import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/entities/usuario.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioEntity])],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
