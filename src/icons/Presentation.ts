function Presentation ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4.6V17.4C22 17.7314 21.7314 18 21.4 18H2.6C2.26863 18 2 17.7314 2 17.4V4.6C2 4.26863 2.26863 4 2.6 4H21.4C21.7314 4 22 4.26863 22 4.6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 21.5L12 18L15.5 21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 2V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 12V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 10V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 8V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Presentation };

