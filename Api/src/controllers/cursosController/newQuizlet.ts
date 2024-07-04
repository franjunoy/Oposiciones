import { crearQuizletEnTema } from "../../helpers/formacionesHelpers"
import response from "../../utils/response"

export default async (req,res) => {

    try {
        
        const { themeId, quizlet } = req.body 
        const newQuizlet = await crearQuizletEnTema(themeId, quizlet)
        return response(res, 200, newQuizlet);

    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: 'Ocurrió un error al crear el quizlet.' });
    }

}