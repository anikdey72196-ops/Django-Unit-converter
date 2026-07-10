  // Complete mathematical system configuration
  const conversionRates = {
    length: {
      mm: { name: 'Millimeters (mm)', symbol: 'mm', factor: 0.001 },
      cm: { name: 'Centimeters (cm)', symbol: 'cm', factor: 0.01 },
      m: { name: 'Meters (m)', symbol: 'm', factor: 1.0 },
      km: { name: 'Kilometers (km)', symbol: 'km', factor: 1000.0 },
      in: { name: 'Inches (in)', symbol: 'in', factor: 0.0254 },
      ft: { name: 'Feet (ft)', symbol: 'ft', factor: 0.3048 },
      yd: { name: 'Yards (yd)', symbol: 'yd', factor: 0.9144 },
      mi: { name: 'Miles (mi)', symbol: 'mi', factor: 1609.344 }
    },
    weight: {
      mg: { name: 'Milligrams (mg)', symbol: 'mg', factor: 1e-6 },
      g: { name: 'Grams (g)', symbol: 'g', factor: 0.001 },
      kg: { name: 'Kilograms (kg)', symbol: 'kg', factor: 1.0 },
      oz: { name: 'Ounces (oz)', symbol: 'oz', factor: 0.028349523125 },
      lb: { name: 'Pounds (lb)', symbol: 'lb', factor: 0.45359237 },
      st: { name: 'Stones (st)', symbol: 'st', factor: 6.35029318 }
    },
    temperature: {
      C: { name: 'Celsius (°C)', symbol: '°C' },
      F: { name: 'Fahrenheit (°F)', symbol: '°F' },
      K: { name: 'Kelvin (K)', symbol: 'K' }
    }
  };

  // State Management
  let currentCategory = 'length';
  let history = JSON.parse(localStorage.getItem('unit_converter_history')) || [];

  // DOM Elements
  const fromValEl = document.getElementById('fromValue');
  const toValEl = document.getElementById('toValue');
  const fromUnitEl = document.getElementById('fromUnit');
  const toUnitEl = document.getElementById('toUnit');
  const formulaTextEl = document.getElementById('formulaText');
  const mathDetailsEl = document.getElementById('mathDetails');
  const swapBtnEl = document.getElementById('swapBtn');
  const historyListEl = document.getElementById('historyList');
  const historyEmptyEl = document.getElementById('historyEmpty');
  const clearHistoryEl = document.getElementById('clearHistory');
  const copyToastEl = document.getElementById('copyToast');

  // Event Listeners (Hooked up on Load)
  document.addEventListener('DOMContentLoaded', () => {
    // Input monitoring
    fromValEl.addEventListener('input', calculate);
    fromUnitEl.addEventListener('change', calculate);
    toUnitEl.addEventListener('change', calculate);

    // Auto-select text on focus for quick entry
    fromValEl.addEventListener('focus', function() { this.select(); });

    // Initialize application state
    switchCategory('length');
    renderHistory();
  });

  // Switch conversion category and update UI tabs
  function switchCategory(category) {
    currentCategory = category;

    // Handle styling of Category Tab Pills
    const tabs = document.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
      if (tab.dataset.category === category) {
        tab.className = "category-tab flex-1 min-w-[100px] flex items-center justify-center py-3.5 px-4 rounded-xl text-sm font-bold bg-blue-600 text-white shadow-lg shadow-blue-500/25 transition-all duration-200 scale-[1.02] pointer-events-none";
      } else {
        tab.className = "category-tab flex-1 min-w-[100px] flex items-center justify-center py-3.5 px-4 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/40 shadow-sm transition-all duration-200";
      }
    });

    // Re-populate dropdowns
    populateDropdowns(category);

    // Default configs for tabs
    if (category === 'length') {
      fromUnitEl.value = 'm';
      toUnitEl.value = 'ft';
    } else if (category === 'weight') {
      fromUnitEl.value = 'kg';
      toUnitEl.value = 'lb';
    } else if (category === 'temperature') {
      fromUnitEl.value = 'C';
      toUnitEl.value = 'F';
    }

    // Reset value if empty
    if (!fromValEl.value) {
      fromValEl.value = 1;
    }

    calculate();
  }

  // Populate Dropdown Menus
  function populateDropdowns(category) {
    const list = conversionRates[category];
    fromUnitEl.innerHTML = '';
    toUnitEl.innerHTML = '';

    for (const key in list) {
      const optFrom = document.createElement('option');
      optFrom.value = key;
      optFrom.textContent = list[key].name;
      fromUnitEl.appendChild(optFrom);

      const optTo = document.createElement('option');
      optTo.value = key;
      optTo.textContent = list[key].name;
      toUnitEl.appendChild(optTo);
    }
  }

  // Swap Units Logic with Rotation Animation
  function swapUnits() {
    // Spark spin animation
    swapBtnEl.classList.add('rotate-active');
    setTimeout(() => {
      swapBtnEl.classList.remove('rotate-active');
    }, 450);

    const temp = fromUnitEl.value;
    fromUnitEl.value = toUnitEl.value;
    toUnitEl.value = temp;

    // If swapping is temperature, make sure calculation handles correctly
    calculate();
  }

  // Real-Time Conversion Engine
  function calculate() {
    const val = parseFloat(fromValEl.value);

    if (isNaN(val)) {
      toValEl.value = '';
      formulaTextEl.textContent = 'Enter a valid number to start conversion';
      mathDetailsEl.textContent = '';
      return;
    }

    const fromUnit = fromUnitEl.value;
    const toUnit = toUnitEl.value;
    let result = 0;
    let formulaDesc = '';
    let mathDesc = '';

    if (currentCategory === 'temperature') {
      // Temperature conversions
      if (fromUnit === toUnit) {
        result = val;
        formulaDesc = `1 ${conversionRates.temperature[fromUnit].name} = 1 ${conversionRates.temperature[toUnit].name}`;
        mathDesc = `${val} = ${val}`;
      } else {
        // Source to Celsius
        let tempInC;
        if (fromUnit === 'C') {
          tempInC = val;
        } else if (fromUnit === 'F') {
          tempInC = (val - 32) * 5 / 9;
        } else if (fromUnit === 'K') {
          tempInC = val - 273.15;
        }

        // Celsius to Target
        if (toUnit === 'C') {
          result = tempInC;
        } else if (toUnit === 'F') {
          result = (tempInC * 9 / 5) + 32;
        } else if (toUnit === 'K') {
          result = tempInC + 273.15;
        }

        // Generate clean temperature formula strings
        if (fromUnit === 'C' && toUnit === 'F') {
          formulaDesc = `Fahrenheit = (Celsius × 9/5) + 32`;
          mathDesc = `(${val} × 1.8) + 32 = ${formatNumber(result)}`;
        } else if (fromUnit === 'F' && toUnit === 'C') {
          formulaDesc = `Celsius = (Fahrenheit - 32) × 5/9`;
          mathDesc = `(${val} - 32) × 0.555 = ${formatNumber(result)}`;
        } else if (fromUnit === 'C' && toUnit === 'K') {
          formulaDesc = `Kelvin = Celsius + 273.15`;
          mathDesc = `${val} + 273.15 = ${formatNumber(result)}`;
        } else if (fromUnit === 'K' && toUnit === 'C') {
          formulaDesc = `Celsius = Kelvin - 273.15`;
          mathDesc = `${val} - 273.15 = ${formatNumber(result)}`;
        } else if (fromUnit === 'F' && toUnit === 'K') {
          formulaDesc = `Kelvin = (Fahrenheit - 32) × 5/9 + 273.15`;
          mathDesc = `(${val} - 32) × 5/9 + 273.15 = ${formatNumber(result)}`;
        } else if (fromUnit === 'K' && toUnit === 'F') {
          formulaDesc = `Fahrenheit = (Kelvin - 273.15) × 9/5 + 32`;
          mathDesc = `(${val} - 273.15) × 1.8 + 32 = ${formatNumber(result)}`;
        }
      }
    } else {
      // Linear conversions (Length & Weight)
      const data = conversionRates[currentCategory];
      const fromFactor = data[fromUnit].factor;
      const toFactor = data[toUnit].factor;

      // Base formula: (val * fromFactor) / toFactor
      const inBaseUnit = val * fromFactor;
      result = inBaseUnit / toFactor;

      // Formula description
      const rawRatio = fromFactor / toFactor;
      const displayRatio = formatNumber(rawRatio, 6);
      formulaDesc = `1 ${data[fromUnit].symbol} ≈ ${displayRatio} ${data[toUnit].symbol}`;
      mathDesc = `${val} × ${displayRatio} = ${formatNumber(result)}`;
    }

    // Output formatted result
    toValEl.value = formatNumber(result);
    formulaTextEl.textContent = formulaDesc;
    mathDetailsEl.textContent = mathDesc;

    // Proactively save to conversion history (debounce simple key presses)
    debounceSaveToHistory(val, fromUnit, result, toUnit);
  }

  // Format Float numbers cleanly
  function formatNumber(num, maxDecimals = 6) {
    if (num === 0) return 0;
    const absNum = Math.abs(num);

    // Choose appropriate decimal precision dynamically
    let precision = maxDecimals;
    if (absNum >= 1000) precision = 2;
    else if (absNum >= 100) precision = 3;
    else if (absNum >= 1) precision = 4;
    else if (absNum >= 0.0001) precision = 6;
    else precision = 8;

    // Parse floats and remove trailing zeros
    return parseFloat(num.toFixed(precision));
  }

  // History Debounce to prevent spelling triggers
  let saveHistoryTimeout;
  function debounceSaveToHistory(val, fromUnit, result, toUnit) {
    clearTimeout(saveHistoryTimeout);
    saveHistoryTimeout = setTimeout(() => {
      saveToHistory(val, fromUnit, result, toUnit);
    }, 1500); // Wait 1.5 seconds after user stops interacting to commit to history
  }

  // Save conversion event into local storage
  function saveToHistory(val, fromUnit, result, toUnit) {
    const list = conversionRates[currentCategory];
    const categoryName = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);

    const entry = {
      id: Date.now(),
      category: currentCategory,
      categoryLabel: categoryName,
      val: val,
      fromSymbol: list[fromUnit].symbol,
      fromUnit: fromUnit,
      result: result,
      toSymbol: list[toUnit].symbol,
      toUnit: toUnit
    };

    // Filter duplicates
    history = history.filter(h => !(h.category === entry.category && h.val === entry.val && h.fromUnit === entry.fromUnit && h.toUnit === entry.toUnit));

    // Prepend and limit size to 5 items
    history.unshift(entry);
    if (history.length > 5) history.pop();

    localStorage.setItem('unit_converter_history', JSON.stringify(history));
    renderHistory();
  }

  // Render recent conversions UI
  function renderHistory() {
    historyListEl.innerHTML = '';
    if (history.length === 0) {
      historyEmptyEl.classList.remove('hidden');
      clearHistoryEl.classList.add('hidden');
      return;
    }

    historyEmptyEl.classList.add('hidden');
    clearHistoryEl.classList.remove('hidden');

    history.forEach(item => {
      const badge = document.createElement('button');
      badge.className = "text-xs font-semibold py-2 px-3.5 bg-slate-50 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-300 rounded-xl text-slate-600 hover:text-blue-700 shadow-sm flex items-center transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0";
      badge.innerHTML = `
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
        <span class="font-bold mr-1 text-slate-800">${item.categoryLabel}:</span>
        <span>${item.val} ${item.fromSymbol} → ${formatNumber(item.result)} ${item.toSymbol}</span>
      `;
      badge.onclick = () => loadHistoryItem(item);
      historyListEl.appendChild(badge);
    });
  }

  // Load selected history block
  function loadHistoryItem(item) {
    currentCategory = item.category;
    switchCategory(item.category);
    fromValEl.value = item.val;
    fromUnitEl.value = item.fromUnit;
    toUnitEl.value = item.toUnit;

    // Trigger smooth transition scroll to calculator
    document.getElementById('converter-section').scrollIntoView({ behavior: 'smooth' });
    calculate();
  }

  // Delete all local history
  function clearHistory() {
    history = [];
    localStorage.removeItem('unit_converter_history');
    renderHistory();
  }

  // Copy calculations to clipboard with animation
  function copyResult() {
    const textToCopy = `${fromValEl.value} ${conversionRates[currentCategory][fromUnitEl.value].symbol} = ${toValEl.value} ${conversionRates[currentCategory][toUnitEl.value].symbol}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Toggle Toast
      copyToastEl.style.opacity = '1';
      setTimeout(() => {
        copyToastEl.style.opacity = '0';
      }, 1500);
    }).catch(err => {
      console.error('Failed to copy to clipboard', err);
    });
  }

  // Smooth Category Scroll Links
  function triggerCategoryScroll(category) {
    switchCategory(category);
    document.getElementById('converter-section').scrollIntoView({ behavior: 'smooth' });
  }

  // Click on Popular Conversion in footer
  function triggerPopularConversion(category, fromUnit, toUnit, defaultVal) {
    switchCategory(category);
    fromUnitEl.value = fromUnit;
    toUnitEl.value = toUnit;
    if (defaultVal > 0) {
      fromValEl.value = defaultVal;
    }
    document.getElementById('converter-section').scrollIntoView({ behavior: 'smooth' });
    calculate();
  }
