import fs from "fs";
import { openai } from "./config";

export const udPloadFile = async(fileUdpload, fileName) => {
    if (!fileUdpload || typeof fileUdpload !== 'string') {
        throw new Error('Invalid file path');
    }

    const fileStream = fs.createReadStream(fileUdpload);
    const response = await openai.files.create({
      file: fileStream,
      purpose: 'assistants', // Propósito adecuado para usar en asistentes
    });

    return { fileId: response.id, fileName };
};
