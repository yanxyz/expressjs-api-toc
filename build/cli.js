#!/usr/bin/env node

const fs = require('fs')
const cheerio = require('cheerio')

const ver = process.argv[2]
if (!ver) {
  console.error('please specify version: 4x or 3x')
  process.exit(1)
}

if (!['4x', '3x'].includes(ver)) {
  console.error('version should be 4x or 3x')
  process.exit(1)
}

const htmlSource = fs.readFileSync(`${ver}.html`, 'utf8')
const $ = cheerio.load(htmlSource)
const html = fs.readFileSync('./template.html', 'utf8')
  .replace('{toc}', $.html('#menu'))
  .replace('{ver}', ver.replace('x', '.x'))
fs.writeFileSync(`../docs/${ver}/index.html`, html, 'utf8')
