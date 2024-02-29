import { HttpStatus } from '@nestjs/common'

export class ApiError extends Error {
  status: number
  errors: any[]

  constructor(status: number, message: string, errors: any[] = []) {
    super(message)
    this.status = status
    this.errors = errors
  }

  static UnauthorizedError(): ApiError {
    return new ApiError(HttpStatus.UNAUTHORIZED, 'Пользователь не авторизован')
  }

  static Forbidden(): ApiError {
    return new ApiError(HttpStatus.FORBIDDEN, 'Нет Доступа')
  }

  static BadRequest(message: string, errors: any[] = []): ApiError {
    return new ApiError(HttpStatus.BAD_REQUEST, message, errors)
  }

  static NotFound(message: string, errors: any[] = []): ApiError {
    return new ApiError(HttpStatus.NOT_FOUND, message, errors)
  }

  static InternalServerError(message: string, errors: any[] = []): ApiError {
    return new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, message, errors)
  }

  static Conflict(message: string, errors: any[] = []): ApiError {
    return new ApiError(HttpStatus.CONFLICT, message, errors)
  }

  static UnprocessableEntity(message: string, errors: any[] = []): ApiError {
    return new ApiError(HttpStatus.UNPROCESSABLE_ENTITY, message, errors)
  }
}
