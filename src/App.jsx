import { useState } from "react";
import emailjs from "@emailjs/browser";
import melamiinip3 from "./assets/melamiinip3.jpg";
import mattamusta from "./assets/0190.jpg";
import tammi from "./assets/3213.jpg";
import vitivalkoinen from "./assets/C974.jfif";
import kultatammi from "./assets/K003.jpg";
import vaaleapähkinä from "./assets/K206.jpg";
import mustaoxidoitu from "./assets/K205.jpg";
import betoni from "./assets/K350.jpg";
import vaaleakivi from "./assets/K538.jpg";
import harmaakivi from "./assets/K539.jpg";
import galaxi from "./assets/K553.jpg";
import mustapronssi from "./assets/K698PN.jpg";
import calacatta from "./assets/K699PN.jpg";
import portobello from "./assets/K703PN.jpg";
import perlino from "./assets/K704PN.jpg";
import stonehaven from "./assets/K705PN.jpg";
import cashmere from "./assets/5981BS.jpg";
import keskiharmaa from "./assets/0197SU.jpg";
import satiini from "./assets/7045SU.jpg";
import vanilja from "./assets/K680PD.jpg";
import hiekkatammi from "./assets/K543SN.jpg";
import valkoinensoft from "./assets/8685P3BS.jpg";
import blumaluslevysaneeraus from "./assets/blumaluslevysaneeraus.png";
import blumaluslevy from "./assets/blumaluslevy.jpg";
import blum110 from "./assets/blum110.jpg";
import blum170 from "./assets/blum170.jpg";
import i022246ligo from "./assets/022246ligo.jpg";
import i022247ligo from "./assets/022247ligo.jpg";
import i022248ligo from "./assets/022248ligo.jpg";
import i026451milo from "./assets/026451milo.jpg";
import i026452milo from "./assets/026452milo.jpg";
import i026453milo from "./assets/026453milo.jpg";
import i027544betamini from "./assets/027544betamini.jpg";
import i027542betamini from "./assets/027542betamini.jpg";
import i027541betamini from "./assets/027541betamini.jpg";
import v114rst from "./assets/v114rst.jpg";
import helixmu from "./assets/helixMU.jpg";
import helixme from "./assets/helixme.jpg";






