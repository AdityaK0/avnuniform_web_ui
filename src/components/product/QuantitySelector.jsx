export default function QuantitySelector({ quantity, onChange, min = 1, max = 9999 }) {
  const decrease = () => onChange(Math.max(min, quantity - 1));
  const increase = () => onChange(Math.min(max, quantity + 1));

  return (
    <div className="qty-selector" role="group" aria-label="Quantity">
      <button type="button" onClick={decrease} disabled={quantity <= min} aria-label="Decrease quantity">
        −
      </button>
      <input
        type="number"
        value={quantity}
        min={min}
        max={max}
        onChange={(e) => {
          const val = parseInt(e.target.value, 10);
          if (!Number.isNaN(val)) onChange(Math.min(max, Math.max(min, val)));
        }}
        aria-label="Quantity"
      />
      <button type="button" onClick={increase} disabled={quantity >= max} aria-label="Increase quantity">
        +
      </button>
    </div>
  );
}
