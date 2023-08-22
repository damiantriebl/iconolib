function Swipe_two_fingers_down_gesture ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 12C4.567 12 3 10.433 3 8.5C3 6.567 4.567 5 6.5 5C8.433 5 10 6.567 10 8.5C10 10.433 8.433 12 6.5 12ZM6.5 12V19M6.5 19L9 16.6M6.5 19L4 16.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 12C15.567 12 14 10.433 14 8.5C14 6.567 15.567 5 17.5 5C19.433 5 21 6.567 21 8.5C21 10.433 19.433 12 17.5 12ZM17.5 12V19M17.5 19L20 16.6M17.5 19L15 16.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Swipe_two_fingers_down_gesture };

