function Drawer ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 14H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 8H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 17H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 11H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 5H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 2.6V19.4C21 19.7314 20.7314 20 20.4 20H3.6C3.26863 20 3 19.7314 3 19.4V2.6C3 2.26863 3.26863 2 3.6 2H20.4C20.7314 2 21 2.26863 21 2.6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 20V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 20V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Drawer };

