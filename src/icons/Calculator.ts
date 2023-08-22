function Calculator ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 21V3C1 1.89543 1.89543 1 3 1H21C22.1046 1 23 1.89543 23 3V21C23 22.1046 22.1046 23 21 23H3C1.89543 23 1 22.1046 1 21Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M15 7L17 7H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15.5H17L19 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 18.5H17H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 7H7M9 7H7M7 7V5M7 7V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.58609 18.4142L7.0003 17M8.41452 15.5858L7.0003 17M7.0003 17L5.58609 15.5858M7.0003 17L8.41452 18.4142" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Calculator };
