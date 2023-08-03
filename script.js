// Set variable for BTC Price
let btcPrice = 40000;

// Fetch current BTC Price from Coindesk API
async function getBTCPrice() {
  try {
    var response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    var data = await response.json();
    btcPrice = data.bpi.USD.rate_float;
  } catch (error) {
    console.error("Error fetching BTC price:", error);
  }
}

// Invoke BTC Price Fetch
getBTCPrice();



// Function to shuffle and display a random product
function shuffle() {
  document.querySelector("#orText").innerText = "="
  document.querySelector("#or").style.display = "flex"
  // Identify HTML Elements
  var shuffleButton = document.getElementById("shuffle");
  var product = document.getElementById("stupid");
  var currentPrice = document.getElementById("amount");
  var productImage = document.getElementById("productImage");
  var historics = document.getElementById("historical");
  var shuffleSub = document.getElementById("shuffleSub");
  var buttonPhrases = ["შემდეგი"];
  document.getElementById('fuckin').innerText = ""


  document.querySelector("#more").style.display = "none";
  document.querySelector("#have").innerText = "გექნებოდა";

  shuffleButton.innerText = "...";
  shuffleButton.disabled = true;
  shuffleSub.innerText = "";

  if (productArray.length == 0) {
    // shuffleButton.disabled = true;
    // buyBitcoin();
    // Reset the productArray to its original state
    resetProductArray();
    // shuffleButton.innerText = "თავიდან";
    shuffleButton.disabled = false
    // document.querySelector("#all").innerHTML = `
    // <div>
    //     <button class="batoni" onclick="captureAndShare(1);"><img src="src/facebook.png" alt="">გაზიარება</button>
    //     <button class="batoni" onclick="captureAndShare(2);"><img src="src/messenger.png" alt="">გაზიარება</button>
    // </div>

    // <div class="textBody">
    //     <h1 id="stupid">ათასი,</h1>
    //     <h1 id="fuckin">სისულელის ნაცვლად</h1>
    //     <h1 id="bitcoinTwo">
    //         <span id="bitcoin">ბითქოინი</span>
    //     </h1>
    //     <h1 id="bought">რომ გეყიდა</h1>

        
    //     <h1 id="you">შენ <span id="have">გექნებოდა</span> <span id="more">ბევრი</span></h1>
    //     <h1 id="amount">$$$$</h1>
    // </div>
    // <div id="containerTwo">
    //     <div id="or">
    //         <img id="productImage" src="btcimage/Question-Mark-Final.png" class="responsive" title="">
    //         <h1 id="orText">=</h1>
    //         <img id="percent" src="btcimage/Bitcoin-Orange.png" class="responsive">
    //     </div>

    //     <div id="button"  class="button">

    //         <p id="historical"></p>

    //         <button id="shuffle" onclick="shuffle()">დააკლიკე.</button>
    //         <p id="shuffleSub">ეს შეიძლება ძალიან მოგეწონოს...</p>
    //     </div>


    //     <div>
    //         <a href="https://bitnet.ge/" target="_blank">
    //             <p id="donate">ინვესტირება 🙆‍♂️</p>
    //         </a>
    //     </div>
    // </div>`
    return;
  }

  // Set Initial Variables
  var randMax = productArray.length;
  var randMaxTwo = buttonPhrases.length;
  var randomIndex = Math.floor(Math.random() * randMax);
  var randomIndexTwo = Math.floor(Math.random() * randMaxTwo);
  var randomProduct = productArray[randomIndex];
  var randomPhrase = "შემდეგი";

  var productName = randomProduct.name;
  var currentValue = randomProduct.btcAmount * btcPrice;
  var percentChange = `${Math.round((currentValue - randomProduct.originalPrice) / randomProduct.originalPrice).toLocaleString()}x\nreturn`;

  // Change DOM Elements
  var percentElement = document.createElement("h1");
  percentElement.innerText = `${randomProduct.btcAmount.toFixed(2)}\nBitcoin`;
  percentElement.id = "percent";
  percentElement.className = "bodyText";
  product.innerText = productName;
  productImage.src = randomProduct.image;
  historics.innerHTML = `<b>ორიგინალის ღირებულება:</b> $${randomProduct.originalPrice.toLocaleString()}<br><b>გამოშვების თარიღი:</b> ${randomProduct.release}`;
  var percentage = document.getElementById("percent");
  percentage.parentNode.replaceChild(percentElement, percentage);
  currentPrice.innerText = "$$$";
  productArray.splice(randomIndex, 1);
  buttonPhrases.splice(randomIndexTwo, 1);

  // Final Page
  setTimeout(() => {
    counter(currentPrice, randomProduct.originalPrice, currentValue, 10000, randomPhrase);
  }, 400);
};

function counter(id, start, end, duration, randomPhrase) {
   // Identify HTML Elements
   var shuffleButton = document.getElementById("shuffle");


  var obj = id;
  let current = start;
  var range = end - start;
  var increment = Math.floor(Math.abs(range) / 5);
  var step = 0;
  var timer = setInterval(() => {
    current += increment;
    obj.textContent = "$" + current.toLocaleString();
    if (current > end) {
      obj.textContent = "$" + end.toLocaleString();
      clearInterval(timer);
      shuffleButton.innerText = randomPhrase;
      shuffleButton.disabled = false;
    }
  }, step);
}






