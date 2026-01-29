interface StarsDisplayProps {
  value: number; // 1–5
  max?: number;
}

const StarsDisplay: React.FC<StarsDisplayProps> = ({ value, max = 5 }) => {
  return (
    <span aria-label={`Ocena ${value} na ${max}`}>
      {Array.from({ length: max }).map((_, index) => (
        <span
          key={index}
          style={{
            color: index < value ? 'goldenrod' : '#d1d5db',
            fontSize: '1.25rem',
          }}
        >
          ★
        </span>
      ))}
    </span>
  );
};

export default StarsDisplay;
