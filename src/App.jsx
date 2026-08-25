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
  const [customerName, setCustomerName] =
  useState("");

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
kalustelevyt: [
  {
    name: "Valkoinen kosteudenkestävä melamiini P3 16mm",
    shortName: "Valkoinen mel P3 SM 16mm",
    pricePerM2: 38,
    minHeight: 250,
    maxHeight: 2750,
    minWidth: 70,
    maxWidth: 2000,
    image: melamiinip3,
  },
  {
    name: "Valkoinen kosteudenkestävä melamiini soft P3 16mm",
    shortName: "Valkoinen mel P3 BS 16mm",
    pricePerM2: 52,
    minHeight: 250,
    maxHeight: 2750,
    minWidth: 70,
    maxWidth: 2000,
    image: melamiinip3,
  },
  {
    name: "Cashmere melamiini 16mm",
    shortName: "Cashmere mel 16mm",
    pricePerM2: 52,
    minHeight: 250,
    maxHeight: 2750,
    minWidth: 70,
    maxWidth: 2000,
    image: cashmere,
  },
  {
    name: "Vanilja melamiini 16mm",
    shortName: "Vanilja mel 16mm",
    pricePerM2: 52,
    minHeight: 250,
    maxHeight: 2750,
    minWidth: 70,
    maxWidth: 2000,
    image: vanilja,
  },
  {
    name: "Satiini melamiini (matta) 16mm",
    shortName: "Satiini mel 16mm",
    pricePerM2: 52,
    minHeight: 250,
    maxHeight: 2750,
    minWidth: 70,
    maxWidth: 2000,
    image: satiini,
  },
  {
    name: "Hiekkatammi melamiini 16mm",
    shortName: "Hiekkatammi mel 16mm",
    pricePerM2: 52,
    minHeight: 250,
    maxHeight: 2750,
    minWidth: 70,
    maxWidth: 2000,
    image: hiekkatammi,
  },
  {
    name: "Harmaa melamiini (matta) 16mm",
    shortName: "Harmaa mel 16mm",
    pricePerM2: 52,
    minHeight: 250,
    maxHeight: 2750,
    minWidth: 70,
    maxWidth: 2000,
    image: keskiharmaa,
  },
],

laminaattitasot: [
{
  name: "Viti valkoinen",
  shortName: "Viti valkoinen",
  pricingType: "countertop",
  price600: 125,
  price1200: 199,
  backEdgePricePerMeter: 7,
  minHeight: 300,
  maxHeight: 4100,
  minWidth: 300,
  maxWidth: 1200,
  image: vitivalkoinen,
},
{
  name: "Matta musta",
  shortName: "Matta musta",
  pricingType: "countertop",
  price600: 155,
  price1200: 239,
  backEdgePricePerMeter: 7,
  minHeight: 300,
  maxHeight: 4100,
  minWidth: 300,
  maxWidth: 1200,
  image: mattamusta,
},
{
  name: "Tammi",
  shortName: "Tammi",
  pricingType: "countertop",
  price600: 155,
  price1200: 239,
  backEdgePricePerMeter: 7,
  minHeight: 300,
  maxHeight: 4100,
  minWidth: 300,
  maxWidth: 1200,
  image: tammi,
},
{
  name: "Kultatammi",
  shortName: "Kultatammi",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  minHeight: 300,
  maxHeight: 4100,
  minWidth: 300,
  maxWidth: 1200,
  image: kultatammi,
},
{
  name: "Vaalea pähkinä",
  shortName: "Vaalea pähkinä",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  minHeight: 300,
  maxHeight: 4100,
  minWidth: 300,
  maxWidth: 1200,
  image: vaaleapähkinä,
},
{
  name: "Musta oxidoitu",
  shortName: "Musta oxidoitu",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  minHeight: 300,
  maxHeight: 4100,
  minWidth: 300,
  maxWidth: 1200,
  image: mustaoxidoitu,
},
{
  name: "Betoni",
  shortName: "Betoni",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  minHeight: 300,
  maxHeight: 4100,
  minWidth: 300,
  maxWidth: 1200,
  image: betoni,
},
{
  name: "Vaalea kivi",
  shortName: "Vaalea kivi",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  minHeight: 300,
  maxHeight: 4100,
  minWidth: 300,
  maxWidth: 1200,
  image: vaaleakivi,
},
{
  name: "Harmaa kivi",
  shortName: "Harmaa kivi",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  minHeight: 300,
  maxHeight: 4100,
  minWidth: 300,
  maxWidth: 1200,
  image: harmaakivi,
},
{
  name: "Galaxi",
  shortName: "Galaxi",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  minHeight: 300,
  maxHeight: 4100,
  minWidth: 300,
  maxWidth: 1200,
  image: galaxi,
},
{
  name: "Musta pronssi",
  shortName: "Musta pronssi",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  minHeight: 300,
  maxHeight: 4100,
  minWidth: 300,
  maxWidth: 1200,
  image: mustapronssi,
},
{
  name: "Calacatta",
  shortName: "Calacatta",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  minHeight: 300,
  maxHeight: 4100,
  minWidth: 300,
  maxWidth: 1200,
  image: calacatta,
},
{
  name: "Portobello",
  shortName: "Portobello",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  minHeight: 300,
  maxHeight: 4100,
  minWidth: 300,
  maxWidth: 1200,
  image: portobello,
},
{
  name: "Perlino",
  shortName: "Perlino",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  minHeight: 300,
  maxHeight: 4100,
  minWidth: 300,
  maxWidth: 1200,
  image: perlino,
},
{
  name: "Stonehaven",
  shortName: "Stonehaven",
  pricingType: "countertop",
  price600: 129,
  price1200: 199,
  backEdgePricePerMeter: 7,
  minHeight: 300,
  maxHeight: 4100,
  minWidth: 300,
  maxWidth: 1200,
  image: stonehaven,
},
]
};

