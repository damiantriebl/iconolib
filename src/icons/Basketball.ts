function Basketball ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.9506 11C15.48 13.6667 9.69644 13.6668 2.04938 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5716 4.46234C15.905 8.99175 15.9049 14.1847 18.5716 19.5377" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.42838 4.46234C8.09504 8.99175 8.09516 14.1847 5.42838 19.5377" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Basketball };

