import { openai } from "./config";

export const generateQuestion = async (fileId, botId ) => {
  try {
    // Crear el hilo con el archivo adjunto
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
          attachments: [{ file_id: fileId, tools: [{ type: "file_search" }] }],
        },
      ],
    });

    // Ejecutar una carrera en el hilo
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: botId,  // Reemplaza con tu ID de asistente

    });

    // Esperar hasta que la carrera esté completa
    let runStatus;
    do {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Espera 2 segundos
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    } while (runStatus.status !== "completed");

    // Listar los mensajes del hilo utilizando el ID del hilo
    const messagesResponse = await openai.beta.threads.messages.list(thread.id);

    // Depuración: Imprimir todos los mensajes del hilo
    console.log("Mensajes del hilo:", JSON.stringify(messagesResponse.data, null, 2));

    // Buscar el mensaje del asistente
    const assistantMessage = messagesResponse.data.find(msg => msg.role === 'assistant');

    if (assistantMessage) {
        // Extraer y devolver el contenido del mensaje del asistente
        //@ts-ignore
        const responseText = assistantMessage.content.map(content => content.text.value).join("\n");
        
        // Convertir el texto JSON a un objeto JavaScript
        const responseObject = JSON.parse(responseText);
        return responseObject;
    } else {
      throw new Error('No assistant message found.');
    }
  } catch (error) {
    console.error("Error generating question:", error);
    throw error;
  }
};
