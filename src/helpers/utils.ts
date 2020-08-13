import faker from 'faker';
import { User } from '../views/UserFileView/UserFileView';
import { File } from '../views/UserFileView/UserFileView';
export const generateUser = (): User => {
  const name = faker.name.firstName();
  const surname = faker.name.lastName();
  const email = `${faker.name.firstName()}@${faker.company.companyName}.com`;
  return { name, surname, email };
};

export const generateFile = (): File => {
  const filename = faker.random.word();
  const updated = faker.date.recent();
  const created = faker.date.past();
  return { filename, updated, created };
};
export const generateFiles = (count: number): File[] => {
  const files: File[] = [];
  for (let i = 0; i < count; i++) {
    files.push(generateFile());
  }
  return files;
};

export const generateUsers = (count: number): User[] => {
  const users: User[] = [];
  for (let i = 0; i < count; i++) {
    users.push(generateUser());
  }
  return users;
};
