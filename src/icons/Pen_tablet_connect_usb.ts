function Pen_tablet_connect_usb ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 7V5C22 3.89543 21.1046 3 20 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12H6" stroke="currentColor" stroke-width="1.5"/>
<path d="M6 3V21" stroke="currentColor" stroke-width="1.5"/>
<path d="M19.25 12H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.7 12L17.875 15H16.225" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.6 12L16.5 9H14.575" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12C22 11.2469 21.3844 10.6364 20.625 10.6364C19.8656 10.6364 19.25 11.2469 19.25 12C19.25 12.7531 19.8656 13.3636 20.625 13.3636C21.3844 13.3636 22 12.7531 22 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Pen_tablet_connect_usb };

