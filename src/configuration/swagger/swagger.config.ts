import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  public static ConfigSwaggerModule(app: INestApplication): void {
    let configService = new ConfigService();

    const setting = new DocumentBuilder()
      // .addBearerAuth()
      .setTitle('API GATEWAY')
      .setDescription('gateway service')
      .setVersion(configService.get<string>('SWAGGER_VERSION'))
      .build();

    const document = SwaggerModule.createDocument(app, setting);
    SwaggerModule.setup('api/v1/docs', app, document, {
      customCssUrl:
        'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.1/themes/3.x/theme-material.css',
      explorer: true,
      swaggerOptions: {
        filter: true,
        showRequestDuration: true,
      },
    });
  }
}
