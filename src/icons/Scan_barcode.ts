function Scan_barcode ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12L10 6L11 6" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 12L11 12L11 6" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 18L10 15L11 15" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 15L11 18H10" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 6L7 12" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 15L7 18" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 6L14 12" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 15L14 18" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 6L17 12" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 15L17 18" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 3H3V6" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12H12L22 12" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 3H21V6" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 21H3V18" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 21H21V18" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Scan_barcode };

