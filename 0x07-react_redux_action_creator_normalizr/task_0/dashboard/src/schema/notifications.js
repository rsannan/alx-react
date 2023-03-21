import * as Notis from "../../notifications.json" assert { type: "json" };

export default function getAllNotificationsByUser(userid) {
  let contextarr = [];
  for (let obj of Notis.default) {
    if (userid === obj.author.id) {
      contextarr.push(obj.context);
    }
  }
  return contextarr;
}
const id = "5debd764a7c57c7839d722e9";
console.log(getAllNotificationsByUser(id));
