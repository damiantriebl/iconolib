function Send_dollars ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8.23077C9.20085 7.49308 7.79346 6.97998 6.5 6.94785M3 15.2308C3.75189 16.1562 5.1499 16.684 6.5 16.7288M6.5 6.94785C4.96102 6.90962 3.58333 7.55229 3.58333 9.3077C3.58333 12.5385 10 10.9231 10 14.1538C10 15.9965 8.2922 16.7882 6.5 16.7288M6.5 6.94785V5M6.5 16.7288V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 12H21M21 12L17.16 8M21 12L17.16 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Send_dollars };

