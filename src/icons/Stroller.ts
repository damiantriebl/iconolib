function Stroller ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M11.5 3C6.80558 3 3 6.80558 3 11.5C3 13.1526 3.4716 14.695 4.28755 16" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.7125 16C19.5284 14.695 20 13.1526 20 11.5V9.5H22.5" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 21C6.89543 21 6 20.1046 6 19C6 17.8954 6.89543 17 8 17C9.10457 17 10 17.8954 10 19C10 20.1046 9.10457 21 8 21Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 21C13.8954 21 13 20.1046 13 19C13 17.8954 13.8954 17 15 17C16.1046 17 17 17.8954 17 19C17 20.1046 16.1046 21 15 21Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5 3V12" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 12H19.5" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="24" height="24" stroke-width="1.5" fill="white"/>
</clipPath>
</defs>
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

export {  Stroller };
