import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private jwtService: JwtService) {}

  async validateUser(password: string): Promise<any> {
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (password !== adminPassword) {
      throw new UnauthorizedException('Invalid password.');
    }

    const payload = { sub: `ADMIN_${(new Date()).valueOf()}`, username: 'ADMIN' }
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      accessToken: accessToken
    }
  }

  // TODO: Add code for logout
}
