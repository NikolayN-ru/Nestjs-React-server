import { ConnectionOptions, DataSourceOptions } from "typeorm";

const ormConfig: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'password',
    database: 'mediumclone',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    // migrations: [__dirname, '/migrations/**/*{.ts,.js}'],
    // cli: {
    //     migrationsDir: 'src/migrations',
    // },
}

export default ormConfig;