function App() {
  const [productGroup, setProductGroup] = useState("");

  const [product, setProduct] = useState("");

  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [leftEdge, setLeftEdge] = useState(false);
  const [rightEdge, setRightEdge] = useState(false);
  const [topEdge, setTopEdge] = useState(false);
  const [bottomEdge, setBottomEdge] = useState(false);
  const [backEdgeUpgrade, setBackEdgeUpgrade] = useState(false);

  const [orderLines, setOrderLines] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [hingeDrilling, setHingeDrilling] = useState(false);
  const [grainDirection, setGrainDirection] = useState("pysty");

  const [hardwareGroup, setHardwareGroup] = useState("");
  const [hardwareProduct, setHardwareProduct] = useState("");

  const [handleColor, setHandleColor] = useState("");

const [phone, setPhone] =
  useState("");

const [email, setEmail] =
  useState("");

const [company, setCompany] =
  useState("");

const [notes, setNotes] =
  useState("");
  const [successMessage, setSuccessMessage] = useState("");
``
const productGroups = {
  kalusteovet: [
  {
    name: "Valkoinen kosteudenkestävä melamiini soft P3 16mm",
    shortName: "Valkoinen mel P3 BS 16mm",
    pricePerM2: 64,
    image: valkoinensoft,
  },
  {
    name: "Cashmere melamiini 16mm",
    shortName: "Cashmere mel 16mm",
    pricePerM2: 64,
    image: cashmere,
  },
  {
    name: "Vanilja melamiini 16mm",
    shortName: "Vanilja mel 16mm",
    pricePerM2: 64,
    image: vanilja,
  },
  {
    name: "Satiini melamiini (matta) 16mm",
    shortName: "Satiini mel 16mm",
    pricePerM2: 64,
    image: satiini,
  },
  {
    name: "Hiekkatammi melamiini 16mm",
    shortName: "Hiekkatammi mel 16mm",
    pricePerM2: 64,
    image: hiekkatammi,
  },
  {
    name: "Harmaa melamiini (matta) 16mm",
    shortName: "Harmaa mel 16mm",
    pricePerM2: 64,
    image: keskiharmaa,
  },
],

kalustelevyt: [
  {
    name: "Valkoinen kosteudenkestävä melamiini P3 16mm",
    shortName: "Valkoinen mel P3 SM 16mm",
    pricePerM2: 38,
    image: melamiinip3,
  },
  {
    name: "Valkoinen kosteudenkestävä melamiini soft P3 16mm",
    shortName: "Valkoinen mel P3 BS 16mm",
    pricePerM2: 52,
    image: melamiinip3,
  },
  {
    name: "Cashmere melamiini 16mm",
    shortName: "Cashmere mel 16mm",
    pricePerM2: 52,
    image: cashmere,
  },
  {
    name: "Vanilja melamiini 16mm",
    shortName: "Vanilja mel 16mm",
    pricePerM2: 52,
    image: vanilja,
  },
  {
    name: "Satiini melamiini (matta) 16mm",
    shortName: "Satiini mel 16mm",
    pricePerM2: 52,
    image: satiini,
  },
  {
    name: "Hiekkatammi melamiini 16mm",
    shortName: "Hiekkatammi mel 16mm",
    pricePerM2: 52,
    image: hiekkatammi,
  },
  {
    name: "Harmaa melamiini (matta) 16mm",
    shortName: "Harmaa mel 16mm",
    pricePerM2: 52,
    image: keskiharmaa,
  },
],

laminaattitasot: [
{
  name: "Viti valkoinen",
  shortName: "Viti valkoinen 30mm",
  pricingType: "countertop",
  price600: 125,
  price1200: 199,
  backEdgePricePerMeter: 7,
  image: vitivalkoinen,
},
{
  name: "Matta musta",
  shortName: "Matta musta 30mm",
  pricingType: "countertop",
  price600: 155,
  price1200: 239,
  backEdgePricePerMeter: 7,
  image: mattamusta,
},
{
  name: "Tammi",
  shortName: "Tammi 30mm",
  pricingType: "countertop",
  price600: 155,
  price1200: 239,
  backEdgePricePerMeter: 7,
  image: tammi,
},
{
  name: "Kultatammi",
  shortName: "Kultatammi 30mm",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  image: kultatammi,
},
{
  name: "Vaalea pähkinä",
  shortName: "Vaalea pähkinä 30mm",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  image: vaaleapähkinä,
},
{
  name: "Musta oxidoitu",
  shortName: "Musta oxidoitu 30mm",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  image: mustaoxidoitu,
},
{
  name: "Betoni",
  shortName: "Betoni 30mm",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  image: betoni,
},
{
  name: "Vaalea kivi",
  shortName: "Vaalea kivi 30mm",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  image: vaaleakivi,
},
{
  name: "Harmaa kivi",
  shortName: "Harmaa kivi 30mm",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  image: harmaakivi,
},
{
  name: "Galaxi",
  shortName: "Galaxi 30mm",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  image: galaxi,
},
{
  name: "Musta pronssi",
  shortName: "Musta pronssi 30mm",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  image: mustapronssi,
},
{
  name: "Calacatta",
  shortName: "Calacatta 30mm",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  image: calacatta,
},
{
  name: "Portobello",
  shortName: "Portobello 30mm",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  image: portobello,
},
{
  name: "Perlino",
  shortName: "Perlino 30mm",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  image: perlino,
},
{
  name: "Stonehaven",
  shortName: "Stonehaven 30mm",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  image: stonehaven,
},
],
välitilalevyt: [
{
  name: "Matta musta",
  shortName: "Matta musta 4,4mm",
  pricingType: "piece",
  piecePrice600: 165,
  piecePrice1220: 260,
  image: mattamusta,
},
{
  name: "Tammi",
  shortName: "Tammi 4,4mm",
  pricingType: "piece",
  piecePrice600: 165,
  piecePrice1220: 260,
  image: tammi,
},
{
  name: "Kultatammi",
  shortName: "Kultatammi 4,4mm",
  pricingType: "piece",
  piecePrice600: 165,
  piecePrice1220: 260,
  image: kultatammi,
},
{
  name: "Musta oxidoitu",
  shortName: "Musta oxidoitu 4,4mm",
  pricingType: "piece",
  piecePrice600: 165,
  piecePrice1220: 260,
  image: mustaoxidoitu,
},
{
  name: "Betoni",
  shortName: "Betoni 4,4mm",
  pricingType: "piece",
  piecePrice600: 165,
  piecePrice1220: 260,
  image: betoni,
},
{
  name: "Vaalea kivi",
  shortName: "Vaalea kivi 4,4mm",
  pricingType: "piece",
  piecePrice600: 165,
  piecePrice1220: 260,
  image: vaaleakivi,
},
{
  name: "Harmaa kivi",
  shortName: "Harmaa kivi 4,4mm",
  pricingType: "piece",
  piecePrice600: 165,
  piecePrice1220: 260,
  image: harmaakivi,
},
{
  name: "Galaxi",
  shortName: "Galaxi 4,4mm",
  pricingType: "piece",
  piecePrice600: 165,
  piecePrice1220: 260,
  image: galaxi,
},
{
  name: "Musta pronssi",
  shortName: "Musta pronssi 4,4mm",
  pricingType: "piece",
  piecePrice600: 165,
  piecePrice1220: 260,
  image: mustapronssi,
},
{
  name: "Calacatta",
  shortName: "Calacatta 4,4mm",
  pricingType: "piece",
  piecePrice600: 165,
  piecePrice1220: 260,
  image: calacatta,
},
{
  name: "Portobello",
  shortName: "Portobello 4,4mm",
  pricingType: "piece",
  piecePrice600: 165,
  piecePrice1220: 260,
  image: portobello,
},
{
  name: "Perlino",
  shortName: "Perlino 4,4mm",
  pricingType: "piece",
  piecePrice600: 165,
  piecePrice1220: 260,
  image: perlino,
},
{
  name: "Stonehaven",
  shortName: "Stonehaven 4,4mm",
  pricingType: "piece",
  piecePrice600: 165,
  piecePrice1220: 260,
  image: stonehaven,
},
]
};

const hardwareProducts = {
  vetimet: [
  {
    name: "Ligo nuppi 35",
    colors: [
      {
        name: "Musta",
        price: 6.50,
        image: i022247ligo,
      },
      {
        name: "Rst-look",
        price: 6.50,
        image: i022246ligo,
      },
      {
        name: "Messinki",
        price: 6.90,
        image: i022248ligo,
      },
    ],
  },

  {
    name: "Milo 128",
    colors: [
      {
        name: "Musta",
        price: 5.90,
        image: i026453milo,
      },
      {
        name: "Rst-look",
        price: 5.90,
        image: i026452milo,
      },
      {
        name: "Valkoinen",
        price: 5.90,
        image: i026451milo,
      },
    ],
  },
  {
    name: "Beta mini 128",
    colors: [
      {
        name: "Musta",
        price: 6.30,
        image: i027542betamini,
      },
      {
        name: "Rst-look",
        price: 7.50,
        image: i027541betamini,
      },
      {
        name: "Messinki",
        price: 7.50,
        image: i027544betamini,
      },
    ],
  },
  {
    name: "Helix 128",
    colors: [
      {
        name: "Musta",
        price: 6.40,
        image: helixmu,
      },
      {
        name: "Rst-look",
        price: 6.00,
        image: v114rst,
      },
      {
        name: "Messinki",
        price: 6.40,
        image: helixme,
      },
    ],
  },
],

  saranat: [
    { 
      name: "Hidastinsarana 110",
      image: blum110,
      price: 4.80,
     },
    { 
      name: "Hidastinsarana 180",
      image: blum170,
      price: 10.4,
     },
  ],

  aluslevyt: [
    { 
      name: "Vakio aluslevy 15-16mm rungolle",
      shortName: "Vakio aluslevy",
      image: blumaluslevy,
      price: 1.60,
     },
    { 
      name: "Saneeraus aluslevy 15-16mm rungolle",
      shortName: "Saneeraus aluslevy",
      image: blumaluslevysaneeraus,
      price: 2.8,
     },
  ],
};
``

const selectedProduct =
  productGroups[productGroup]?.find(
    (p) => p.name === product
  );
  const selectedHandle =
  hardwareProducts?.[hardwareGroup]?.find(
    (item) => item.name === product
  );

  const selectedColor =
  selectedHandle?.colors?.find(
    (color) => color.name === handleColor
  );

const displayImage =
  selectedColor?.image ||
  selectedHandle?.image ||
  selectedProduct?.image;

const displayName =
  selectedHandle?.shortName ||
  selectedHandle?.name ||
  selectedProduct?.shortName ||
  selectedProduct?.name;

  const hingeDrillingPrice = 6;
  const edgePricePerM = 3;
  const minimumPrice =
  productGroup === "laminaattitasot"
    ? 35
    : productGroup === "välitilalevyt"
    ? 89
    : productGroup === "kalustehelat"
    ? 0
    : 16;
``

  const area =
    ((Number(height) || 0) *
      (Number(width) || 0)) /
    1000000;

  let boardPrice = 0;

if (selectedProduct?.pricingType === "countertop") {

  const depth = Number(width);
  const lengthMeters = Number(height) / 1000;
  const length = Number(height);

  let meterPrice = 0;

  if (depth <= 600) {
    meterPrice = selectedProduct.price600;
  } else if (depth <= 1200) {
    meterPrice = selectedProduct.price1200;
  }
  let discountFactor = 1;

if (length >= 3001) {
  discountFactor = 0.85;
} else if (length >= 2001) {
  discountFactor = 0.93;
} else if (length >= 1001) {
  discountFactor = 0.95;
}

meterPrice = meterPrice * discountFactor;

  boardPrice = lengthMeters * meterPrice;

} else if (
  selectedProduct?.pricingType === "piece"
) {

  boardPrice =
    Number(height) <= 600
      ? selectedProduct.piecePrice600
      : selectedProduct.piecePrice1220;

} else {

  boardPrice =
    area * (selectedProduct?.pricePerM2 || 0);

}

  let edgeLength = 0;

  if (leftEdge) edgeLength += Number(height) || 0;
  if (rightEdge) edgeLength += Number(height) || 0;
  if (topEdge) edgeLength += Number(width) || 0;
  if (bottomEdge) edgeLength += Number(width) || 0;

  let edgePrice = 0;

if (selectedProduct?.pricingType === "countertop") {

  if (backEdgeUpgrade) {
    edgePrice =
      (Number(height) / 1000) *
      (selectedProduct?.backEdgePricePerMeter || 0);
  }

} else {

  edgePrice =
    (edgeLength / 1000) *
    edgePricePerM;

}
let drillingPrice = 0;

const hardwarePrice =
  (
    selectedColor?.price ||
    selectedHandle?.price ||
    0
  ) * Number(quantity);

if (
  productGroup === "kalusteovet" &&
  hingeDrilling
) {
  drillingPrice =
    6 * Number(quantity);
}
  const calculatedPrice =
  boardPrice +
  edgePrice +
  drillingPrice;

  const piecePrice = Math.max(
    calculatedPrice,
    minimumPrice
  );

  const totalPrice =
  productGroup === "kalustehelat"
    ? hardwarePrice
    : piecePrice * quantity;

function addToOrder() {

if (
  productGroup === "kalustehelat" &&
  hardwareGroup === "vetimet" &&
  hardwareProducts.vetimet.find(
    (item) => item.name === product
  )?.hasColors &&
  !handleColor
) {
  alert("Valitse vetimen väri");
  return;
}

if (!productGroup) {
  alert("Valitse tuoteryhmä");
  return;
}

  if (productGroup === "kalustelevyt") {

  if (
    Number(height) < 250 ||
    Number(height) > 2750
  ) {
    alert(
      "Korkeuden tulee olla välillä 250-2750 mm"
    );
    return;
  }

  if (
    Number(width) < 70 ||
    Number(width) > 2000
  ) {
    alert(
      "Leveyden tulee olla välillä 70-2000 mm"
    );
    return;
  }
}
if (productGroup === "kalusteovet") {

  if (
    Number(height) < 100 ||
    Number(height) > 1920
  ) {
    alert(
      "Korkeuden tulee olla välillä 100-1920 mm"
    );
    return;
  }

  if (
    Number(width) < 195 ||
    Number(width) > 1195
  ) {
    alert(
      "Leveyden tulee olla välillä 195-1195 mm"
    );
    return;
  }

}

if (productGroup === "laminaattitasot") {

  if (
    Number(height) < 300 ||
    Number(height) > 4100
  ) {
    alert(
      "Pituuden tulee olla välillä 300-4100 mm"
    );
    return;
  }

  if (
    Number(width) < 300 ||
    Number(width) > 1200
  ) {
    alert(
      "Syvyyden tulee olla välillä 300-1200 mm"
    );
    return;
  }
}
if (productGroup === "välitilalevyt") {

  if (
    Number(height) < 150 ||
    Number(height) > 1220
  ) {
    alert(
      "Korkeuden tulee olla välillä 150-1220 mm"
    );
    return;
  }

  if (
    Number(width) < 300 ||
    Number(width) > 3050
  ) {
    alert(
      "Leveyden tulee olla välillä 300-3050 mm"
    );
    return;
  }
}

  const item = {
    product,
    productGroup,
    hardwareGroup,
    height,
    width,
    handleColor,
    quantity: Number(quantity),
    leftEdge,
    rightEdge,
    topEdge,
    bottomEdge,
    backEdgeUpgrade,
    hingeDrilling,
    totalPrice,
    image:
    selectedColor?.image ||
    selectedHandle?.image ||
    selectedProduct?.image,
  };

  setOrderLines([...orderLines, item]);

  setHeight("");
  setWidth("");
  setQuantity(1);

  setLeftEdge(false);
  setRightEdge(false);
  setTopEdge(false);
  setBottomEdge(false);
}

const countertopDeliveryFee = 69;

const hasCountertops = orderLines.some(
  (item) => item.productGroup === "laminaattitasot"
);

const deliveryCharge =
  hasCountertops ? countertopDeliveryFee : 0;

const grandTotal =
  orderLines.reduce(
    (sum, item) => sum + item.totalPrice,
    0
  ) + deliveryCharge;

const vat = grandTotal * 0.255;
const totalWithVat = grandTotal + vat;
``

function submitQuoteRequest() {

  const orderNumber = `LK-${new Date().getFullYear()}-${Date.now()
  .toString()
  .slice(-5)}`;

  if (orderLines.length === 0) {
    alert("Lisää vähintään yksi tuote tilaukseen.");
    return;
  }

  if (!customerName.trim()) {
    alert("Anna nimi.");
    return;
  }

  if (phone.length < 8) {
alert("Anna kelvollinen puhelinnumero.");
return;
}

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert(
      "Anna kelvollinen sähköpostiosoite."
    );
    return;
  }


  const productsText = orderLines
  .map((item, index) => {
    const edges = [
      item.leftEdge && "Vasen sivu (korkeus",
      item.rightEdge && "Oikea sivu (korkeus)",
      item.topEdge && "Yläreuna (leveys",
      item.bottomEdge && "Alareuna (leveys",
    ]
      .filter(Boolean)
      .join(", ");
    return `#${index + 1} ${item.productGroup === "kalustelevyt"
  ? "Kalustelevy"
  : item.productGroup === "kalusteovet"
  ? "Kalusteovi"
  : item.productGroup === "välitilalevyt"
  ? "Välitilalevy"
  : item.productGroup === "kalustehelat"
  ? item.hardwareGroup === "vetimet"
    ? "Vedin"
    : item.hardwareGroup === "saranat"
    ? "Sarana"
    : "Aluslevy"
  : "Laminaattitaso"}
Tuote: ${item.product}
${
  item.productGroup === "kalustehelat" &&
  item.hardwareGroup === "vetimet" &&
  item.handleColor
    ? `Väri: ${item.handleColor}\n`
    : ""
}${
  item.productGroup === "laminaattitasot"
    ? `Pituus: ${item.height} mm
Syvyys: ${item.width} mm\n`
    : item.productGroup !== "kalustehelat"
    ? `Korkeus: ${item.height} mm
Leveys: ${item.width} mm\n`
    : ""
}${
  item.productGroup === "laminaattitasot" &&
  item.backEdgeUpgrade
    ? `Takareuna: ABS-reunanauha\n`
    : ""
}${
  item.productGroup === "kalusteovet" &&
  item.hingeDrilling
    ? `Vakio saranaporaus\n`
    : ""
}${
  item.productGroup === "kalustelevyt" &&
  (
    item.leftEdge ||
    item.rightEdge ||
    item.topEdge ||
    item.bottomEdge
  )
    ? `Reunanauhoitukset: ${[
        item.leftEdge && "Vasen sivu",
        item.rightEdge && "Oikea sivu",
        item.topEdge && "Yläreuna",
        item.bottomEdge && "Alareuna",
      ]
        .filter(Boolean)
        .join(", ")}\n`
    : ""
}Määrä: ${item.quantity}
Hinta: ${(item.totalPrice / item.quantity).toFixed(2)} € alv0%
Yhteensä: ${item.totalPrice.toFixed(2)} € alv0%
`;

  })
  .join("\n--------------------------------\n\n");

  const templateParams = {
    order_number: orderNumber,
    customer_name: customerName,
    phone,
    email,
    company,
    notes,

    products: productsText,

    subtotal: grandTotal.toFixed(2),
    vat: vat.toFixed(2),
    total: totalWithVat.toFixed(2),
  };

  emailjs
    .send(
      "service_zvn47vw",
      "template_fmksnxd",
      templateParams,
      "LVqGpwPw31yr_emH4"
    )
    .then(() => {

      // Lähetetään tilausvahvistus asiakkaalle
emailjs.send(
"service_zvn47vw",
"template_yjjeg3k",
templateParams,
"LVqGpwPw31yr_emH4"
);

  setOrderLines([]);

  setHeight("");
  setWidth("");
  setQuantity(1);

  setLeftEdge(false);
  setRightEdge(false);
  setTopEdge(false);
  setBottomEdge(false);

  setCustomerName("");
  setPhone("");
  setEmail("");
  setCompany("");
  setNotes("");

  setSuccessMessage(
  `✅ Kiitos tilauksesta!

Tilausnumero: ${orderNumber}

Tilauksesi on vastaanotettu onnistuneesti. Ilmoitamme tekstiviestillä, kun tilauksesi on noudettavissa.`
);

setTimeout(() => {
  document
    .getElementById("success-message")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
}, 100);

setTimeout(() => {
  setSuccessMessage("");
}, 5000);
})
    .catch((error) => {
      console.error(error);

      alert(
        "Tilauksen lähetys epäonnistui."
      );
    });
}
return (

  <div
    style={{
      maxWidth: "800px",
      margin: "40px auto",
      padding: "30px",
      backgroundColor: "#ffffff",
      width: "100%",
      boxSizing: "border-box",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    }}
  >
  <h1
  style={{
    color: "#ff6b00",
    textAlign: "center",
    fontSize: "clamp(32px, 4vw, 42px)",
    lineHeight: "1",
  }}
>
  Limosa-Keittiöiden tilaustyökalu
</h1>

{successMessage && (
  <div
    id="success-message"
    style={{
      backgroundColor: "#e8f5e9",
      color: "#2e7d32",
      border: "1px solid #4caf50",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "20px",
      fontWeight: "bold",
      textAlign: "center",
    }}
  >
    {successMessage}
  </div>
)}
<p
style={{
textAlign: "center",
color: "#666",
fontSize: "clamp(15px, 3vw, 22px)",
marginTop: "-10px",
marginBottom: "30px",
}}
>
Tilaa mittatarkat kalusteovet, kalustelevyt, välitilalevyt, laminaattitasot ja kalustehelat helposti verkosta.
Tuotantoaika 3-7 arkipäivää
</p>
{displayImage && (
  <div
  style={{
    textAlign: "center",
    marginTop: "15px",
    marginBottom: "20px",
  }}
>
  <div
    style={{
      position: "relative",
      display: "inline-block",
    }}
  >
    <img
  src={displayImage}
  alt={displayName}
      style={{
        width: "100%",
        maxWidth: "350px",
        height: "auto",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        display: "block",
      }}
    />

    <div
      style={{
        position: "absolute",
        bottom: 0,
     tomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      {displayName}
    </div>
  </div>
</div>
)}

<h3>Tuoteryhmä</h3>

<select
  value={productGroup}
  onChange={(e) => {
    setProductGroup(e.target.value);

    const firstProduct =
      productGroups[e.target.value]?.[0];

    if (firstProduct) {
      setProduct(firstProduct.name);
    }
  }}
  style={{
    width: "100%",
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    fontSize: "clamp(14px, 1.8vw, 16px)",
    fontWeight: "500",
    marginBottom: "20px",
  }}
>
  <option value="">
  Valitse tuoteryhmä
</option>

<option value="kalusteovet">
  Kalusteovet
</option>

<option value="kalustelevyt">
  Melamiinipintaiset lastulevyt
</option>

<option value="laminaattitasot">
  Suorareunaiset laminaattitasot (30 x 4100 x 600/1200mm)
</option>

<option value="välitilalevyt">
  Välitilalevyt (4,4 x 3050 x 600/1220mm)
</option>

<option value="kalustehelat">
  Kalustehelat
</option>

</select>

{productGroup &&
  productGroup !== "kalustehelat" && (
    <div style={{ marginBottom: "20px" }}>
      <h3>Tuote</h3>

      <select
        value={product}
        onChange={(e) =>
          setProduct(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          boxSizing: "border-box",
        }}
      >
        {(productGroups[productGroup] || []).map(
          (item) => (
            <option
              key={item.name}
              value={item.name}
            >
              {item.name}
            </option>
          )
        )}
      </select>
    </div>
)}

{productGroup === "kalustehelat" && (
  <div
    style={{
      width: "100%",
      maxWidth: "700px",
      margin: "0 auto",
      padding: "20px",
      borderRadius: "8px",
      border: "1px solid #ccc",
    }}
  >
    <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    alignItems: "start",
  }}
>
  <div>
    <label
      style={{
        display: "block",
        fontWeight: "bold",
        marginBottom: "8px",
      }}
    >
      Helaryhmä
    </label>

    <select
  value={hardwareGroup}
  onChange={(e) => {
  const group = e.target.value;

  setHardwareGroup(group);

  const firstProduct =
    hardwareProducts[group]?.[0];

  if (firstProduct) {
    setProduct(firstProduct.name);

    if (firstProduct.colors?.length) {
      setHandleColor(
        firstProduct.colors[0].name
      );
    }
  }
}}

      style={{
        width: "100%",
        padding: "12px",
        borderRadius: "5px",
        border: "1px solid #ccc",
      }}
    >
      <option value="">Valitse helaryhmä</option>
      <option value="vetimet">Vetimet</option>
      <option value="saranat">Saranat</option>
      <option value="aluslevyt">Aluslevyt</option>
    </select>
  </div>

  <div>
    <label
      style={{
        display: "block",
        fontWeight: "bold",
        marginBottom: "8px",
      }}
    >
      Tuote
    </label>

    <select
      value={product}
      onChange={(e) =>
  setProduct(e.target.value)
}
      style={{
        width: "100%",
        padding: "12px",
        borderRadius: "5px",
        border: "1px solid #ccc",
      }}
    >
      {(
        productGroup === "kalustehelat"
          ? hardwareProducts[hardwareGroup] || []
          : productGroups[productGroup] || []
      ).map((item) => (
        <option
          key={item.name}
          value={item.name}
        >
          {item.name}
        </option>
      ))}
    </select>
    </div>
  </div>

  <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "20px",
  }}
>
 <div>
    {productGroup === "kalustehelat" &&
      hardwareGroup === "vetimet" &&
      selectedHandle?.colors?.length > 0 && (
        <>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            Väri
          </label>

          <select
            value={handleColor}
            onChange={(e) =>
              setHandleColor(e.target.value)
            }
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          >
            <option value="">
              Valitse väri
            </option>

            {selectedHandle.colors.map((color) => (
  <option
    key={color.name}
    value={color.name}
  >
    {color.name}
  </option>
))}
          </select>
        </>
      )}
  </div>

  <div>
    <label
      style={{
        display: "block",
        fontWeight: "bold",
        marginBottom: "8px",
      }}
    >
      Määrä
    </label>

    <input
      type="number"
      min="1"
      value={quantity}
      onChange={(e) =>
        setQuantity(e.target.value)
      }
      style={{
        width: "100%",
        padding: "12px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        boxSizing: "border-box",
      }}
    />
  </div>
</div>
</div>
)}

