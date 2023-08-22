function Add_selection ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 12H12M16 12H12M12 12V8M12 12V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 4H4V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 11V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 4H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 20H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 11V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 4H20V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 20H4V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 20H20V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Add_selection };
