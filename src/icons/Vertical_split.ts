function Vertical_split ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 14V22M12 22L15.5 18.5M12 22L8.5 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 10V2M12 2L15.5 5.5M12 2L8.5 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 14L21 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 10L21 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Vertical_split };

