export default function FormField({ label, htmlFor, children, error }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <label
          htmlFor={htmlFor}
          style={{ width: "100px", marginTop: "0.5rem" }}
        >
          {label}
        </label>
        <div style={{ flex: 1 }}>{children}</div>
      </div>
      {error && (
        <p style={{ color: "red", marginLeft: "100px", marginTop: "0.25rem" }}>
          {error}
        </p>
      )}
    </div>
  );
}
