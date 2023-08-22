function Perspective_view ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 21L4.14286 3H19.8571L23 21H1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 16.5H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 7.5H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 3.5L6.5 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 3.5L17.5 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Perspective_view };

