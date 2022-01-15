import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { FindQuestionDto, UpdateQuestionDto } from './dto/update-question.dto';
@Controller('question')
export class QuestionController {
  constructor(private readonly QuestionService: QuestionService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.QuestionService.create(createQuestionDto);
  }

  @Get()
  findAll() {
    return this.QuestionService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: FindQuestionDto) {
    return this.QuestionService.findOne(id.id)
  }

  @Patch(':id')
  update(@Param('id') id: FindQuestionDto, @Body() updateQuestionDto: UpdateQuestionDto) {
    return this.QuestionService.update(id.id, updateQuestionDto)
  }

  @Delete(':id')
  remove(@Param('id') id: FindQuestionDto) {
    return this.QuestionService.remove(id.id)
  }
}