<div
  style={{
    display: "grid",
gridTemplateColumns:
  productGroup === "kalustehelat"
    ? "1fr"
    : "1fr 1fr 0.5fr",
    justifyItems:
  productGroup === "kalustehelat"
    ? "center"
    : "stretch",
gap: "15px",
alignItems: "end",
  }}
>
  {productGroup !== "kalustehelat" && (
  <>
<div>

  <h3>
  {productGroup === "laminaattitasot"
    ? "Pituus (mm)"
    : "Korkeus (mm)"
  }
</h3>

  <input
    type="number"
    min="250"
    max="2750"
    value={height}
    onChange={(e) =>
      setHeight(e.target.value)
    }
    style={{
      width: "100%",
      padding: "12px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
    }}
  />
</div>

      <div>

  <h3>
  {productGroup === "laminaattitasot"
    ? "Syvyys (mm)"
    : "Leveys (mm)"
  }
</h3>

  <input
    type="number"
    min="70"
    max="2000"
    value={width}
    onChange={(e) =>
      setWidth(e.target.value)
    }
    style={{
      width: "100%",
      padding: "12px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
    }}
  />
</div>
<div>
  <h3>Määrä</h3>

  <input
    type="number"
    min="1"
    value={quantity}
    onChange={(e) =>
      setQuantity(e.target.value)
    }
    style={{
      width: "100%",
      padding: "12px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
    }}
  />
</div>

  </>
)}
</div>

