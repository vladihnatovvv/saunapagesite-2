// Pricing table for base rates (per hour)
// Indexed by [serviceType][period (0=weekday, 1=weekend)][people count - 2]
// For people 2-10
const pricingTable = {
  vip: {
    weekday: [30.00, 36.00, 44.00, 50.00, 54.00, 60.00, 64.00, 68.00, 70.00],  // 2-10 people per hour
    weekend: [40.00, 45.00, 50.00, 55.00, 60.00, 63.00, 68.00, 72.00, 75.00]   // 2-10 people per hour
  },
  lux: {
    weekday: [25.00, 33.00, 36.00, 40.00, 45.00, 49.00, 52.00, 54.00, 60.00],  // 2-10 people per hour
    weekend: [30.00, 36.00, 44.00, 50.00, 54.00, 60.00, 64.00, 68.00, 70.00]   // 2-10 people per hour
  },
  drovami: {
    weekday: [40.00, 45.00, 50.00, 55.00, 60.00, 63.00, 68.00, 72.00, 75.00],  // 2-10 people per hour
    weekend: [42.00, 51.00, 54.00, 60.00, 66.00, 70.00, 72.00, 76.00, 80.00]   // 2-10 people per hour
  },
  mix: {
    weekday: [55.00, 63.00, 68.00, 75.00, 83.00, 88.00, 92.00, 96.00, 100.00],  // 2-10 people per hour
    weekend: [63.00, 68.00, 75.00, 83.00, 88.00, 92.00, 96.00, 100.00, 12.50]   // 2-10 people per hour
  }
};

// Additional pricing
const EXTRA_ADULT_PRICE = 12.50;
const CHILD_6_12_PRICE = 6.25;
const BANSHCHIK_PRICE = 12.50;
const BIRCH_VENIKI_PRICE = 9.00;
const OAK_VENIKI_PRICE = 10.00;

// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('saunaCalculator');
  
  if (!form) {
    console.error('✗ Form #saunaCalculator not found in DOM');
    return;
  }
  
  const bookButton = document.getElementById('bookButton');
  
  // Add event listeners to all input elements
  const inputs = form.querySelectorAll('input[type="number"], input[type="radio"]');
  inputs.forEach(input => {
    input.addEventListener('change', calculateTotal);
    input.addEventListener('input', calculateTotal);
  });
  
  // Add event listeners to counter buttons
  const counterBtns = form.querySelectorAll('.counter-btn');
  counterBtns.forEach(btn => {
    btn.addEventListener('click', handleCounterButton);
  });
  
  // Book button event
  if (bookButton) {
    bookButton.addEventListener('click', function(e) {
      e.preventDefault();
      // Trigger callback form or booking
      const callbackBtn = document.querySelector('.call-back-btn');
      if (callbackBtn) callbackBtn.click();
    });
  }
  
  // Initial calculation
  calculateTotal();
});

function handleCounterButton(e) {
  e.preventDefault();
  const btn = e.target;
  const fieldId = btn.getAttribute('data-for');
  const input = document.getElementById(fieldId);
  
  if (!input) return;
  
  let value = parseInt(input.value) || 0;
  
  if (btn.classList.contains('counter-plus')) {
    value++;
  } else if (btn.classList.contains('counter-minus')) {
    value = Math.max(0, value - 1);
  }
  
  input.value = value;
  calculateTotal();
}

