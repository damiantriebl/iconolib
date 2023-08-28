function Add_lens ({size='16', strokeWidth='1.5', stroke='currentColor', fill='none'}:{size:'16' | '24' | '32', strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.99219 6H5.99219M8.99219 6H5.99219M5.99219 6V3M5.99219 6V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.11169 13.5C2.83542 18.3113 6.98691 22 11.9999 22C17.5228 22 21.9999 17.5229 21.9999 12C21.9999 6.98697 18.3112 2.83548 13.4999 2.11176" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.1973 9C17.0976 8.82774 16.9896 8.66089 16.8739 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.811 13.5C17.2683 15.6084 15.6084 17.2683 13.5 17.811" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  const parser = new DOMParser();
  const svgDocument = parser.parseFromString(svgContent, 'image/svg+xml');
  const svgElement = svgDocument.documentElement;

  if (svgElement instanceof SVGElement) {
    // Set size attribute on the <svg> element
    const sizePx = size === '16' ? '16' : size === '24' ? '24' : '32';
    svgElement.setAttribute('width', sizePx);
    svgElement.setAttribute('height', sizePx);

    // Set fill attribute on the <svg> element
    svgElement.setAttribute('fill', fill);

    // Set stroke attribute on all path elements
    const pathElements = svgElement.querySelectorAll('path');
    for (let i = 0; i < pathElements.length; i++) {
      const pathElement = pathElements[i];
      pathElement.setAttribute('stroke-width', strokeWidth);
      pathElement.setAttribute('stroke', stroke);
    }

    return svgElement;
  }

  throw new Error('Failed to create SVG element.');
};

export { Add_lens };

