// to create a nest project with te CLI use
nest new <name of app>

// We run this install command to save install postgress and the typeorm dependencies  
npm install --save @nestjs/typeorm typeorm pg

// To run migrations to the DB which is basically a sort of version control for your entities
npm install ts-node --save-dev

https://typeorm.io/#/using-cli
add the following script:
"typeorm": "node --require ts-node/register ./node_modules/typeorm/cli.js"

Then you may run the command like this:

npm run typeorm migration:run
npm run typeorm // provides an overview of all the CLI-options

If you need to pass parameter with dash to npm script, you will need to add them after --. For example, if you need to generate, the command is like this:

npm run typeorm migration:generate -- -n migrationNameHere

// Add the following scripts for easy migration generation and running
"migration:generate": "npm run build && npm run typeorm migration:generate -- -n",
"migration:run": "npm run build && npm run typeorm migration:run"

{
"type": "postgres",
"host": "localhost",
"port": 5432,
"username": "postgres",
"password": "postgres",
"database": "postgres-nestjs",
"synchronize": true,
"logging": false,
"entities": ["dist/**/*.entity{.ts,.js}"],
"migrations": ["src/migration/**/*.ts"],
"subscribers": ["src/subscriber/**/*.ts"],
"cli": {
"entitiesDir": "src/entity",
"migrationsDir": "src/migration",
"subscribersDir": "src/subscriber"
}
}

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
],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}
