const toAlpha = (hex: string, a: number) => {
	if (!hex.includes('#')) return hex;

	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);

	return `rgba(${r}, ${g}, ${b}, ${a})`;
};

toAlpha('#6e97a2', 0.5);
