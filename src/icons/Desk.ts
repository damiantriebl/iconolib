function Desk ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7L4 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 7L23 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 10L20 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 14H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 7L20 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 7L14 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 10L17 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 14L17 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Desk };
