import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies') //base path
export class MoviesController {
  @Get()
  getAll() {
    return 'this is return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    console.log(movieId);
    return `this is return one movie--> ${movieId}`;
  }
}
