import { users } from '../../database';
import { inscribirAlumno } from '../../helpers/alumnosHeloers';
import { Email, sendEmail } from '../../helpers/sendEmails';
import { firmarToken } from '../../middlewares/jwtUtils';
import response from '../../utils/response';

export default async (req, res) => {
  const user = await users.create(req.body);
  let inscribir =
    req.body?.cursoId && (await inscribirAlumno(user._id, req.body.cursoId));
  await user.save();
  //@ts-ignore
  const toBack = await users.findById(user._id).populate({
    path: "formacion",
    populate: {
      path: "modulos",
      populate: { path: "temas" }
    }
  });

  const token = await firmarToken({ mongoId: user.id });

  return response(res, 200, { user: toBack, token: token });
};
