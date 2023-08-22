function Skateboard ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 16C7.32843 16 8 15.3284 8 14.5C8 13.6716 7.32843 13 6.5 13C5.67157 13 5 13.6716 5 14.5C5 15.3284 5.67157 16 6.5 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 9L5.33333 10L18.6667 10L22 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 16C18.3284 16 19 15.3284 19 14.5C19 13.6716 18.3284 13 17.5 13C16.6716 13 16 13.6716 16 14.5C16 15.3284 16.6716 16 17.5 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Skateboard };

