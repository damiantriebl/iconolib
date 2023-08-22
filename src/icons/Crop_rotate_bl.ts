function Crop_rotate_bl ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14V17C4 19.2091 5.79086 21 8 21H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.5 16.5L4 14L6.5 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 11L20 5C20 4.44772 19.5523 4 19 4L13 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 4H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 16V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 2L10 13C10 13.5523 10.4477 14 11 14L22 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Crop_rotate_bl };

