function Farm ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20H2V8L8 5L14 8V20H11M5 20V13H11V20M5 20H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 14V17V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 17H18H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 14H18H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Farm };

