function Log_denied ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8566 9.2C17.1306 8.45946 16.119 8 15 8C12.7909 8 11 9.79086 11 12C11 13.0902 11.4361 14.0785 12.1434 14.8M17.8566 9.2C18.5639 9.9215 19 10.9098 19 12C19 14.2091 17.2091 16 15 16C13.881 16 12.8694 15.5405 12.1434 14.8M17.8566 9.2L12.1434 14.8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Log_denied };

