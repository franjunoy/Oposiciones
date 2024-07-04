import { openai } from "./config"
import { openVectorStore } from "./openVectorStore";


export const generateBot = async ( BotName) => {
  const assistant = await openai.beta.assistants.create({
    name: BotName,
    instructions: "Si recibes la palabra generar, genera una pregunta en base a la información dada, y 3 respuestas (1 correcta y 2 incorrectas) tipo quizlet junto a un texto explicando la pregunta y la respuesta. Responde todo esto solamente en 1 objeto JSON que sea: {pregunta: valor, respuesta: valor, respuestafalsa: valor, respuestafalsa2: valor, explicacion: valor}. No respondas explicacion ni nada, solamente el objeto solicitado.",
    tools: [{ type: "file_search" }],
    model: "gpt-3.5-turbo"
  });
  const thread = await openai.beta.threads.create({
    messages: [
      {
        role: "user",
        content: `En base a este documento, crea una pregunta tipo test que cumpla con los siguientes requisitos:
                  1. La pregunta debe estar basada en el contenido del documento.
                  2. Proporciona 3 respuestas, una de ellas debe ser correcta y las otras dos incorrectas.
                  3. Devuelve la pregunta y las respuestas en el siguiente formato JSON:
                  quizlet = {
                    pregunta: "pregunta generada",
                    respuestaPositiva: "respuesta correcta",
                    respuestaNegativa1: "respuesta incorrecta 1",
                    respuestaNegativa2: "respuesta incorrecta 2",
                    explicacion: "explicación de la respuesta correcta"
                  }
                  Asegúrate de que el formato del JSON es exacto y no contiene información adicional.`,
                  model: "gpt-4o",

        attachments: [{  tools: [{ type: "file_search" }] }],
      },
    ],
  });
console.log("bot", assistant, "hilo", thread)
  return { botId: assistant.id, conversacionId: thread.id};
};


