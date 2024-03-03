import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { AuthModule } from './auth/auth.module'
import { CinemaModule } from './cinema/cinema.module'
import { UserModule } from './user/user.module'
import { UserTokenModule } from './user-token/user-token.module'
import { UserEntity } from './user/entities/user.entity'
import { CinemaEntity } from './cinema/entities/cinema.entity'
import { PlaceEntity } from './cinema/entities/place.entity'
import { ScheduleEntity } from './cinema/entities/schedule.entity'
import { ScheduleSeancesEntity } from './cinema/entities/schedule-seances.entity'
import { SeanceEntity } from './cinema/entities/seance.entity'
import { SeancePlaceEntity } from './cinema/entities/seance-place.entity'

const entities = [
  UserEntity,
  CinemaEntity,
  PlaceEntity,
  ScheduleEntity,
  ScheduleSeancesEntity,
  SeanceEntity,
  SeancePlaceEntity,
]

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
          port: isProduction ? Number(configService.get('DB_PORT')) : 5432,
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
    UserTokenModule,
  ],
})
export class AppModule {}
