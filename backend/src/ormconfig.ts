import { ConnectionOptions, DataSourceOptions } from "typeorm";

const ormConfig: DataSourceOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
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