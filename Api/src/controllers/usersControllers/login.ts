
import { response } from "../../utils";
import { ClientError } from "../../utils/errors";

import { users } from "../../database";
import { firmarToken } from "../../middlewares/jwtUtils";


export default async (req, res) => {

  const {email, token2} = req.body
  //@ts-ignore
  const user = await users.findOne({ email }).populate({
    path: "formacion",
    populate: {
      path: "modulos",
      populate: { path: "temas" }
    }
  });

  if (!user) {
      response(res,400,{error: "Usuario no existe"})

  } else {
    const token =await  firmarToken({  mongoId: user.id })
    user.deviceToken = token2
    await user.save()
     return response(res,200,{user: user, token: token})

  }
  };