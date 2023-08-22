function Half_cookie ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8 13.9999C20.8734 18.5644 16.8379 21.9999 12 21.9999C6.47715 21.9999 2 17.5228 2 11.9999C2 6.81459 5.94668 2.55104 11 2.04932" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 10C6.22386 10 6 9.77614 6 9.5C6 9.22386 6.22386 9 6.5 9C6.77614 9 7 9.22386 7 9.5C7 9.77614 6.77614 10 6.5 10Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5 4C20.2239 4 20 3.77614 20 3.5C20 3.22386 20.2239 3 20.5 3C20.7761 3 21 3.22386 21 3.5C21 3.77614 20.7761 4 20.5 4Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 15.01L7.01 14.9989" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 15.01L17.01 14.9989" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 12.01L11.01 11.9989" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 9.01L21.01 8.99889" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 6.01L17.01 5.99889" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 2C10.5 3.5 11.4999 5 13.0855 5C11 8.5 13 12 18 11.5C18 14 20.5 14.5 21.6998 14.0136" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Half_cookie };

