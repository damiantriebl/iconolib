function Table ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 3V21H3V3H21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 16.5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 7.5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 3V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 3V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Table };

