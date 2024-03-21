import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as process from 'process'
import * as express from 'express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as path from 'path'

async function bootstrap() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule)
  app.enableCors({ credentials: true, origin: process.env.CLIENT_URL })
  app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
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
