import { Controller, Get, Post, Body, Request, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthGuard } from './auth.guard';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { CreateAuthResponseDto, CurrentAuthDto } from './dto/auth.response.dto';

@ApiTags('auth')
@Controller({ version: '1', path: 'auth' })
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOperation({ summary: 'Sign In', description: 'Sign in using the saved password' })
    @ApiCreatedResponse({ description: 'Successful admin login', type: CreateAuthResponseDto })
    @ApiUnauthorizedResponse({
        description: 'Invalid password',
        example: {
            message: 'Invalid password.',
            error: 'Unauthorized',
            statusCode: 401,
        },
    })
    @Post('login')
    signIn(@Body() createAuthDto: CreateAuthDto) {
        return this.authService.validateUser(createAuthDto.password);
    }

    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get logged in user', description: 'Retrieves currently logged in user' })
    @ApiOkResponse({ type: CurrentAuthDto, description: 'Details of currently logged in user' })
    @ApiUnauthorizedResponse({
        description: 'User is not authenticated',
        example: {
            error: 'Unauthorized',
            statusCode: 401,
        },
    })
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @ApiOperation({ summary: 'Log out', description: 'Log out' })
    @Delete(':id')
    signOut(@Param('id') id: string) {
        console.log(id);
        // TODO: Remove session or invalidate token
    }
}