{productGroup === "kalusteovet" && (
  <>
    <h3>Saranaporaus</h3>

    <label>
      <input
        type="checkbox"
        checked={hingeDrilling}
        onChange={(e) =>
          setHingeDrilling(e.target.checked)
        }
      />
      Vakio saranaporaus
    </label>

    <p
      style={{
        fontSize: "clamp(14px, 1.8vw, 16px)",
        color: "#666",
        lineHeight: "1.5",
        marginTop: "8px",
      }}
    >
      Alle 500 mm korkeissa ovissa saranaporaukset
      tehdään 60 mm päähän oven ylä- ja alareunasta.
      Yli 500 mm korkeissa ovissa poraukset tehdään
      100 mm päähän oven ylä- ja alareunasta.
      Yli 1200 mm korkeisiin oviin tehdään lisäksi
      kolmas saranaporaus oven keskikohtaan.
    </p>

    {product === "Hiekkatammi melamiini 16mm" && (
<>
<h3>Syykuvion suunta</h3>
 
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginTop: "10px",
  }}
>
  <label>
    <input
      type="radio"
      name="grainDirection"
      value="pysty"
      checked={grainDirection === "pysty"}
      onChange={(e) =>
        setGrainDirection(e.target.value)
      }
    />
    {" "}Syykuvio pysty
  </label>

  <label>
    <input
      type="radio"
      name="grainDirection"
      value="vaaka"
      checked={grainDirection === "vaaka"}
      onChange={(e) =>
        setGrainDirection(e.target.value)
      }
    />
    {" "}Syykuvio vaaka
  </label>
</div>
</>
)}
  </>
)}

      {productGroup === "kalustelevyt" && (
<>
<h3>Reunanauhoitukset</h3>

      <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    maxWidth: "300px",
    margin: "0 auto",
  }}
