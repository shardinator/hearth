async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors(); // Allow frontend to make requests
    await app.listen(3000);
  }
  bootstrap();