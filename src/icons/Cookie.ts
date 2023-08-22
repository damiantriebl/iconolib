function Cookie ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5C8 10.7761 7.77614 11 7.5 11Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 18C12.4477 18 12 17.5523 12 17C12 16.4477 12.4477 16 13 16C13.5523 16 14 16.4477 14 17C14 17.5523 13.5523 18 13 18Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 7.01L11.01 6.99889" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 16.01L8.01 15.9989" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9.01L16.01 8.99889" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 14.01L17.01 13.9989" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 12.01L13.01 11.9989" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Cookie };

