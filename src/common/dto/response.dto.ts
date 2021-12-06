import { ApiProperty } from '@nestjs/swagger';

export class ResponseMessageDTO {
  @ApiProperty()
  message: string;

  @ApiProperty()
  status: number;
}

class ErrorDTO {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;

  @ApiProperty()
  error: string;
}
export class BadRequestsReponseDTO {
  @ApiProperty()
  time: Date;

  @ApiProperty()
  path: string;

  @ApiProperty()
  error: ErrorDTO;
}
