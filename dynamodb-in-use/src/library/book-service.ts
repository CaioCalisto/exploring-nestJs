import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBookDto, UpdateBookDto } from './book';
import { dynamoDBClient } from '../dynamodb-client';

@Injectable()
export class BookService {
  async create(createBookDto: CreateBookDto) {
    return await dynamoDBClient()
      .put({
        TableName: process.env.TABLE_NAME,
        Item: {
          bookId: uuid(),
          title: createBookDto.title,
          author: createBookDto.author,
          publicationYear: createBookDto.publicationYear,
        },
      })
      .promise();
  }

  async findAll() {
    const results = await dynamoDBClient()
      .scan({
        TableName: process.env.TABLE_NAME,
      })
      .promise();

    return results.Items;
  }

  async findOne(bookId: string) {
    console.log(bookId, 'kakaka');
    const result = await dynamoDBClient()
      .get({
        TableName: process.env.TABLE_NAME,
        Key: { bookId },
      })
      .promise();

    return result.Item;
  }

  async update(bookId: string, updateBookDto: UpdateBookDto) {
    const updated = await dynamoDBClient()
      .update({
        TableName: process.env.TABLE_NAME,
        Key: { bookId },
        UpdateExpression:
          'set #title = :title, author = :author, publicationYear = :publicationYear',
        ExpressionAttributeNames: {
          '#title': 'title',
        },
        ExpressionAttributeValues: {
          ':title': updateBookDto.title,
          ':author': updateBookDto.author,
          ':publicationYear': updateBookDto.publicationYear,
        },
        ReturnValues: 'ALL_NEW',
      })
      .promise();

    return updated.Attributes;
  }

  async remove(bookId: string) {
    return await dynamoDBClient()
      .delete({
        TableName: process.env.TABLE_NAME,
        Key: { bookId },
      })
      .promise();
  }
}
