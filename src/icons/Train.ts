function Train ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.6087 7H14.3913C15.832 7 17 8.16795 17 9.6087C17 9.82481 16.8248 10 16.6087 10H7.3913C7.17519 10 7 9.82481 7 9.6087C7 8.16795 8.16795 7 9.6087 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 3H15C18.3137 3 21 5.68629 21 9V13C21 16.3137 18.3137 19 15 19H9C5.68629 19 3 16.3137 3 13V9C3 5.68629 5.68629 3 9 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 15.01L16.01 14.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 15.01L8.01 14.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 19L8.5 21.5" stroke="currentColor" stroke-linecap="round"/>
<path d="M13.5 19L15.5 21.5" stroke="currentColor" stroke-linecap="round"/>
<path d="M16.5 19L18.5 21.5" stroke="currentColor" stroke-linecap="round"/>
<path d="M7.5 19L5.5 21.5" stroke="currentColor" stroke-linecap="round"/>
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

export {  Train };

