function User_cart ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12.5L21.1667 15M21.1667 15L20 18.5H15.5L14.5 15H21.1667Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 20.51L16.51 20.4989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5 20.51L19.51 20.4989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 18C2 14.134 5.13401 11 9 11C10.635 11 12.1391 11.5606 13.3306 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  User_cart };
