const shell = require('shelljs')
require('dotenv').config()

const inputYaml = process.env.INPUT || 'awesome-example-project-api.v1.yaml'

const langMap = {
  ts: 'typescript-axios',
  dart: 'dart',
  php: 'php-laravel',
}

const outDirMap = {
    php: `${__dirname}/generated-sources/server`,
    dart: process.env.OUT_DIR_DART,
    ts: process.env.OUT_DIR_TS,
}

const api = inputYaml
const lang = langMap[process.env.LANG]
const outputDir = outDirMap[process.env.LANG]

shell.exec(`openapi-generator generate -i ${api} -g ${lang} -o ${outputDir}`)
