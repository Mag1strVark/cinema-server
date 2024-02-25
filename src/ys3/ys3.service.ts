import EasyYandexS3 from 'easy-yandex-s3'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class Ys3Service {
  public readonly s3: EasyYandexS3

  constructor(private readonly configService: ConfigService) {
    this.s3 = new EasyYandexS3({
      auth: {
        accessKeyId: this.configService.get<string>('ID_KEY_STORAGE'),
        secretAccessKey: this.configService.get<string>('MY_SECRET_KEY'),
      },
      Bucket: this.configService.get<string>('NAME_BUCKET'),
      debug: true,
    })
  }
}
