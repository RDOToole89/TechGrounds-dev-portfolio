import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Pet } from './entity/pet.entity';
import { Photo } from './entity/photo.entity';
import { User } from './entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Pet]),
    TypeOrmModule.forFeature([Photo]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
