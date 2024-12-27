function TapButton({ onTap, disabled }) {
  return (
    <button
      onClick={onTap}
      disabled={disabled}
      className={`
        h-32 w-32 rounded-full 
        ${disabled 
          ? 'bg-blue-300 cursor-not-allowed' 
          : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
        }
        text-white font-bold text-xl
        transform transition-transform duration-100
        active:scale-95
      `}
    >
      تپ!
    </button>
  );
}

export default TapButton;