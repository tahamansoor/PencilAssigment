
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Annotations, Question } from "../entities/question.schema";

export class CreateQuestionDto {

    @IsNotEmpty()
    @IsString()
    question: string

    @IsOptional()
    annotations: Annotations[]
}
