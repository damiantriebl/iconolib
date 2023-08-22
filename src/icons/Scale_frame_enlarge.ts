function Scale_frame_enlarge ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 13.6V21H3.6C3.26863 21 3 20.7314 3 20.4V13H10.4C10.7314 13 11 13.2686 11 13.6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 21H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 13V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 3H3.6C3.26863 3 3 3.26863 3 3.6V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 3H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 10V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 3H20.4C20.7314 3 21 3.26863 21 3.6V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 21H20.4C20.7314 21 21 20.7314 21 20.4V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 10H14V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Scale_frame_enlarge };

