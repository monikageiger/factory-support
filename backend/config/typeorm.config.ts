import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/**
 * The configuration for TypeORM.
 * @type {TypeOrmModuleOptions}
 */
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'factory-support',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  /**
   * Whether to synchronize the database. Should be set to false in production.
   * @type {boolean}
   */
  synchronize: true,
};
