import { response } from '../../utils';

import { generateQuestion } from '../../openAiFunctions/generateQuestion';
import { temas } from '../../database';

export default async (req, res) => {
  try {

    let tema = await temas.findById(req.params.themeId)


    return response(res, 200, tema?.files ? tema?.files : []);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Ocurrió un error al obtener los cursos' });
  }
};
