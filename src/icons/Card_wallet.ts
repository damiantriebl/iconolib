function Card_wallet ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" stroke-width="1.5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 20H5C3.89543 20 3 19.1046 3 18V9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20Z" stroke="currentColor" />
<path d="M7 7V3.6C7 3.26863 7.26863 3 7.6 3H16.4C16.7314 3 17 3.26863 17 3.6V7" stroke="currentColor" />
<path d="M10 3V7" stroke="currentColor" />
<path d="M12 3V7" stroke="currentColor" />
<path d="M16.5 14C16.2239 14 16 13.7761 16 13.5C16 13.2239 16.2239 13 16.5 13C16.7761 13 17 13.2239 17 13.5C17 13.7761 16.7761 14 16.5 14Z" fill="currentColor" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Card_wallet };

