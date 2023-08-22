function Receive_yens ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12H13M13 12L16.84 8M13 12L16.84 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 13H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 7L7 12.5M11 7L7 12.5M7 12.5V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 15H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Receive_yens };

