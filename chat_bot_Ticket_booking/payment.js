let ticketDetails = {
    numTickets: null,
    date: null,
    paymentMode: null,
    amount: 0,
    ticketId: null,
    paymentInfo: {}
  };
  
  // Function to display additional payment fields
  function displayPaymentDetails() {
    const paymentMode = document.getElementById('payment-mode').value;
    const paymentDetailsDiv = document.getElementById('payment-details');
    paymentDetailsDiv.innerHTML = ''; // Clear previous inputs
    document.getElementById('qr-code').innerHTML = ''; // Clear previous QR code if any
  
    if (paymentMode === 'upi') {
      paymentDetailsDiv.innerHTML = `
        <label for="upi-id">Enter UPI ID:</label>
        <input type="text" id="upi-id" placeholder="UPI ID">
      `;
    } else if (paymentMode === 'card') {
      paymentDetailsDiv.innerHTML = `
        <label for="card-number">Enter Card Number:</label>
        <input type="text" id="card-number" placeholder="Card Number">
        <label for="expiry-date">Expiry Date (MM/YY):</label>
        <input type="text" id="expiry-date" placeholder="MM/YY">
        <label for="cvv">Enter CVV:</label>
        <input type="password" id="cvv" placeholder="CVV">
      `;
    } else if (paymentMode === 'qr') {
      // Generate QR code for payment
      const qrDiv = document.getElementById('qr-code');
      qrDiv.innerHTML = ''; // Clear previous QR code
      const qrData = 'Payment of Rs. ' + ticketDetails.amount + ' for ' + ticketDetails.numTickets + ' tickets';
      const qrCode = new QRCode(qrDiv, {
        text: qrData,
        width: 128,
        height: 128
      });
    }
  }
  
  // Function to calculate the total amount
  function calculateAmount() {
    const numTickets = document.getElementById('num-tickets').value;
    ticketDetails.numTickets = numTickets;
    ticketDetails.amount = numTickets * 100; // Price calculation
  
    document.getElementById('amount-display').innerText = `Total Amount: ₹${ticketDetails.amount}`;
  }
  
  // Function to process the payment
  function processPayment() {
    ticketDetails.date = document.getElementById('date').value;
    ticketDetails.paymentMode = document.getElementById('payment-mode').value;
  
    if (ticketDetails.paymentMode === 'upi') {
      ticketDetails.paymentInfo.upiId = document.getElementById('upi-id').value;
    } else if (ticketDetails.paymentMode === 'card') {
      ticketDetails.paymentInfo.cardNumber = document.getElementById('card-number').value;
      ticketDetails.paymentInfo.expiryDate = document.getElementById('expiry-date').value;
      ticketDetails.paymentInfo.cvv = document.getElementById('cvv').value;
    }
  
    // Simulating the backend process for demonstration purposes
    setTimeout(() => {
      ticketDetails.ticketId = generateTicketId();
      displayFinalDetails();
    }, 1000); // Simulating a delay for the payment process
  }
  
  // Function to generate a unique Ticket ID
  function generateTicketId() {
    return 'TICKET-' + Math.floor(Math.random() * 1000000);
  }
  
  // Function to display final booking details
  function displayFinalDetails() {
    const finalDetails = document.getElementById('final-details');
    finalDetails.innerHTML = `
      <h3>Booking Confirmation</h3>
      <p>Ticket ID: ${ticketDetails.ticketId}</p>
      <p>Date: ${ticketDetails.date}</p>
      <p>Number of Tickets: ${ticketDetails.numTickets}</p>
      <p>Amount: ₹${ticketDetails.amount}</p>
      <p>Payment Mode: ${ticketDetails.paymentMode}</p>
    `;
  }
  