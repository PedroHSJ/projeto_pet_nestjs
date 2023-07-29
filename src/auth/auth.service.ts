import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { Repository } from 'typeorm';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
    // constructor(
    //     @InjectRepository(UsuarioEntity)
    //     private usuarioRepository: Repository<UsuarioEntity>,
    // ) {}
    // async validateUser(username: string, password: string): Promise<string> {
    //     const usuario = await this.usuarioRepository.findOne({
    //         where: {
    //             username: username,
    //         },
    //     });
    //     if (!usuario) throw new BadRequestException('Usuário não encontrado');
    //     const senhaValida = await compare(password, usuario.password);
    //     if (!senhaValida) throw new BadRequestException('Dados inválidos');
    //     const secretKey = process.env.SECRET_KEY;
    //     if (!secretKey) throw new BadRequestException('Chave não definida');
    //     const token = sign({ id: usuario.id }, secretKey, {
    //         expiresIn: '7d',
    //     });
    //     return token;
    // }
}