var vipConcertTicket = {
  name: "ბრუნო მარსის კონცერტზე VIP ბილეთების ნაცვლად",
  originalPrice: 1450,
  singular: true,
  btcAmount: 0.028,
  image: "btcimage/vip_concert_ticket.png",
  release: "20/06/2023",
};

var iPhone14ProMax = {
  name: "iPhone 14 Pro Max-ის ნაცვლად",
  originalPrice: 1099,
  singular: true,
  btcAmount: 0.056,
  image: "btcimage/iphone_14_pro_max.png",
  release: "16/09/22",
};

var airpodsPro = {
  name: "Airpods pro-ს ნაცვლად",
  originalPrice: 249,
  singular: true,
  btcAmount: 0.013,
  image: "btcimage/airpods_pro.png",
  release: "07/09/22",
};

var tinderGold = {
  name: "Tinder Gold-ის ნაცვლად",
  originalPrice: 100,
  singular: true,
  btcAmount: 0.035,
  image: "btcimage/tinder_gold.png",
  release: "01/07/17",
};

var pornhubPremium = {
  name: "PornHub Premium-ის ნაცვლად",
  originalPrice: 145,
  singular: true,
  btcAmount: 1.09,
  image: "btcimage/pornhub_premium.png",
  release: "25/05/13",
};

var v1Tesla = {
  name: "V1 Tesla-ს ნაცვლად",
  originalPrice: 250000,
  singular: true,
  btcAmount: 135.52,
  image: "btcimage/v1_tesla.png",
  release: "06/02/18",
};

var crosty = {
  name: "Crosty-ის ბოტასის ნაცვლად",
  originalPrice: 350,
  singular: true,
  btcAmount: 0.02,
  image: "btcimage/crosty.png",
  release: "01/01/15",
};

var microsoftXboxSeriesX = {
  name: "Microsoft Xbox Series X-ის ნაცვლად",
  originalPrice: 500,
  singular: true,
  btcAmount: 0.033,
  image: "btcimage/microsoft_xbox_series_x.png",
  release: "10/11/20",
};

var cicoliaWatch = {
  name: "ციკოლიას საათის ნაცვლად",
  originalPrice: 591,
  singular: true,
  btcAmount: 5.88,
  image: "btcimage/cicolia_watch.png",
  release: "15/06/22",
};

var smeg = {
  name: "Smeg ის მაცივრის ნაცვლად",
  originalPrice: 3990,
  singular: true,
  btcAmount: 11.97,
  image: "btcimage/smeg.png",
  release: "15/11/15",
};

var iPadMini = {
  name: "IPad Mini-ის ნაცვლად",
  originalPrice: 329,
  singular: true,
  btcAmount: 0.75,
  image: "btcimage/ipad_mini.png",
  release: "15/11/13",
};

var goProHero4 = {
  name: "GoPro Hero 4-ის ნაცვლად",
  originalPrice: 400,
  singular: true,
  btcAmount: 0.92,
  image: "btcimage/go_pro_hero4.png",
  release: "24/09/14",
};

var hoverboard = {
  name: "Hoverboard-ის ნაცვლად",
  originalPrice: 250,
  singular: true,
  btcAmount: 2.23,
  image: "btcimage/hoverboard.png",
  release: "07/02/13",
};

var djiPhantomDrone = {
  name: "DJI Phantom drone-ის ნაცვლად",
  originalPrice: 1259,
  singular: true,
  btcAmount: 9.36,
  image: "btcimage/dji_phantom_drone.png",
  release: "01/01/13",
};

var ps4 = {
  name: "PS4-ის ნაცვლად",
  originalPrice: 33538,
  singular: true,
  btcAmount: 0.95,
  image: "btcimage/ps4.png",
  release: "15/11/13",
};

var kvarasBitcoin = {
  name: "Kvaras-ს მაისურის ნაცვლად",
  originalPrice: 130,
  singular: true,
  btcAmount: 0.0077,
  image: "btcimage/kvaras_bitcoin.png",
  release: "01/06/22",
};

function resetProductArray() {
  productArray = [...originalProductArray];
}
var originalProductArray = [
  /* Add your product objects here (uncommented) */
  vipConcertTicket,
  iPhone14ProMax,
  airpodsPro,
  tinderGold,
  pornhubPremium,
  v1Tesla,
  crosty,
  microsoftXboxSeriesX,
  cicoliaWatch,
  smeg,
  iPadMini,
  goProHero4,
  hoverboard,
  djiPhantomDrone,
  ps4,
  kvarasBitcoin,
];

var productArray = [
  vipConcertTicket,
  iPhone14ProMax,
  airpodsPro,
  tinderGold,
  pornhubPremium,
  v1Tesla,
  crosty,
  microsoftXboxSeriesX,
  cicoliaWatch,
  smeg,
  iPadMini,
  goProHero4,
  hoverboard,
  djiPhantomDrone,
  ps4,
  kvarasBitcoin,
];


// Function to clear the browser cache
function clearCache() {
  // Clear cache using Cache API
  caches.keys().then(function (cacheNames) {
    cacheNames.forEach(function (cacheName) {
      caches.devare(cacheName);
    });
  });

  // Reload the page to get fresh content
  // alert(?)
}

// Call the function to clear the cache when the page loads
window.addEventListener("load", function () {
  // Add a delay to ensure the cache is cleared after the page is loaded
  setTimeout(clearCache, 1000);
});