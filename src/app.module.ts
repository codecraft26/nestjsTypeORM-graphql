import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Server } from 'http';
import { AppResolver } from './app.resolver';
import { BookModule } from './book/book.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), "src/schema.graphql")
      // typePaths:["./**/*.graphql"]
      ,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts')
      }
    }),

    TypeOrmModule.forRoot({
      type: 'postgres'
      ,
      host:'localhost',
      port: 5432

      

      , username: 'postgres'
      ,
      password: "niteg"
      ,
      database: "test_db"
      ,
      
      entities: [__dirname + '/**/*enitity{.ts,.js}'],
      synchronize:true      
    }),

    BookModule,



  ],
  providers: [AppResolver],
})
export class AppModule { }
