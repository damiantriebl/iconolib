function Square_cursor ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H12" stroke="currentColor" stroke-linecap="round"/>
<path d="M20.879 16.9171C21.373 17.2211 21.342 17.9601 20.834 18.0181L18.267 18.3091L17.116 20.6211C16.888 21.0801 16.183 20.8551 16.066 20.2871L14.811 14.1711C14.712 13.6911 15.144 13.3891 15.561 13.6461L20.879 16.9171Z" stroke="currentColor"/>
</svg>`;


 const parser = new DOMParser();
  const svgDocument = parser.parseFromString(svgContent, 'image/svg+xml');
  const svgElement = svgDocument.documentElement;

  if (svgElement instanceof SVGElement) {
    svgElement.setAttribute('stroke-width', strokeWidth);
    svgElement.setAttribute('stroke', stroke);
    svgElement.setAttribute('fill', fill);
    return svgElement;
  }

  throw new Error('Failed to create SVG element.');
};

export {  Square_cursor };

