import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private requiredRoles: string[]) {}

  canActivate(context: ExecutionContext): boolean {
    const req: Request = context.switchToHttp().getRequest();
    const user = req['user'];

    if (!user) throw new ForbiddenException('User not authenticated');
    if (!this.requiredRoles.includes(user.role)) {
      throw new ForbiddenException(`Access denied! Requires one of: ${this.requiredRoles.join(', ')}`);
    }

    return true;
  }
}
