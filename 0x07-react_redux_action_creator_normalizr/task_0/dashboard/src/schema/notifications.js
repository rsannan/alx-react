import * as Notis from "../../notifications.json" assert { type: "json" };

export default function getAllNotificationsByUser(userid) {
  let contextarr = [];
  for (let obj of Notis.default) {
    if (userid === obj.id) {
      console.log("test");
      console.log(obj.context);
    }
  }
}

getAllNotificationsByUser("5debd764a7c57c7839d722e9");