function calculateTotal() {
  // Get form values
  const serviceType = document.querySelector('input[name="serviceType"]:checked').value;
  const period = document.querySelector('input[name="period"]:checked').value;
  const adultsCount = Math.max(2, parseInt(document.getElementById('adultsCount').value) || 0);
  const childrenOld = Math.max(0, parseInt(document.getElementById('childrenOld').value) || 0);
  const childrenYoung = Math.max(0, parseInt(document.getElementById('childrenYoung').value) || 0);
  const banshchikCount = Math.max(0, parseInt(document.getElementById('banshchikCount').value) || 0);
  const birchVeniki = Math.max(0, parseInt(document.getElementById('birchVeniki').value) || 0);
  const oakVeniki = Math.max(0, parseInt(document.getElementById('oakVeniki').value) || 0);
  
  // Get hours with minimum requirements
  let hours = parseInt(document.getElementById('hours').value) || 2;
  
  // Enforce minimum hours: 2 hours minimum, 3 hours for 3+ people
  if (adultsCount >= 3) {
    hours = Math.max(3, hours);
  } else {
    hours = Math.max(2, hours);
  }
  
  // Update hours field to reflect minimum
  document.getElementById('hours').value = hours;
  
  // Calculate hourly price per person
  let hourlyPrice = getBasePrice(serviceType, period, adultsCount);
  
  // Calculate base price for all hours
  let basePrice = hourlyPrice * hours;
  
  // Calculate extra adults (more than 10)
  let extraAdultsPrice = 0;
  if (adultsCount > 10) {
    extraAdultsPrice = (adultsCount - 10) * EXTRA_ADULT_PRICE * hours;
  }
  
  // Calculate children 6-12 price
  let childrenPrice = childrenOld * CHILD_6_12_PRICE * hours;
  
  // Calculate additional services
  let banshchikPrice = banshchikCount * BANSHCHIK_PRICE * hours;
  let birchVenikiPrice = birchVeniki * BIRCH_VENIKI_PRICE * hours;
  let oakVenikiPrice = oakVeniki * OAK_VENIKI_PRICE * hours;
  
  // Total calculation
  const totalPrice = basePrice + extraAdultsPrice + childrenPrice + banshchikPrice + birchVenikiPrice + oakVenikiPrice;
  
  // Update display
  updateDisplay(
    basePrice,
    extraAdultsPrice,
    childrenPrice,
    banshchikPrice,
    birchVenikiPrice,
    oakVenikiPrice,
    totalPrice,
    hours
  );
}

function getBasePrice(serviceType, period, adultsCount) {
  // Ensure count is within valid range for table lookup (2-10)
  // Table is indexed 0-8 for people 2-10
  const tableIndex = Math.min(Math.max(adultsCount - 2, 0), 8);
  
  // Get price from table based on service type and period
  const price = pricingTable[serviceType][period][tableIndex];
  
  return price;
}

function updateDisplay(
  basePrice,
  extraAdultsPrice,
  childrenPrice,
  banshchikPrice,
  birchVenikiPrice,
  oakVenikiPrice,
  totalPrice,
  hours
) {
  // Update base price with hours info
  document.getElementById('basePrice').textContent = formatPrice(basePrice) + ' (' + hours + ' ч.)';
  
  // Update and show/hide extra adults row
  if (extraAdultsPrice > 0) {
    document.getElementById('extraAdultsRow').style.display = 'flex';
    document.getElementById('extraAdultsPrice').textContent = formatPrice(extraAdultsPrice);
  } else {
    document.getElementById('extraAdultsRow').style.display = 'none';
  }
  
  // Update and show/hide children row
  if (childrenPrice > 0) {
    document.getElementById('childrenRow').style.display = 'flex';
    document.getElementById('childrenPrice').textContent = formatPrice(childrenPrice);
  } else {
    document.getElementById('childrenRow').style.display = 'none';
  }
  
  // Update and show/hide banshchik row
  if (banshchikPrice > 0) {
    document.getElementById('banshchikRow').style.display = 'flex';
    document.getElementById('banshchikPrice').textContent = formatPrice(banshchikPrice);
  } else {
    document.getElementById('banshchikRow').style.display = 'none';
  }
  
  // Update and show/hide birch veniki row
  if (birchVenikiPrice > 0) {
    document.getElementById('birchVenikiRow').style.display = 'flex';
    document.getElementById('birchVenikiPrice').textContent = formatPrice(birchVenikiPrice);
  } else {
    document.getElementById('birchVenikiRow').style.display = 'none';
  }
  
  // Update and show/hide oak veniki row
  if (oakVenikiPrice > 0) {
    document.getElementById('oakVenikiRow').style.display = 'flex';
    document.getElementById('oakVenikiPrice').textContent = formatPrice(oakVenikiPrice);
  } else {
    document.getElementById('oakVenikiRow').style.display = 'none';
  }
  
  // Update total
  document.getElementById('totalPrice').textContent = formatPrice(totalPrice);
}

function formatPrice(price) {
  return price.toFixed(2) + ' €';
}
