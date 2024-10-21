import { Controller, Get, Post, Body, Request, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthGuard } from './auth.guard';

@Controller({ version: '1', path: 'auth' })
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signin')
    signIn(@Body() createAuthDto: CreateAuthDto) {
        return this.authService.validateUser(createAuthDto.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @Delete(':id')
    signOut(@Param('id') id: string) {
        console.log(id);
        // TODO: Remove session or invalidate token
    }
}
