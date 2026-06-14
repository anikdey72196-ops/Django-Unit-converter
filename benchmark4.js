const { performance } = require('perf_hooks');
const JSDOM = require('jsdom').JSDOM;

let html = '<!DOCTYPE html><html><body>';
for (let i = 0; i < 10000; i++) {
  html += `<div id="dummy-${i}"></div>`;
}
html += `
  <div id="tab-length"></div>
  <div id="tab-weight"></div>
  <div id="tab-temperature"></div>
</body></html>`;

const dom = new JSDOM(html);
const document = dom.window.document;

function switchCategoryBaseline(category) {
  const categories = ['length', 'weight', 'temperature'];
  categories.forEach(cat => {
    const tab = document.getElementById(`tab-${cat}`);
    if (cat === category) {
      tab.className = "active";
    } else {
      tab.className = "inactive";
    }
  });
}

const tabElements = {
  length: document.getElementById('tab-length'),
  weight: document.getElementById('tab-weight'),
  temperature: document.getElementById('tab-temperature')
};

function switchCategoryOptimized(category) {
  const categories = ['length', 'weight', 'temperature'];
  categories.forEach(cat => {
    const tab = tabElements[cat];
    if (cat === category) {
      tab.className = "active";
    } else {
      tab.className = "inactive";
    }
  });
}

let start = performance.now();
for (let i = 0; i < 100000; i++) {
  switchCategoryBaseline('length');
  switchCategoryBaseline('weight');
  switchCategoryBaseline('temperature');
}
let end = performance.now();
console.log(`Baseline Time taken: ${end - start} ms`);

start = performance.now();
for (let i = 0; i < 100000; i++) {
  switchCategoryOptimized('length');
  switchCategoryOptimized('weight');
  switchCategoryOptimized('temperature');
}
end = performance.now();
console.log(`Optimized Time taken: ${end - start} ms`);
