import { response } from "../../utils";
import {  cursoById } from "../../helpers/formacionesHelpers";

export default async (req, res) => {
    try {
   
    let curso = await cursoById(req.params.id.toString())
      return response(res, 200, curso);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Ocurrió un error al crear la formación y los módulos.' });
    }
  };