function Album_open ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2.20001C19.5645 3.12655 23 7.16206 23 12C23 16.8379 19.5645 20.8734 15 21.7999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 9C16.1411 9.28364 17 10.519 17 12C17 13.481 16.1411 14.7164 15 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 2L11 2L11 22L1 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 15.5C4 16.3284 3.32843 17 2.5 17C1.67157 17 1 16.3284 1 15.5C1 14.6716 1.67157 14 2.5 14C3.32843 14 4 14.6716 4 15.5ZM4 15.5V7.6C4 7.26863 4.26863 7 4.6 7H7" stroke="currentColor" stroke-linecap="round"/>
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

export {  Album_open };
