function Facetime ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 16V8C2 4.68629 4.68629 2 8 2H16C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16Z" stroke="currentColor" />
<path d="M6 13V11C6 9.89543 6.89543 9 8 9H11C12.1046 9 13 9.89543 13 11V13C13 14.1046 12.1046 15 11 15H8C6.89543 15 6 14.1046 6 13Z" stroke="currentColor" />
<path d="M17.0399 9.22L13.9733 11.52C13.6533 11.76 13.6533 12.24 13.9733 12.48L17.0399 14.78C17.4355 15.0767 17.9999 14.7944 17.9999 14.3V9.7C17.9999 9.20557 17.4355 8.92334 17.0399 9.22Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Facetime };
