import { quizletById } from "../../helpers/formacionesHelpers"
import response from "../../utils/response"

export default async (req, res) => {

    try {        
        
        const quizletFound = await quizletById(req.params.id.toString())
        return response(res, 200, quizletFound) 

    } catch (error) {

        console.error(error);
        return res.status(400).json({ error: 'Ocurrió un error al buscar el quizlet.' });
        
    }

}