function At_sign_circle ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2778 17.5412C15.0948 18.4558 13.611 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 16.2778 14 15.7222 14 13C14 11.4444 14 8.5 14 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 12V11.5C14 10.1193 12.8807 9 11.5 9C10.1193 9 9 10.1193 9 11.5V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 12V12.5C14 13.8807 12.8807 15 11.5 15C10.1193 15 9 13.8807 9 12.5V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  At_sign_circle };

