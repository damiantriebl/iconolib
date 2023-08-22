function Dishwasher ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H18.9999C20.1045 3 20.9999 3.89543 20.9999 4.99999L21 19C21 20.1046 20.1046 21 19 21H16.5" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 7H3.00006" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16V21M12 21H10M12 21H14" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16C13.6569 16 15 14.5076 15 12.6667V10H9V12.6667C9 14.5076 10.3431 16 12 16Z" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 5.01L18.01 4.99889" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 5.01L15.01 4.99889" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Dishwasher };
