function Accessibility_tech ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19Z" stroke="currentColor"/>
<path d="M12.5 12.1605L16.5 12L16 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.8333 12L13.5 9.53846L10.8333 8L9.5 9.84615" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 7.5C15.2239 7.5 15 7.27614 15 7C15 6.72386 15.2239 6.5 15.5 6.5C15.7761 6.5 16 6.72386 16 7C16 7.27614 15.7761 7.5 15.5 7.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 18C8.84315 18 7.5 16.6569 7.5 15C7.5 13.3431 8.84315 12 10.5 12C12.1569 12 13.5 13.3431 13.5 15C13.5 16.6569 12.1569 18 10.5 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Accessibility_tech };

