import fs from 'fs';
import path from 'path';
import { CategoryType } from '../components/types';

export const getData = (category: CategoryType) => {
  const filePath = path.join(process.cwd(), 'data', `${category}.json`);
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
};