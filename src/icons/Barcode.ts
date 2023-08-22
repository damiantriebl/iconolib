function Barcode ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 19L5 5L6 5" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19L12 5L13 5" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 5L9 19" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 5L16 19" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 5L19 19" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 5L6 19H5" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 5L13 19H12" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Barcode };

