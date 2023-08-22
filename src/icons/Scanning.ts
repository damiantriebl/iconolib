function Scanning ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3H3V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12H12L22 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 19V17V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16V15.5V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 17V16V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21V19.5V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 3H21V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 21H3V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 21H21V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Scanning };