const selectedProduct =
  productGroups[productGroup]?.find(
    (p) => p.name === product
  );
  const edgePricePerM = 3;
  const minimumPrice =
  productGroup === "laminaattitasot"
    ? 35
    : 16;

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

  const calculatedPrice =
    boardPrice + edgePrice;

  const piecePrice = Math.max(
    calculatedPrice,
    minimumPrice
  );

  const totalPrice =
    piecePrice * quantity;

function addToOrder() {

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
  const item = {
    product,
    productGroup,
    height,
    width,
    quantity: Number(quantity),
    leftEdge,
    rightEdge,
    topEdge,
    bottomEdge,
    backEdgeUpgrade,
    totalPrice,
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

    return `#${index + 1} ${
  item.productGroup === "kalustelevyt"
    ? "Kalustelevy"
    : "Laminaattitaso"
}
Tuote: ${item.product}
${
  item.productGroup === "laminaattitasot"
    ? `Pituus: ${item.height} mm
Syvyys: ${item.width} mm`
    : `Korkeus: ${item.height} mm
Leveys: ${item.width} mm`
}
Kpl: ${item.quantity}
${
  item.productGroup === "laminaattitasot"
    ? item.backEdgeUpgrade
      ? "Takareuna: ABS-reunanauha"
      : ""
    : `Reunanauhat: ${edges || "Ei reunanauhoja"}`
}
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
  Limosa-Keittiöiden levylaskuri
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
fontSize: "20px",
marginTop: "-10px",
marginBottom: "30px",
}}
>
Tilaa mittatarkat kalustelevyt helposti suoraan verkosta. Valmistus 3-7 arkipäivässä.
</p>
{selectedProduct?.image && (
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
      src={selectedProduct.image}
      alt={selectedProduct.name}
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
      {selectedProduct.shortName || selectedProduct.name}
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
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "20px",
  }}
>
  <option value="">
  Valitse tuoteryhmä
</option>

<option value="kalustelevyt">
  Kalustelevyt
</option>

<option value="laminaattitasot">
  Laminaattitasot 30mm (suorareuna)
</option>
</select>

{productGroup && (
<>
<h3>Tuote</h3>

<select
  value={product}
  onChange={(e) =>
    setProduct(e.target.value)
  }
  style={{
    width: "100%",
    padding: "6px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    fontSize: "14px",
    fontWeight: "500",
  }}
>
  {productGroups[productGroup]?.map((item) => (
    <option
      key={item.name}
      value={item.name}
    >
      {item.name}
    </option>
  ))}
</select>
  </>
)}
<div
  style={{
    display: "grid",
gridTemplateColumns: "1fr 1fr 120px",
gap: "15px",
alignItems: "end",
  }}
><div>
 
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
  <h3>Määrä (kpl)</h3>

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
    fontSize: "14px",
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
    fontSize: "20px",
    fontWeight: "bold",
  }}
>
  {height && width && quantity
    ? `${totalPrice.toFixed(2)} € (veroton)`
    : "Syötä mitat ja määrä"}
</h2>

  <button
    onClick={addToOrder}
    style={{
      backgroundColor: "#ff6b00",
      color: "white",
      border: "none",
      padding: "12px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
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

  const productInfo =
  Object.values(productGroups)
    .flat()
    .find((p) => p.name === item.product);
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
  {productInfo?.image && (
  <img
    src={productInfo.image}
    alt={productInfo.name}
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
    margin: "0 0 10px 0",
    fontWeight: "bold",
    fontSize: "18px",
    color: "#444",
    lineHeight: "1.4",
    wordBreak: "break-word",
  }}
>
  {item.product}
</p>

      {item.productGroup === "laminaattitasot" ? (
  <p>
    Pituus: {item.height} mm<br />
    Syvyys: {item.width} mm
  </p>
) : (
  <p>
    Korkeus: {item.height} mm<br />
    Leveys: {item.width} mm
  </p>
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

{item.productGroup === "laminaattitasot" &&
  item.backEdgeUpgrade && (
    <p>
      Takareuna: ABS-reunanauha
    </p>
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
    fontSize: "30px",
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
    fontSize: "14px",
    color: "#555",
  }}
>
</div>

)}

  <p>*Annettuja tietoja käytetään ainoastaan tilauksen käsittelyyn.* </p>
  
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