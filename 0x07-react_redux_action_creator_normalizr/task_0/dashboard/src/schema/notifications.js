import * as Notis from "../../notifications.json";

export default function getAllNotificationsByUser(userid) {
  let contextarr = [];
  for (let obj of Notis.default) {
    if (userid === obj.author.id) {
      contextarr.push(obj.context);
    }
  }
  return contextarr;
}
