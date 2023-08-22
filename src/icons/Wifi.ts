function Wifi ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19.51L12.01 19.4989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 8C8 3.5 16 3.5 22 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12C9 9 15 9 19 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 15.5C10.7504 14.1 13.2498 14.0996 15.5001 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Wifi };

