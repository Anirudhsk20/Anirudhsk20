let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (/^[0-9+\-*/.]$/.test(key)) {
      appendToDisplay(key);
    }
    
    if (key === 'Enter') { 
      calculate();
    }
    
    if (key === 'c') {
      clearDisplay();
    }
  })
  
