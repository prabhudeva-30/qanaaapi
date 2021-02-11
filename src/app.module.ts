import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Users } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { TopicsModule } from './topics/topics.module';
import { Topics } from './topics/topics.entity';
import { Login } from './login/login.entity';
import { Question } from './topics/question.entity';
import { Steps } from './topics/steps.entity';


@Module({
  imports: [
    //   TypeOrmModule.forRoot({
    //   type:'mongodb',
    //   host:'localhost',
    //   port: 27017,
    //   username: '',
    //   password: '',
    //   database: 'test',
    //   entities: [Users, Topics],
    //   synchronize: true,
    //   autoLoadEntities: true,
    //   useNewUrlParser: true,
    //   useUnifiedTopology:true,
    // }), 
    TypeOrmModule.forRoot({
      // name: 'typeorm',
      type: 'mongodb',
      url: 'mongodb+srv://prabhu:prabhu@cluster0.f6tp2.mongodb.net/test?retryWrites=true&w=majority',
      // url: 'mongodb://prabhu:prabhu@cluster0-shard-00-00.f6tp2.mongodb.net:27017,cluster0-shard-00-01.f6tp2.mongodb.net:27017,cluster0-shard-00-02.f6tp2.mongodb.net:27017/test?ssl=true&replicaSet=atlas-uqenjl-shard-0&authSource=admin&retryWrites=true&w=majority',
      //host: 'cluster0.f6tp2.mongodb.net',
      //port: 27017,
      //username: 'prabhu',
      //password: 'prabhu',
      //database: 'test',
      // w:'majority',
      ssl: true,
      entities: [Users, Topics, Login, Question, Steps],
      synchronize: true,
      //autoLoadEntities: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // autoReconnect: true,
      // reconnectTries: Number.MAX_VALUE,
      // poolSize: 50,
      // connectTimeoutMS: 40000,
      logging: true,

    }),
     UsersModule, LoginModule, TopicsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
