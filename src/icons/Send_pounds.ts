function Send_pounds ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 12H21M21 12L17.16 8M21 12L17.16 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 13C6.33333 14.6667 5.33333 16.3333 4 17H10.3333C10.3333 17 11.3333 17 12 16.3333" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.66667 13H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 10C11 8.34315 9.65685 7 8 7C6.34315 7 5 8.34315 5 10C5 11.6569 6.34315 13 8 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Send_pounds };

