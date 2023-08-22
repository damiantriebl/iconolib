function Angle_tool ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21L3 3L9 3V15L21 15V21H3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 19V21" stroke="currentColor" stroke-linecap="round"/>
<path d="M9 19V21" stroke="currentColor" stroke-linecap="round"/>
<path d="M3 7H5" stroke="currentColor" stroke-linecap="round"/>
<path d="M3 11H5" stroke="currentColor" stroke-linecap="round"/>
<path d="M3 15H5" stroke="currentColor" stroke-linecap="round"/>
<path d="M17 19V21" stroke="currentColor" stroke-linecap="round"/>
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

export {  Angle_tool };
