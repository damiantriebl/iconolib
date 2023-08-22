function Sort_up ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 14L2 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 18H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 14V4M19 4L22 7M19 4L16 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Sort_up };

