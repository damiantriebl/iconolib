function Windows ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16.9865V7.01353C4 6.71792 4.21531 6.46636 4.50737 6.42072L19.3074 4.10822C19.6713 4.05137 20 4.33273 20 4.70103V19.299C20 19.6673 19.6713 19.9486 19.3074 19.8918L4.50737 17.5793C4.21531 17.5336 4 17.2821 4 16.9865Z" stroke="currentColor" />
<path d="M4 12H20" stroke="currentColor" />
<path d="M10.5 5.5V18.5" stroke="currentColor" />
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

export {  Windows };

