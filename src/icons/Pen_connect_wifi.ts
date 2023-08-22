function Pen_connect_wifi ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 9.76L8.01 9.74889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 6.24992C5.5 3.25001 10.5 3.25 13 6.25001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 8.25003C6.5 6.25 9.5 6.25 11 8.25003" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 6.5L18.5 5.5C19.3284 4.67157 20.6716 4.67157 21.5 5.5V5.5C22.3284 6.32843 22.3284 7.67157 21.5 8.5L20.5 9.5M17.5 6.5L6.69591 17.3041C6.56775 17.4322 6.47684 17.5928 6.43288 17.7686L5.5 21.5L9.23128 20.5672C9.40711 20.5232 9.56769 20.4323 9.69585 20.3041L20.5 9.5M17.5 6.5L20.5 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Pen_connect_wifi };

