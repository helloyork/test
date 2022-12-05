export function clickOutside(node: Node) {
	const handleClick = (event: MouseEvent) => {
		const target = event.target as Node;
		if (!node.contains(target)) {
			node.dispatchEvent(new CustomEvent('outclick'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
