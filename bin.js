#!/usr/bin/env/node
const fetch = require('isomorphic-fetch');
const cheerio = require('cheerio');
const KIND_WORDS_ID = process.argv[2];

const URL = `https://lofichillbeats.com/kindwordsserver/?action=notifications&id=${KIND_WORDS_ID}`;

async function main() {
  console.log(`Checking Kind Words messages for: ${KIND_WORDS_ID}`);
  const response = await fetch(URL);
  const html = await response.text();

  const $ = cheerio.load(html);

  const content = $('.balloon p').text();
  console.log(content.trim());
}

main();