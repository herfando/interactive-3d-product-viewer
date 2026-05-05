export default function UI({ autoRotate, setAutoRotate, setColor }: any) {
  return (
    <div style={styles.panel}>
      {/* TITLE */}
      <div>
        <h1 style={styles.title}>Lamborghini Countach</h1>
        <p style={styles.sub}>2021 • LPI 800-4 • V12 Hybrid</p>
      </div>

      {/* SPECS */}
      <div style={styles.card}>
        <Spec label="Power" value="803 HP" />
        <Spec label="Top Speed" value="355 km/h" />
        <Spec label="0-100" value="2.8s" />
      </div>

      {/* BUTTON */}
      <button
        onClick={() => setAutoRotate(!autoRotate)}
        style={styles.primaryBtn}
      >
        {autoRotate ? "Stop Rotation" : "Auto Rotate"}
      </button>

      {/* COLORS */}
      <div style={{ marginTop: 10, fontSize: 12, opacity: 0.7 }}>Paint</div>

      <div style={styles.colors}>
        <Color onClick={() => setColor("red")} color="#e11d48" />
        <Color onClick={() => setColor("black")} color="#111" />
        <Color onClick={() => setColor("yellow")} color="#facc15" />
        <Color onClick={() => setColor("white")} color="#e5e7eb" />
      </div>
    </div>
  );
}

/* SPEC ITEM */
function Spec({ label, value }: any) {
  return (
    <div style={styles.specRow}>
      <span style={{ opacity: 0.6 }}>{label}</span>
      <span>{value}</span>
    </div>
  );
}

/* COLOR DOT */
function Color({ color, onClick }: any) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: color,
        cursor: "pointer",
        border: "1px solid rgba(255,255,255,0.2)",
      }}
    />
  );
}

/* STYLE */
const styles: any = {
  panel: {
    width: 320,
    padding: 24,
    height: "100%",
    background: "rgba(10,10,10,0.85)",
    backdropFilter: "blur(10px)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    borderLeft: "1px solid rgba(255,255,255,0.05)",
  },

  title: {
    fontSize: 18,
    margin: 0,
    letterSpacing: 0.5,
  },

  sub: {
    fontSize: 12,
    opacity: 0.6,
    marginTop: 4,
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    padding: 12,
    borderRadius: 10,
    fontSize: 12,
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },

  specRow: {
    display: "flex",
    justifyContent: "space-between",
  },

  primaryBtn: {
    padding: "10px 12px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    background: "#ffffff",
    color: "#000",
    fontWeight: 600,
  },

  colors: {
    display: "flex",
    gap: 10,
    marginTop: 6,
  },
};
