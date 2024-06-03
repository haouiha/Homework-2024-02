import * as Yup from 'yup';
import { FormQuestions } from '../types/question';

const questionSchema: Record<string, Yup.StringSchema> = {};

for (let i = 1; i <= 20; i++) {
  questionSchema[`question-${i}`] = Yup.string().required('This field is required');
}

export const formQuestionsSchema = Yup.object().shape(questionSchema) as Yup.ObjectSchema<FormQuestions>;
