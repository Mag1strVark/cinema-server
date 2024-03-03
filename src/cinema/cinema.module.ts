import { Module } from '@nestjs/common'
import { CinemaService } from './cinema.service'
import { CinemaController } from './cinema.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { CinemaEntity } from './entities/cinema.entity'
import { PlaceEntity } from './entities/place.entity'
import { ScheduleEntity } from './entities/schedule.entity'
import { ScheduleSeancesEntity } from './entities/schedule-seances.entity'
import { SeanceEntity } from './entities/seance.entity'
import { SeancePlaceEntity } from './entities/seance-place.entity'

@Module({
  controllers: [CinemaController],
  providers: [CinemaService],
  imports: [
    SequelizeModule.forFeature([
      CinemaEntity,
      PlaceEntity,
      ScheduleEntity,
      ScheduleSeancesEntity,
      SeanceEntity,
      SeancePlaceEntity,
    ]),
  ],
})
export class CinemaModule {}
