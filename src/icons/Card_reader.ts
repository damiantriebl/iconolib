function Card_reader ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 19V3H19V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19Z" stroke="currentColor"/>
<path d="M5 6H3.5C2.67157 6 2 5.32843 2 4.5V4.5C2 3.67157 2.67157 3 3.5 3H20.5C21.3284 3 22 3.67157 22 4.5V4.5C22 5.32843 21.3284 6 20.5 6H19" stroke="currentColor"/>
<path d="M15 3L15 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Card_reader };

