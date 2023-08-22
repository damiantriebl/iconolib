function Axes ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 19.4516L12 12.8428M12 12.8428L12 2.99999M12 12.8428L3 19.4516" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.4375 16.7097L21 19.4516L18.1875 20" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.75 5.19354L12 2.99999L14.25 5.19354" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.8125 20L3 19.4516L3.5625 16.7097" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Axes };

