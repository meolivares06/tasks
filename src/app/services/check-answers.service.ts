import { Injectable } from '@angular/core';
import Groq from 'groq-sdk';
import { Question } from '../models';
const groq = new Groq({
  apiKey: import.meta.env.NG_APP_API_KEY || '',
  dangerouslyAllowBrowser: true,
});
@Injectable({
  providedIn: 'root',
})
export class CheckAnswersService {
  async main(
    answer: Record<string, string>,
    content: string,
    questions: Question[],
  ): Promise<string> {
    // return Promise.resolve(JSON.stringify({r: 'ok'}));

    let payload: string = '';
    questions.forEach((q) => {
      payload += `Question ${q.index}: [${q.question}]`;
      payload += `\nAnswer: [${answer[`question${q.index}`]}]`;
      payload += `\n\n`;
    });

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content:
            'com base neste conhecimento: ' +
            limpiarCadena(content) +
            'evalua estas respuestas' +
            '\n\n' +
            payload +
            +'\n ',
        },
        {
          role: 'user',
          content:
            'Evalua que las respuestas sean completas, No es necesario que sean textualmente el contenido, solo que contengan en cada caso los elementos claves. Y siempre explica las causas cuando no se obtubo el maximo de puntos',
        },
        {
          role: 'user',
          content:
            'la respuesta debe ser un array con elementos con las claves: questionNumer, evaluation, details. Devuelve la respuesta en json y en idioma portugues\n',
        },
        {
          role: 'user',
          content:
            'Para la evaluacion crea una escala numerica de 0 a 10. en details menciona una valoracion de la respuesta. Si no hay respuesta la evaluacion es 0. Si la pregunta contiene por que debe ser evaluado tambien',
        },
      ],
      // model: 'mixtral-8x7b-32768',
      model: 'llama3-70b-8192',
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
      response_format: {
        type: 'json_object',
      },
      stop: null,
    });

    const response = chatCompletion.choices[0]?.message?.content || '';
    // for await (const chunk of chatCompletion) {
    //   // @ts-ignore
    //   response += chunk.choices[0]?.delta?.content || '';
    // }

    return response;
    // return Promise.resolve('ok');
  }
}
function limpiarCadena(cadena: string): string {
  // 1. Eliminar etiquetas HTML
  const cadenaSinEtiquetas = cadena.replace(/<[^>]*>/g, ' ');

  // 2. Eliminar caracteres que no sean letras, punto o coma
  //const cadenaLimpia = cadenaSinEtiquetas.replace(/[^a-zA-Z.,]/g, " ");

  return cadenaSinEtiquetas;
}

// Ejemplos de uso
// const cadenaConEtiquetas = "<p>Hola, esto es un <b>ejemplo</b>.</p>";
// const cadenaConCaracteresEspeciales = "¡Hola! ¿Qué tal?";

// console.log(limpiarCadena(cadenaConEtiquetas)); // Output: Hola, esto es un ejemplo.
// console.log(limpiarCadena(cadenaConCaracteresEspeciales)); // Output: Hola Que tal

// Explicación del código:

// 1. Eliminar etiquetas HTML
//    - Se utiliza una expresión regular para encontrar todas las etiquetas HTML (`<[^>]*>`)
//    - Se reemplazan las etiquetas encontradas con una cadena vacía (`""`), eliminándolas efectivamente.

// 2. Eliminar caracteres que no sean letras, punto o coma
//    - Se utiliza otra expresión regular para encontrar todos los caracteres que no sean letras (a-z, A-Z), un punto (`.`) o una coma (`,`).
//    - Se reemplazan los caracteres no deseados con una cadena vacía (`""`).

// La función `limpiarCadena` toma una cadena como argumento y devuelve la cadena limpia, sin etiquetas HTML ni caracteres no deseados.
