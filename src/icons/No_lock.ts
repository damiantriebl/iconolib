function No_lock ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 12H6.6C6.26863 12 6 12.2686 6 12.6V19.4C6 19.7314 6.26863 20 6.6 20H17.4C17.7314 20 18 19.7314 18 19.4V18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 12V8C16 6.66667 15.2 4 12 4C11.2532 4 10.6371 4.14525 10.1313 4.38491" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 12H17.4C17.7314 12 18 12.2686 18 12.6V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 8V8.5V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  No_lock };
