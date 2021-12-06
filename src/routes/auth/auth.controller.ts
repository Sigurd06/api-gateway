import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BadRequestsReponseDTO, ResponseMessageDTO } from 'src/common/dto';
import { AuthService } from './auth.service';
import { CreateUserDTO } from './dto';

@ApiTags('AUTH')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({ type: ResponseMessageDTO })
  @ApiBadRequestResponse({ type: BadRequestsReponseDTO })
  @Post('/singup')
  singup(@Body() data: CreateUserDTO) {
    return this.authService.singup(data);
  }
}
