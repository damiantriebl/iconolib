function Timer_off ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2L15 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 7L19 21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 10L12 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.1905 8.5C4.83275 9.93366 4 11.8696 4 14C4 18.4183 7.58172 22 12 22C14.0049 22 15.8375 21.2625 17.2413 20.044M19.4185 17C19.7935 16.0736 20 15.0609 20 14C20 9.58172 16.4183 6 12 6C11.0187 6 10.0786 6.17669 9.20988 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Timer_off };

