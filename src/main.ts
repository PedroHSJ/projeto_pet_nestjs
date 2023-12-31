import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Pet API - Plataforma de Gestão de Pets Amigável e Versátil')
        .setDescription(
            'A PetPaws API é uma solução completa para gerenciamento de pets projetada para facilitar a vida de proprietários de animais de estimação, clínicas veterinárias e pet shops. Com uma interface amigável e versátil, nossa API oferece uma ampla gama de recursos e funcionalidades para cuidar dos nossos queridos amigos de quatro patas.',
        )
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(process.env.PORT ?? '3000', '0.0.0.0');
}
bootstrap();
