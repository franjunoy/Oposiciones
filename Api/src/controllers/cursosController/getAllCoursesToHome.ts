import { response } from '../../utils';
import { Formaciones, cursoById } from '../../helpers/formacionesHelpers';

export default async (req, res) => {
  try {
    let cursosListaHome = await Formaciones();
    return response(res, 200, cursosListaHome);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: 'Ocurrió un error al obtener los cursos' });
  }
};
