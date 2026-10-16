const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('Unit_converter/templates/index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: "dangerously" });
const window = dom.window;

// To make sure all is initialized
setTimeout(() => {
  const start = performance.now();
  for (let i = 0; i < 10000; i++) {
    window.switchCategory('weight');
    window.switchCategory('length');
  }
  const end = performance.now();
  console.log(`Baseline Time taken: ${end - start} ms`);
}, 100);
