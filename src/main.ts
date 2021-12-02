import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';
import { SwaggerConfig } from './configuration/swagger/swagger.config';
import * as authenticationDoc from 'express-basic-auth';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const configService = new ConfigService();
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  app.use(
    '/api/v1/docs',
    authenticationDoc({
      challenge: true,
      users: { admin: configService.get<string>('SWAGGER_PASSWOD') },
    }),
  );

  SwaggerConfig.ConfigSwaggerModule(app);

  await app.listen(3000);
}
bootstrap();
