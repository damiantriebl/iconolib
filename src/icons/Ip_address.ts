function Ip_address ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 15V9C2 5.68629 4.68629 3 8 3H16C19.3137 3 22 5.68629 22 9V15C22 18.3137 19.3137 21 16 21H8C4.68629 21 2 18.3137 2 15Z" stroke="currentColor"  />
<path d="M12 9V15" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9V15" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9999 12H14.5C15.3284 12 16 11.3284 16 10.5V10.5C16 9.67157 15.3284 9 14.5 9L12 9" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Ip_address };

