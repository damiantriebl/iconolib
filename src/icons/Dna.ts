function Dna ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 3C4 8.625 12 12 12 12C12 12 20 15.375 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 3C20 8.625 12 12 12 12C12 12 4 15.375 4 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 6L19 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 18H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 9H16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 15H16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Dna };

