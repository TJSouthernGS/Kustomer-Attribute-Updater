const axios = require("axios");
require("dotenv").config();

const countries = require("./countries.json");
const token = process.env.KUSTOMER_TOKEN;
const klass = process.env.KUSTOMER_KLASS;
const org = process.env.KUSTOMER_ORG;
const attribute = process.env.KUSTOMER_ATTRIBUTE;

async function init() {
  const metadata = await getMetadata();

  for (const country of countries) {
    metadata.properties[attribute].tree.children.push({
      id: country.code,
      displayName: country.name,
    });
  }

  let properties = {
    properties: {
      [attribute]: {
        tree: {
          children: metadata.properties[attribute].tree.children,
        },
        lastNodeRequired: false,
      },
    },
  };

  await uploadMetadata(properties);
  console.log("finished");
}

async function getMetadata() {
  console.log(`Grabbing attributes from ${org} for Klass ${klass}`);
  try {
    let sourceUrl = `https://${org}.api.kustomerapp.com/v1/metadata/${klass}`;
    let res = await axios.get(sourceUrl, {
      headers: { Authorization: "Bearer " + token },
    });

    return res.data.data.attributes;
  } catch (err) {
    console.log(err);
  }
}

async function uploadMetadata(properties) {
  console.log(`Updating attributes in ${org} for Klass ${klass}`);
  try {
    let sourceUrl = `https://${org}.api.kustomerapp.com/v1/metadata/${klass}`;
    let response = await axios.put(sourceUrl, properties, {
      headers: { Authorization: "Bearer " + token },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err.response.data);
  }
}
