import { response } from '../../utils';
import { Formaciones, cursoById, formacionesOnlyName } from '../../helpers/formacionesHelpers';

export default async (req, res) => {
  try {
    let formacionesByName = await formacionesOnlyName()
    return response(res, 200, formacionesByName);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: 'Ocurrió un error al obtener los cursos' });
  }
};
