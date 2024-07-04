import { response } from "../../utils";
import { formacion} from "../../database";
import { crearFormacion, crearModulosYTemas } from "../../helpers/formacionesHelpers";

export default async (req, res) => {
    try {
      const { nombreFormacion, descripcionFormacion, modulos } = req.body;
  
      const nuevaFormacion = await crearFormacion(nombreFormacion, descripcionFormacion);
  
      const modulosCreados = await crearModulosYTemas(modulos, nuevaFormacion._id);
  
      nuevaFormacion.modulos = modulosCreados.map((modulo) => modulo._id);
      await nuevaFormacion.save();
  
      const cursoCompleto = await formacion.findById(nuevaFormacion._id)
        .populate({
          path: 'modulos',
          populate: {
            path: 'temas'
          }
        })
        .exec();
  
      return response(res, 200, cursoCompleto);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Ocurrió un error al crear la formación y los módulos.' });
    }
  };