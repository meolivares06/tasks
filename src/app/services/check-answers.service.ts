import { Injectable } from '@angular/core';
import Groq from 'groq-sdk';
const groq = new Groq({ apiKey: import.meta.env.NG_APP_API_KEY,  dangerouslyAllowBrowser: true});
@Injectable({
  providedIn: 'root'
})
export class CheckAnswersService {

  async main(answer: string) {
    const dataQuestion1 = "A palavra batismo vem do grego baptizo e significa imergir, afundar. somos batistas porque batizamos imergindo as pessoas. O nome batista vem da palavra batismo, e a palavra batismo significa imergir.";
    const question1 = "O que significa a palavra batismo?";
    const chatCompletion = await groq.chat.completions.create({
      "messages": [
        {
          "role": "user",
          "content": "com base neste conhecimento: "+ dataQuestion1 +"\n\nA pergunta: "+ question1+ "\nResposta: "+answer+"\n sim e correto responde 'ok', sim não 'bad'"
        }
      ],
      "model": "llama3-70b-8192",
      "temperature": 1,
      "max_tokens": 1024,
      "top_p": 1,
      "stream": true,
      "stop": null
    });
    let response = ''
    for await (const chunk of chatCompletion) {
      // @ts-ignore
      response += chunk.choices[0]?.delta?.content || '';
    }

    return response
  }

}
