import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  //   @Post()
  //   create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
  //     return res.status(HttpStatus.CREATED).send();
  //   }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  //   @Get()
  //   findAll(
  //     @Query() query: ListAllEntities,
  //     @Res({ passthrough: true }) res: Response,
  //   ) {
  //     return res.status(HttpStatus.OK).json([]);
  //   }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
