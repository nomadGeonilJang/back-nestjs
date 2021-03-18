import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies') //base path
export class MoviesController {
  @Get()
  getAll() {
    return 'this is return all movies';
  }

  @Get('/search')
  search(@Query('year') year: string) {
    return 'we are searching with title ->' + year;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    console.log(movieId);
    return `this is return one movie--> ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return 'this is post request';
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return `this is delete ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      movieId,
      updateData,
    };
  }
}
