import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { AuthModule } from './auth/auth.module'
import { CinemaModule } from './cinema/cinema.module'
import { UserModule } from './user/user.module'
import { RolesModule } from './roles/roles.module'
import { UserTokenModule } from './user-token/user-token.module'
import { Ys3Module } from './ys3/ys3.module'
import { UserEntity } from './user/entities/user.entity'
import { RoleEntity } from './roles/entities/role.entity'
import { UserRoleEntity } from './roles/entities/user-role.entitiy'
import { YS3Entity } from './ys3/entities/ys3.entity'

const entities = [UserEntity, RoleEntity, UserRoleEntity, YS3Entity]

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const isProduction = configService.get('NODE_ENV') === 'production'

        return {
          dialect: 'postgres',
          host: configService.get('DB_HOST'),
          port: isProduction ? Number(configService.get('DB_PORT')) : 5433,
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          models: entities,
          autoLoadModels: true,
          synchronize: true,
          logging: true,
          dialectOptions: {
            ssl: isProduction ? { require: true, rejectUnauthorized: false } : undefined,
          },
        }
      },
    }),
    AuthModule,
    CinemaModule,
    UserModule,
    RolesModule,
    UserTokenModule,
    Ys3Module,
  ],
})
export class AppModule {}
