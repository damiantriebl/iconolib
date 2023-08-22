function Border_left ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.01 20L19.9989 20.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.01 16L19.9989 16.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.01 12L19.9989 12.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.01 8L19.9989 8.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.01 4L19.9989 4.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.01 4L7.99889 4.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.01 4L11.9989 4.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.01 12L11.9989 12.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.01 4L15.9989 4.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.01 20L7.99889 20.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.01 20L11.9989 20.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.01 20L15.9989 20.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 4L4 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Border_left };

