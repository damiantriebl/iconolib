function Wifi_off ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19.51L12.01 19.4989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 8C3.18476 7.11143 4.4475 6.39832 5.75742 5.86066M22 8C18.4276 5.32068 14.1461 4.23664 10 4.74787" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12C6.3333 11 7.8888 10.3333 9.51838 10M19 12C17.7314 11.0486 16.2617 10.3989 14.7183 10.0509" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 15.5C10.7504 14.1 13.2498 14.0996 15.5001 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Wifi_off };
