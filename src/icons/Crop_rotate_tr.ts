function Crop_rotate_tr ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10V7C20 4.79086 18.2091 3 16 3H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.5 7.5L20 10L17.5 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 17L14 11C14 10.4477 13.5523 10 13 10L7 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 10H4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 22V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 8L4 19C4 19.5523 4.44772 20 5 20L16 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Crop_rotate_tr };

