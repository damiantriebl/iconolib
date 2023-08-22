function Director_chair ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12L5 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 3L5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 3V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12L19 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12L20 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 4L19 4" stroke="currentColor" stroke-linejoin="round"/>
<path d="M5 7L19 7" stroke="currentColor" stroke-linejoin="round"/>
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

export {  Director_chair };

