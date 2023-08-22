function Face_id ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 3H5C3.89543 3 3 3.89543 3 5V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 3H19C20.1046 3 21 3.89543 21 5V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 8L16 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 8L8 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 16C9 16 10 17 12 17C14 17 15 16 15 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8L12 13L11 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 21H5C3.89543 21 3 20.1046 3 19V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 21H19C20.1046 21 21 20.1046 21 19V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Face_id };
