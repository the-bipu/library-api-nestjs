import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    const htmlFilePath = join(__dirname, '..', 'views', 'index.html');
    const htmlContent = readFileSync(htmlFilePath, 'utf-8');
    return htmlContent;
  }
}
