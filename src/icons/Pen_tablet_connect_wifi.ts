function Pen_tablet_connect_wifi ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 15.51L17.01 15.4989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11.9999C14.5 9.00001 19.5 9 22 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 14C15.5 12 18.5 12 20 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 7V5C22 3.89543 21.1046 3 20 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12H6" stroke="currentColor" stroke-width="1.5"/>
<path d="M6 3V21" stroke="currentColor" stroke-width="1.5"/>
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

export {  Pen_tablet_connect_wifi };

