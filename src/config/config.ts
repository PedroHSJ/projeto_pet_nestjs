export default () => ({
  port: 3000,
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '5432') || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
});
