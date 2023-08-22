function Brightness_window ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V12" stroke="currentColor" stroke-linecap="round"/>
<path d="M2 7L22 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 5.01L5.01 4.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 5.01L8.01 4.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 5.01L11.01 4.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 14L19.2246 15.0436L20.8284 15.1716L20.9564 16.7754L22 18L20.9564 19.2246L20.8284 20.8284L19.2246 20.9564L18 22L16.7754 20.9564L15.1716 20.8284L15.0436 19.2246L14 18L15.0436 16.7754L15.1716 15.1716L16.7754 15.0436L18 14Z" stroke="currentColor"/>
<path d="M16.7754 20.9564L18 22V14L16.7754 15.0436L15.1716 15.1716L15.0436 16.7754L14 18L15.0436 19.2246L15.1716 20.8284L16.7754 20.9564Z" fill="currentColor"/>
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

export {  Brightness_window };

