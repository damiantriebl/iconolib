function System_restart ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 12H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.92896 4.92896L7.75738 7.75738" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.2427 16.2427L19.0711 19.0711" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.071 4.92896L16.2426 7.75738" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.75732 16.2427L4.9289 19.0711" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  System_restart };

