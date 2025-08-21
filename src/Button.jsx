function Button({ color, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color || 'gray',
        color: 'white',
        border: 'none',
        margin: '5px',
        padding: '8px 16px',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
    </button>
  );
}
export default Button;

