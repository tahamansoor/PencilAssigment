import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question, QuestionDocument } from './entities/question.schema';

@Injectable()
export class QuestionService {
  constructor(@InjectModel(Question.name) private QuestsionModel: Model<QuestionDocument>) {}

  async create(createQuestionDto: CreateQuestionDto) {
    
    return await this.QuestsionModel.create(createQuestionDto)
  }

  async findAll() {
    return await this.QuestsionModel.find();
  
  }

  async findOne(id: Types.ObjectId) {
    return await this.QuestsionModel.findById(id);
  
  }

  async update(id: Types.ObjectId, updateQuestionDto: UpdateQuestionDto) {
 
      return await this.QuestsionModel.findByIdAndUpdate(id, updateQuestionDto)

  }

  async remove(id: Types.ObjectId) {
      return await this.QuestsionModel.deleteOne(id);
  }
}