>
  <label>
    <input
      type="checkbox"
      checked={leftEdge}
      onChange={(e) =>
        setLeftEdge(e.target.checked)
      }
    />
    {" "}Vasen sivu (korkeus)
  </label>

  <label>
    <input
      type="checkbox"
      checked={rightEdge}
      onChange={(e) =>
        setRightEdge(e.target.checked)
      }
    />
    {" "}Oikea sivu (korkeus)
  </label>

  <label>
    <input
      type="checkbox"
      checked={topEdge}
      onChange={(e) =>
        setTopEdge(e.target.checked)
      }
    />
    {" "}Yläreuna (leveys)
  </label>

  <label>
    <input
      type="checkbox"
      checked={bottomEdge}
      onChange={(e) =>
        setBottomEdge(e.target.checked)
      }
    />
    {" "}Alareuna (leveys)
  </label>
</div>
  </>
)}

{productGroup === "laminaattitasot" && (
  <>
    <h3>Reunanauhat</h3>
<p
  style={{
    fontSize: "clamp(14px, 1.8vw, 16px)",
    color: "#666",
    marginBottom: "10px",
    lineHeight: "1.4",
  }}
>
  Etureuna (pituus) sekä päädyt (syvyys) sisältyvät hintaan
  ABS-reunanauhalla viimeisteltyinä.
  Takareuna (pituus) on vakiona paperinauhalla.
</p>
    <label>
      <input
        type="checkbox"
        checked={backEdgeUpgrade}
        onChange={(e) =>
          setBackEdgeUpgrade(e.target.checked)
        }
      />

      Myös takareuna ABS-reunanauhalla
    </label>
  </>
)}

      <hr />

      <div
  style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "35px",
  padding: "15px",
  backgroundColor: "#fff7f0",
  borderRadius: "5px",
  marginTop: "15px",
  marginBottom: "15px",
}}
>
  <h2
  style={{
    margin: 0,
    color: "#ff6b00",
    fontSize: "clamp(14px, 2vw, 20px)",
    fontWeight: "bold",
  }}
