function Scissor ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.23611 7C7.71115 6.46924 8 5.76835 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8C5.8885 8 6.68679 7.61375 7.23611 7ZM7.23611 7L20 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.23611 17C7.71115 17.5308 8 18.2316 8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19C2 17.3431 3.34315 16 5 16C5.8885 16 6.68679 16.3863 7.23611 17ZM7.23611 17L20 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Scissor };

