

function App() {
  const [product, setProduct] = useState(
    "Kosteudenkestävä melamiini P3 16 mm"
  );

  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [leftEdge, setLeftEdge] = useState(false);
  const [rightEdge, setRightEdge] = useState(false);
  const [topEdge, setTopEdge] = useState(false);
  const [bottomEdge, setBottomEdge] = useState(false);

  const [orderLines, setOrderLines] = useState([]);
const products = [
  {
    name: "Kosteudenkestävä melamiini P3 16 mm",
    pricePerM2: 36,
    minHeight: 250,
    maxHeight: 2750,
    minWidth: 70,
    maxWidth: 2000,
  },
  {
    name: "Kosteudenkestävä melamiini P3 18 mm",
    pricePerM2: 50,
    minHeight: 250,
    maxHeight: 2750,
    minWidth: 70,
    maxWidth: 2000,
  },
];
const selectedProduct = products.find(
(p) => p.name === product
);
  const edgePricePerM = 4;
  const minimumPrice = 20;

  const area =
    ((Number(height) || 0) *
      (Number(width) || 0)) /
    1000000;

  const boardPrice =
  area * selectedProduct.pricePerM2;

  let edgeLength = 0;

  if (leftEdge) edgeLength += Number(height) || 0;
  if (rightEdge) edgeLength += Number(height) || 0;
  if (topEdge) edgeLength += Number(width) || 0;
  if (bottomEdge) edgeLength += Number(width) || 0;

  const edgePrice =
    (edgeLength / 1000) *
    edgePricePerM;

  const calculatedPrice =
    boardPrice + edgePrice;

  const piecePrice = Math.max(
    calculatedPrice,
    minimumPrice
  );

  const totalPrice =
    piecePrice * quantity;
function addToOrder() {

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
    return
}
  const item = {
    product,
    height,
    width,
    quantity: Number(quantity),
    leftEdge,
    rightEdge,
    topEdge,
    bottomEdge,
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

const grandTotal = orderLines.reduce(
  (sum, item) => sum + item.totalPrice,
  0
  );
  const vat = grandTotal * 0.255;
const totalWithVat = grandTotal + vat;
  return (
    <div
  style={{
    maxWidth: "800px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  }}
>
      <h1
  style={{
    color: "#ff6b00",
    marginBottom: "30px",
  }}
>
  Limosa-Keittiöiden levylaskuri
</h1>

      <h3>Tuote</h3>

      <select
  value={product}
  onChange={(e) =>
    setProduct(e.target.value)
  }
  style={{
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  }}
>
  {products.map((item) => (
    <option
      key={item.name}
      value={item.name}
    >
      {item.name}
    </option>
  ))}
</select>

      <h3>Korkeus (mm)</h3>

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
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    boxSizing: "border-box",
  }}
/>

      <h3>Leveys (mm)</h3>

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
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    boxSizing: "border-box",
  }}
/>

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
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    boxSizing: "border-box",
  }}
/>

      <h3>Reunanauhoitukset</h3>

      <label>
        <input
          type="checkbox"
          checked={leftEdge}
          onChange={(e) =>
            setLeftEdge(
              e.target.checked
            )
          }
        />
        Vasen sivu
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={rightEdge}
          onChange={(e) =>
            setRightEdge(
              e.target.checked
            )
          }
        />
        Oikea sivu
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={topEdge}
          onChange={(e) =>
            setTopEdge(
              e.target.checked
            )
          }
        />
        Yläreuna
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={bottomEdge}
          onChange={(e) =>
            setBottomEdge(
              e.target.checked
            )
          }
        />
        Alareuna
      </label>

      <hr />

      <h2>
        Hinta:{" "}
        {totalPrice.toFixed(2)} €
      </h2>
      <button
  onClick={addToOrder}
  style={{
    backgroundColor: "#ff6b00",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "15px",
  }}
>
  Lisää tilaukseen
</button>
<hr />

<h2>Tilauksen yhteenveto</h2>
{orderLines.map((item, index) => (

  <div
    key={index}
    style={{
      borderLeft: "5px solid #ff6b00",
      backgroundColor: "#f8f8f8",
      padding: "16px",
      marginTop: "12px",
      borderRadius: "10px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    }}
  >
``
      <p>
        <strong>{item.product}</strong>
      </p>

      <p>
        {item.height} x {item.width} mm
      </p>

      <p>
        Kpl: {item.quantity}
      </p>

      <p>
        Reunanauhat:
        {[
          item.leftEdge && "Vasen",
          item.rightEdge && "Oikea",
          item.topEdge && "Ylä",
          item.bottomEdge && "Ala",
        ]
          .filter(Boolean)
          .join(", ")}
      </p>

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
))}

      <hr />
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "#fff3e8",
          borderRadius: "10px",
        }}
      >
        <h3>
          Veroton hinta: {grandTotal.toFixed(2)} €
        </h3>

        <h3>
          ALV 25,5 %:
          {" "}
          {vat.toFixed(2)} €
        </h3>

        <h2>
        Yhteensä: {totalWithVat.toFixed(2)} €
      </h2>
  </div>
    </div>
  );
}

export default App;