function Curve_array ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.16405 17C5.45344 15.9512 5.83338 14.9485 6.29589 14M11.5 7.79447C12.2822 7.22779 13.1177 6.72612 14 6.29589" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 22C3.11929 22 2 20.8807 2 19.5C2 18.1193 3.11929 17 4.5 17C5.88071 17 7 18.1193 7 19.5C7 20.8807 5.88071 22 4.5 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 12C8.11929 12 7 10.8807 7 9.5C7 8.11929 8.11929 7 9.5 7C10.8807 7 12 8.11929 12 9.5C12 10.8807 10.8807 12 9.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5 7C18.1193 7 17 5.88071 17 4.5C17 3.11929 18.1193 2 19.5 2C20.8807 2 22 3.11929 22 4.5C22 5.88071 20.8807 7 19.5 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Curve_array };

