import axios from "axios";
import { users } from "../database";

export const sendNotifications = async (token, body, title) => {
    
try{
    let sendNotification = {
        to: token,
        title,
        body,
    }
    let user = await users.findOne({ deviceToken: token });

await user.save();
         let   sentNotifications = await axios.post("https://exp.host/--/api/v2/push/send", sendNotification, {
            headers: {
              'host': 'exp.host',
              'accept': 'application/json',
              'accept-encoding': 'gzip, deflate',
              'content-type': 'application/json',
            },
          });     

}catch(err){
return err
}
  };
  