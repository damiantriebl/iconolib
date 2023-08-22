function No_coin ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.62323 5.24841C2.99408 7.02743 2 9.39765 2 12C2 17.5229 6.47715 22 12 22C14.5361 22 16.8517 21.0559 18.6146 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3021 15.6775C21.7525 14.5392 22 13.2985 22 12C22 6.47715 17.5228 2 12 2C10.7687 2 9.58934 2.22255 8.5 2.62961" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391C13.1141 16.431 14.1901 16.0554 14.6973 15.1933" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16.391V18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 9.5C9.5 10.6811 10.3525 11.1647 11.3862 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872V5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  No_coin };