>
  {productGroup === "kalustehelat"
  ? `${totalPrice.toFixed(2)} € ALV 0%`
  : height && width && quantity
  ? `${totalPrice.toFixed(2)} € ALV 0%`
  : "Syötä mitat ja määrä"}
</h2>

  
  <button
    onClick={addToOrder}
    style={{
      backgroundColor: "#ff6b00",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "clamp(14px, 2vw, 16px)",
      padding: "clamp(10px, 2vw, 12px) clamp(14px, 3vw, 20px)",
      fontWeight: "bold",
    }}
  >
    Lisää tilaukseen
  </button>
</div>

<hr />

{orderLines.length > 0 && (
  <>
  <h2
  style={{
    color: "#ff6b00",
    fontWeight: "bold",
  }}
>
  Tilauksen yhteenveto
</h2>

{orderLines.map((item, index) => {

  return (

    <div
      key={index}
      style={{
        borderLeft: "5px solid #ff6b00",
        backgroundColor: "#f8f8f8",
        padding: "16px",
        marginTop: "12px",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
      }}
    >
<div
  style={{
    display: "flex",
    alignItems: "flex-start",
    gap: "15px",
    flexWrap: "wrap",
  }}
>
  {item.image && (
  <img
    src={item.image}
    alt={item.product}
    style={{
      width: "80px",
      height: "80px",
      objectFit: "cover",
      borderRadius: "5px",
    }}

/>
)}

<div
  style={{
    flex: 1,
    textAlign: "left",
    minWidth: 140,
    overflowWrap: "break-word",
  }}
>
  <p
  style={{
    fontWeight: "bold",
    color: "#ff6b00",
    marginBottom: "5px",
  }}
>
  {
  item.productGroup === "kalustelevyt" 
  ? "Kalustelevy" :
  item.productGroup === "kalusteovet" 
  ? "Kalusteovi" :
  item.productGroup === "välitilalevyt" 
  ? "Välitilalevy" :
  item.productGroup === "laminaattitasot" 
  ? "Laminaattitaso" :
  item.productGroup === "kalustehelat"
  ? item.hardwareGroup === "vetimet"
  ? "Vedin"
  : item.hardwareGroup === "saranat"
  ? "Sarana"
  : "Aluslevy" :
  ""
}
</p>

      <p
  style={{
    margin: "0 0 10px 0",
    fontWeight: "bold",
    fontSize: "clamp(13px, 1.8vw, 15px)",
    color: "#444",
    lineHeight: "1.4",
    wordBreak: "break-word",
  }}
>
  {item.product}
</p>

 {item.productGroup !== "kalustehelat" && (
  item.productGroup === "laminaattitasot" ? (
    <p>
      Pituus: {item.height} mm<br />
      Syvyys: {item.width} mm
    </p>
  ) : (
    <p>
      Korkeus: {item.height} mm<br />
      Leveys: {item.width} mm
    </p>
  )
)}

      <p>
        Kpl: {item.quantity}
      </p>

      {item.productGroup === "kalustelevyt" && (
  <p>
    Reunanauhat: {
      [
        item.leftEdge && "Vasen",
        item.rightEdge && "Oikea",
        item.topEdge && "Ylä",
        item.bottomEdge && "Ala",
      ]
        .filter(Boolean)
        .join(", ") || "Ei reunanauhoja"
    }
  </p>
)}
{item.productGroup === "kalusteovet" &&
  item.hingeDrilling && (
    <p>
      Vakio saranaporaus
    </p>
)}

{item.productGroup === "laminaattitasot" &&
  item.backEdgeUpgrade && (
    <p>
      Takareuna: ABS-reunanauha
    </p>
)}

{item.productGroup === "kalustehelat" &&

 item.hardwareGroup === "vetimet" &&
 item.handleColor && (
  <p>Väri: {item.handleColor}</p>
)}

<p>
  Hinta: {item.totalPrice.toFixed(2)} €
</p>
     <button
onClick={() =>

setOrderLines(
orderLines.filter(
(_, i) => i !== index
)
)
}
>
Poista
</button>
        </div>
</div>
</div>
  );
})}
</>
)}

