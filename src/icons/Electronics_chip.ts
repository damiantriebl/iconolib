function Electronics_chip ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 19.4V4.6C7 4.26863 7.26863 4 7.6 4H16.4C16.7314 4 17 4.26863 17 4.6V19.4C17 19.7314 16.7314 20 16.4 20H7.6C7.26863 20 7 19.7314 7 19.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 20V22.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 20V22.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 4V1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 4V1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 12H4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5 12H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 6.5H4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5 6.5H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 17.5H4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5 17.5H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Electronics_chip };

