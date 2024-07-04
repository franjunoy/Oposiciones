import { response } from '../../utils';
import { udPloadFile } from '../../openAiFunctions/udploadFile';
import { temas } from '../../database';

export default async (req, res) => {
  try {
    if (!req.file) {
      throw new Error('No file uploaded');
    }

    const file = req.file; // Usar req.file en lugar de req.files[0]
    console.log(file);

    let sendToOpenAiFile = await udPloadFile(file.path, file.originalname);
    let updateTheme = await temas.findById(req.params.themeId);

    updateTheme.files.push({ fileId: sendToOpenAiFile.fileId, fileName: sendToOpenAiFile.fileName });
    await updateTheme.save();

    return response(res, 200, updateTheme);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Ocurrió un error al obtener los cursos' });
  }
};