# Kustomer Attribute Updater

This scripts intended purpose is to load a list of countries in JSON format into an attribute within Kustomer. It is not re-usable for circumstances outside of this, however, could be modified to support other use cases.

## Initial Setup

- Ensure you have Node JS installed on your machine. [Download Link](https://nodejs.org/en/download)
- Unzip the project and open a terminal within the unzipped directory
- Run `npm install` to install all package dependancies
- Configure the `.env` file to match your Kustomer org, klass, token and attribute

## ENV Example

Open the `.env` file in your preferred text editor and you will see the following:

```
KUSTOMER_TOKEN=
KUSTOMER_KLASS=
KUSTOMER_ORG=
KUSTOMER_ATTRIBUTE=
```

Filled out Example:

```
KUSTOMER_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDI5N2E2ZTQyZjNiM2Y3ZjIwOGRlNiIsInVzZXIiOiI2NGQASdawdw!#@#Hghfh
KUSTOMER_KLASS=conversation
KUSTOMER_ORG=osprey-emea-sandbox
KUSTOMER_ATTRIBUTE=countryCodeTree
```

KUSTOMER_ORG: The subdomain you use for the target Kustomer instance.
KUSTOMER_ATTRIBUTE: The database name for the created tree field.

## Running the Script

- Configure the .env file
- CD to the project directory
- Run `node index.js`
