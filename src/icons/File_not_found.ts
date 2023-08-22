function File_not_found ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16.01L12.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 3H4V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 11V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 11V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 3H20V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 21H4V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 21H20V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  File_not_found };

