import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { ROLES_KEY } from './roles-auth.decorator'
import { RoleEntity } from '../roles/entities/role.entity'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ])
    if (!requiredRoles) {
      return true
    }
    const request = context.switchToHttp().getRequest()
    const user: { roles: RoleEntity[] } = request.user

    if (!user || !user.roles) {
      throw new UnauthorizedException({
        message: 'Пользователь не авторизован',
      })
    }

    return user.roles.some((role: { value: string }) =>
      requiredRoles.includes(role.value),
    )
  }
}
