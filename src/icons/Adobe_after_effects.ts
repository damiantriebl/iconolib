function Adobe_after_effects ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 13V12C14 10.8954 14.8954 10 16 10V10C17.1046 10 18 10.8954 18 12V13H14ZM14 13V14C14 15.1046 14.8954 16 16 16H17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 16L7.125 13M12 16L10.875 13M7.125 13L9 8L10.875 13M7.125 13L10.875 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Adobe_after_effects };

