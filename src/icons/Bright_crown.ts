function Bright_crown ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3057_14630)">
<path d="M22 12L23 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 2V1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 23V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 20L19 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 4L19 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 20L5 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 4L5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 12L2 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.8 15.5L18 8.5L13.8 10.6L12 8.5L10.2 10.6L6 8.5L7.2 15.5H16.8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_3057_14630">
<rect width="24" height="24" fill="white"/>
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

export {  Bright_crown };
