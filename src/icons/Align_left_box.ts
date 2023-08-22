function Align_left_box ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0041 3.995L15.993 4.005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0041 3.995L19.993 4.005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0041 7.995L19.993 8.005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0041 11.995L19.993 12.005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0041 15.995L19.993 16.005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0041 19.995L19.993 20.005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.0041 19.995L15.993 20.005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0059 3.995L4.00586 3.995L4.00586 19.995H12.0059L12.0059 3.995Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Align_left_box };

