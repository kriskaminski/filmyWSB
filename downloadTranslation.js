import fetch from 'node-fetch';

import fs from 'fs';

const downloadFile = (async () => {
    const res = await fetch("https://tripetto.app/translation?l=pl&c=tripetto-runner-autoscroll", {
        "headers": {
          "accept": "*/*",
          "accept-language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7",
          "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "cookie": "session=eyJzdGFydCI6MTY0MTgwNjkwNjc2MCwiaWQiOiI3cUtoTlFQUk9nSHIwY0I2d3EwUlQwVlN5Ymh1bGVzNDFiTEVWVi9XbUFNPSJ9; token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiWGx6ZkU4TUY1QW1RUnhHbzA0NjciLCJ0eXBlIjoiYXV0aCIsImlhdCI6MTY0MTg4NzE2NywiZXhwIjoxNjQ0NTY1NTY3fQ.LIh_xB8BuDo0L_PBmFdUpg-HRcDo_tDevgnaT6y-5qI; mp_52e5e0805583e8a410f1ed50d8e0c049_mixpanel=%7B%22distinct_id%22%3A%20%2217e435148dee74-04607b42ac25a5-f791b31-1fa400-17e435148e0f79%22%2C%22%24device_id%22%3A%20%2217e435148dee74-04607b42ac25a5-f791b31-1fa400-17e435148e0f79%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D"
        },
        "referrerPolicy": "no-referrer",
        "body": null,
        "method": "GET"
      });
    const fileStream = fs.createWriteStream("pl.json");
    await new Promise((resolve, reject) => {
        res.body.pipe(fileStream);
        res.body.on("error", reject);
        fileStream.on("finish", resolve);
      });
  });

  downloadFile()