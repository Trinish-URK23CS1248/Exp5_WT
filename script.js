const prices = {  rainbow: 300,  chocolate: 200,  redvelvet: 250,  blackforest: 350 };

const rainbowInput = document.getElementById('rainbow');
const chocolateInput = document.getElementById('chocolate');
const redvelvetInput = document.getElementById('redvelvet');
const blackforestInput = document.getElementById('blackforest');
const totalDiv = document.getElementById('total');
const orderForm = document.getElementById('orderForm');
const purchaseBtn = document.getElementById('purchaseBtn');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const orderSection = document.querySelector('.order-section');

totalDiv.style.display = 'none';

placeOrderBtn.addEventListener('click', function () {
  const rQty = parseInt(rainbowInput.value) || 0;
  const cQty = parseInt(chocolateInput.value) || 0;
  const vQty = parseInt(redvelvetInput.value) || 0;
  const bQty = parseInt(blackforestInput.value) || 0;

  const total = rQty * prices.rainbow + cQty * prices.chocolate + vQty * prices.redvelvet + bQty * prices.blackforest;

  if (total > 0) {
    totalDiv.innerText = `Total Price: Rs. ${total}`;
    totalDiv.style.display = 'block';
    totalDiv.style.background = '#27ae60';
    totalDiv.style.boxShadow = '0 8px 24px rgba(39,174,96,0.19)';
  } else {
    totalDiv.innerText = '';
    totalDiv.style.display = 'none';
    showMessage("Please enter quantity for at least one cake.", false);
  }
});

purchaseBtn.addEventListener('click', function () {
  if (totalDiv.style.display === 'block' && totalDiv.innerText) {
    showMessage("Thank you for your order! 🎉<br>Your bill: " + totalDiv.innerText, true);
    orderForm.reset();
    totalDiv.innerText = '';
    totalDiv.style.display = 'none';
  } else {
    showMessage("Place your order first before purchasing!", false);
  }
});

function showMessage(msg, success) {
  removeMessage();
  const div = document.createElement("div");
  div.className = "success-message";
  div.innerHTML = msg;
  orderSection.appendChild(div);
  setTimeout(removeMessage, 3500);
}
function removeMessage() {
  const msg = orderSection.querySelector(".success-message");
  if (msg) msg.remove();
}