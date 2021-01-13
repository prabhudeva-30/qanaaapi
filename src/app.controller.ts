import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}



// FROM PACKAGE JSON
// "scripts": {
//   "prebuild": "rimraf dist",
//   "build": "nest build",
//   "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
//   "start": "nest start",
//   "start:dev": "nest start --watch",
//   "start:debug": "nest start --debug --watch",
//   "start:prod": "node dist/main",
//   "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
//   "test": "jest",
//   "test:watch": "jest --watch",
//   "test:cov": "jest --coverage",
//   "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
//   "test:e2e": "jest --config ./test/jest-e2e.json"
// },