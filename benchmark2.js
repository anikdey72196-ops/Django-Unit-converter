const { performance } = require('perf_hooks');

const JSDOM = require('jsdom').JSDOM;
const dom = new JSDOM(`<!DOCTYPE html>
<html>
<body>
  <div id="tab-length"></div>
  <div id="tab-weight"></div>
  <div id="tab-temperature"></div>
</body>
</html>`);
const document = dom.window.document;

function switchCategory(category) {
  const categories = ['length', 'weight', 'temperature'];
  categories.forEach(cat => {
    const tab = document.getElementById(`tab-${cat}`);
    if (cat === category) {
      tab.className = "flex-1 min-w-[100px] flex items-center justify-center py-3.5 px-4 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 transition-all duration-200 scale-[1.02] pointer-events-none";
    } else {
      tab.className = "flex-1 min-w-[100px] flex items-center justify-center py-3.5 px-4 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/40 shadow-sm transition-all duration-200";
    }
  });
}

const start = performance.now();
for (let i = 0; i < 10000; i++) {
  switchCategory('length');
  switchCategory('weight');
  switchCategory('temperature');
}
const end = performance.now();
console.log(`Baseline Time taken: ${end - start} ms`);
