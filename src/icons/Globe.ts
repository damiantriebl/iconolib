function Globe ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 12.5L8 14.5L7 18L8 21" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 20.5L16.5 18L14 17V13.5L17 12.5L21.5 13" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 5.5L18.5 7L15 7.5V10.5L17.5 9.5H19.5L21.5 10.5" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 10.5L5 8.5L7.5 8L9.5 5L8.5 3" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Globe };
