const SHEET_ID = '1Z9WOaTbtrk54xzYZxjo_gdP2Xbf7AsWZuThs49vi53';
const API_KEY = 'YOUR_API_KEY';
const RANGE = 'Sheet1'; // Adjust range

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    // Process data.rows into products array
  });