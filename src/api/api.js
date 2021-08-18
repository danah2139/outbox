import axios from "axios";
//import API_KEY from "./API_KEY";

// export default axios.create({
//   baseURL: "https://allsportsapi.com/api/basketball/?",
//   params: {
//     APIkey: API_KEY,
//     leagueId: 787,
//     standing_team: "Chicago Bulls",
//     met: "Standings",
//   },
// });

export default axios.create({
  baseURL:
    "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/global?",
  params: { country: "Israel" },
});
