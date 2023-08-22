function Dashboard ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 15.8C15 14.0327 12 11 12 11C12 11 9 14.0327 9 15.8C9 17.5673 10.3431 19 12 19C13.6569 19 15 17.5673 15 15.8Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M12 4L12 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 7.5L6.5 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 10.5L20.5 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 17H6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 17H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Dashboard };

