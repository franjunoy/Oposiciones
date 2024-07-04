import { response } from "../../utils";
import { crearTemasEnModulo } from "../../helpers/formacionesHelpers";

export default async (req, res) => {
    try {

        const { moduloActualizar } = req.body;
        const temasNuevos = crearTemasEnModulo(moduloActualizar)  
        return response(res, 200, temasNuevos);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Ocurrió un error al crear la formación y los módulos.' });
    }
  };