function Usb ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 2V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 14L18 12V8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 16L7 14.5V11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 22C13.8807 22 15 20.8807 15 19.5C15 18.1193 13.8807 17 12.5 17C11.1193 17 10 18.1193 10 19.5C10 20.8807 11.1193 22 12.5 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 5.5V8.5H19.5V5.5H16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 4L12.5 2L14.5 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 11C8.10457 11 9 10.1046 9 9C9 7.89543 8.10457 7 7 7C5.89543 7 5 7.89543 5 9C5 10.1046 5.89543 11 7 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Usb };

