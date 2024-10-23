import { Connection } from 'mongoose';
import { ComputerSchema} from "./computer.schema";

export const computerProviders = [
  {
    provide: 'COMPUTER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Computer', ComputerSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
