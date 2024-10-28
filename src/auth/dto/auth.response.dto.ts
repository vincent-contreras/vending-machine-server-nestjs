import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthResponseDto {
    @ApiProperty({ required: true, description: 'Bearer token for use in protected endpoints', example: 'eyJhbGciOiJIUzI1NiIs...' })
    apiKey: string;
}

export class CurrentAuthDto {
    @ApiProperty({ description: 'Unique ID for this admin session', example: 'ADMIN_1730092061372' })
    sub: string;

    @ApiProperty({ description: 'Username of logged in user', example: 'ADMIN' })
    username: string;

    @ApiProperty({ description: 'Login time of logged in user', example: 1730092061 })
    iat: number;

    @ApiProperty({ description: 'Session expiry time of logged in user', example: 1730092061 })
    exp: number;
}
