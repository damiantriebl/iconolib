function Font_size ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 21V11M18 21L16 18.5M18 21L20 18.5M18 11L16 13M18 11L20 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 5L9 17M9 17H7M9 17H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 7V5L3 5L3 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Font_size };

