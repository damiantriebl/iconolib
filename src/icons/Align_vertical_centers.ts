function Align_vertical_centers ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L2 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 19V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V19C16 20.1046 15.1046 21 14 21H10C8.89543 21 8 20.1046 8 19Z" stroke="currentColor"/>
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

export {  Align_vertical_centers };
