function Apple_mac ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2C16.3632 4.17921 14.0879 5.83084 12.8158 6.57142C12.4406 6.78988 12.0172 6.5117 12.0819 6.08234C12.2993 4.63878 13.0941 2.00008 16 2Z" stroke="currentColor" />
<path d="M9 6.5C9.89676 6.5 10.6905 6.69941 11.2945 6.92013C12.0563 7.19855 12.9437 7.19854 13.7055 6.92012C14.3094 6.6994 15.1032 6.5 15.9999 6.5C17.0852 6.5 18.4649 7.08889 19.4999 8.26666C16 11 17 15.5 20.269 16.6916C19.2253 19.5592 17.2413 21.5 15.4999 21.5C13.9999 21.5 14 20.8 12.5 20.8C11 20.8 11 21.5 9.5 21.5C7 21.5 4 17.5 4 12.5C4 8.5 7 6.5 9 6.5Z" stroke="currentColor" />
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

export {  Apple_mac };