<div
  style={{
    display: orderLines.length > 0 ? "block" : "none",
  }}
>

      <hr />
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "#fff3e8",
          borderRadius: "5px",
        }}
      >
      
{deliveryCharge > 0 && (
  <h3>
    Tasojen käsittely- sekä pakkauskulu:
    {" "}
    {deliveryCharge.toFixed(2)} €
  </h3>
)}

<h3>
  Veroton hinta: {grandTotal.toFixed(2)} €
</h3>

<h3>
  ALV 25,5 %: {vat.toFixed(2)} €
</h3>

<h2
  style={{
    color: "#000000",
    fontWeight: "bold",
    fontSize: "clamp(18px, 2.5vw, 24px)"
  }}
>
  Yhteensä: {totalWithVat.toFixed(2)} €
</h2>
      <hr />

<div
  style={{
    backgroundColor: "#eef6ff",
    border: "1px solid #b6d4fe",
    padding: "15px",
    borderRadius: "5px",
    marginBottom: "20px",
    color: "#345692",
  }}
>
  <strong>📦 Toimitustavat</strong>

  <p style={{ marginTop: "10px" }}>
    1.Tilaukset noudetaan Limosa-Keittiöiden
    tehtaalta Limingasta. Selvitämme parhaillaan muita toimitusvaihtoehtoja.
  </p>

  <p>
    2.Ilmoitamme tekstiviestillä, kun tilauksesi
    on valmis noudettavaksi.
  </p>
