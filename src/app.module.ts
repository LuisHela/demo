import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'process';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal:true,envFilePath:['.local.env']}),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(configService:ConfigService)=>({
        type:'mysql',
        host:configService.get("DATABASE_HOST"),
        port:configService.get<number>("DATABASE_PORT"),
        username:configService.get("DATABASE_USERNAME"),
        synchronize:configService.get<boolean>("DATABASE_SYNC"),
        logging:configService.get<boolean>("DATABASE_LOGGING"),
        database:configService.get("DATABASE_NAME"),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      })
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

