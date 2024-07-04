import { response } from '../../utils';
import { getModulos } from '../../helpers/alumnosHeloers';

export default async (req, res) => {
  try {
    let allAlumnos = await getModulos();
    return response(res, 200, allAlumnos);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: 'Ocurrió un error al obtener los cursos' });
  }
};
