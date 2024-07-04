import OpenAI from 'openai';
import { openAiApi } from '../config/env';

export const openai = new OpenAI({
  apiKey: openAiApi,

  
});
