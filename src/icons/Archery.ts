function Archery ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 12H17M8 12L6 10H2L4 12L2 14H6L8 12ZM17 12L15 10M17 12L15 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 22.5C18.7614 22.5 21 17.799 21 12C21 6.20101 18.7614 1.5 16 1.5C13.2386 1.5 11 6.20101 11 12C11 17.799 13.2386 22.5 16 22.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Archery };

