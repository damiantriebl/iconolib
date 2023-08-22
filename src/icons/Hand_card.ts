function Hand_card ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 9L22 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 11L4.80662 7.84255C5.5657 6.98859 6.65372 6.5 7.79627 6.5L8 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 19.5003L7.5 19.5L11.5 16.5003C11.5 16.5003 12.3091 15.9528 13.5 15.0001C16 13.0002 13.5 9.83352 11 11.4997C8.96409 12.8565 7 14.0003 7 14.0003" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 13.5V7C8 5.89543 8.89543 5 10 5H20C21.1046 5 22 5.89543 22 7V13C22 14.1046 21.1046 15 20 15H13.5" stroke="currentColor"/>
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

export {  Hand_card };

