import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { disconnect } from 'mongoose';

const testDtoTag: any = {
  "title": "test-yarn_4!!"
}

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let creratedTitle: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // it('/yarn/tag (POST)', async (done) => {
  //   // it('/yarn/tag (POST)', (done) => {
  //   return request(app.getHttpServer())
  //     .post('/yarn/tag')
  //     .send(testDtoTag)
  //     .expect(201)
  //     .then(({ body }: request.Response) => {
  //       creratedTitle = body.title;
  //       expect(creratedTitle).toBeDefined(); // проверяем чтобы был test-yarn
  //       done();

  //     });
  // });


  it('/yarn/tags (GET)', () => {
    // it('/yarn/tag (POST)', (done) => {
    return request(app.getHttpServer())
      .get('/yarn/tags')
      .expect(200)
  });

  afterAll(() => {
    disconnect();
  });

});
