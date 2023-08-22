function Task_list ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" stroke-width="1.5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6L20 6" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.80002 5.79999L4.60002 6.59998L6.60001 4.59999" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.80002 11.8L4.60002 12.6L6.60001 10.6" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.80002 17.8L4.60002 18.6L6.60001 16.6" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 12L20 12" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 18L20 18" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Task_list };

