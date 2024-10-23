import {Controller, Get, Param} from '@nestjs/common';

@Controller('houses')
export class HousesController {
  @Get()
  findAll(): string {
    return 'it should return all houses';
  }

  @Get("natalia")
  findOne(@Param("id") id: number) {
    return 'casa da Natalia';
  }
}