</div>
</div>

<h2
  style={{
    color: "#ff6b00",
    fontWeight: "bold",
  }}
>
  Asiakkaan tiedot
</h2>

<input
  type="text"
  placeholder="Nimi"
  value={customerName}
  onChange={(e) =>
    setCustomerName(e.target.value)
  }
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    boxSizing: "border-box",
  }}
/>

<input
  type="text"
  placeholder="Puhelin"
  value={phone}
  onChange={(e) =>
    setPhone(e.target.value)
  }
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    boxSizing: "border-box",
  }}
/>

<input
  type="email"
  placeholder="Sähköposti"
  value={email}
  onChange={(e) =>
    setEmail(e.target.value)
  }
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    boxSizing: "border-box",
  }}
/>

<input
  type="text"
  placeholder="Yritys (valinnainen)"
  value={company}
  onChange={(e) =>
    setCompany(e.target.value)
  }
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    boxSizing: "border-box",
  }}
/>

<textarea
  placeholder="Lisätiedot (valinnainen)"
  value={notes}
  onChange={(e) =>
    setNotes(e.target.value)
  }
  style={{
    width: "100%",
    minHeight: "70px",
    padding: "12px",
    boxSizing: "border-box",
  }}
/>
<br />
<br />
{successMessage && (
<div
  style={{
    backgroundColor: "#f8f9fa",
    border: "1px solid #dee2e6",
    borderRadius: "5px",
    padding: "12px",
    marginBottom: "20px",
    fontSize: "clamp(12px, 2vw, 16px)",
    color: "#555",
  }}
>
</div>

)}

  <p>*Annettuja tietoja käytetään ainoastaan tilauksen käsittelyyn.</p>
  <p>**Määrämittatilauksena tehdyillä tuotteilla ei ole vaihto- eikä palautusoikeutta.</p>
   <p>***Viimeistelemällä tilauksen hyväksyt nämä ehdot</p>
  
<button

  onClick={submitQuoteRequest}
  style={{
    backgroundColor: "#ff6b00",
    color: "white",
    border: "none",
    padding: "14px 30px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "20px",
  }}
>
  Lähetä tilaus
</button>

</div>
</div>

);
}

export default App;