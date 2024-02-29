import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as process from 'process'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule)
  app.enableCors({ credentials: true, origin: process.env.CLIENT_URL })
  app.use(cookieParser())
  const config = new DocumentBuilder()
    .setTitle('Кинотеатр')
    .setDescription('Документация REST API')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)
  await app.listen(PORT, () => console.log(`server started on port = ${PORT}`))
}
bootstrap()
