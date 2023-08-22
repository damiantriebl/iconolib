function Crop_rotate_br ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 20H17C19.2091 20 21 18.2091 21 16V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 22.5L14 20L16.5 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 11L14 5C14 4.44772 13.5523 4 13 4L7 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 4H4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 16V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 2L4 13C4 13.5523 4.44772 14 5 14L16 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Crop_rotate_br };

