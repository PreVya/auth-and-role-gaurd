import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';

@Injectable()
export class PreAuthMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) throw new UnauthorizedException('No auth token provided');

    const token = authHeader.split(' ')[1];

    try {
      req['user'] = await this.authService.validateUser(token);
      next();
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
