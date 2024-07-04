import auth from "../../Firebase/FirebaseConfig"
import { formacion, users } from "../../database"
import { inscribirAlumno } from "../../helpers/alumnosHeloers"
import { response } from "../../utils"

export const InscribirManualmente = async (req, res) => {

    const { email, name, lastName, phone, cursoId } = req.body
    const userRecord = await auth.createUser({
        email: email,
        emailVerified: false,
        password: 'defaultPassword', 
        displayName: `${name} ${lastName}`,
        disabled: false
      });
    let newUser = new users({
        email: email,
        name: name,
        lastName: lastName,
        phone: phone
    })
    await newUser.save()
    let inscribirAlCurso = await inscribirAlumno(newUser._id, cursoId)
    const curso = await formacion.findById(cursoId)
        .populate({
            path: 'alumnos',
        })
        .populate({
            path: 'modulos',
            populate: [
                {
                    path: 'alumnosCursando',
                },
                {
                    path: 'alumnosFinalizados',
                },

            ]
        });
    return response(res, 200, curso);
}