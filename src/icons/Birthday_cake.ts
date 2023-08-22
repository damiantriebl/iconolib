function Birthday_cake ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16.5V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 14V13C3 11.8954 3.89543 11 5 11H19C20.1046 11 21 11.8954 21 13V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8L12 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8C13.2624 8 14 7.03185 14 5.375C14 3.71815 12 2 12 2C12 2 10 3.71815 10 5.375C10 7.03185 10.7376 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 14C9 15.6569 7.65685 17 6 17C4.34315 17 3 15.6569 3 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 14C21 15.6569 19.6569 17 18 17C16.3431 17 15 15.6569 15 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Birthday_cake };
