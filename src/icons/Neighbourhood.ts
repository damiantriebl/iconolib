function Neighbourhood ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 21H4C2.89543 21 2 20.1046 2 19V14.4599C2 13.7605 2.36531 13.1119 2.9634 12.7495L6.4634 10.6282C7.10053 10.2421 7.89947 10.2421 8.5366 10.6282L12.0366 12.7495C12.6347 13.1119 13 13.7605 13 14.4599V19C13 20.1046 12.1046 21 11 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 10V6.45985C6.5 5.76049 6.86531 5.11193 7.4634 4.74946L10.9634 2.62824C11.6005 2.24211 12.3995 2.24211 13.0366 2.62824L16.5366 4.74946C17.1347 5.11194 17.5 5.76049 17.5 6.45985V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 21H20C21.1046 21 22 20.1046 22 19V14.4599C22 13.7605 21.6347 13.1119 21.0366 12.7495L17.5314 10.6251C16.897 10.2406 16.1019 10.2389 15.4658 10.6205L14.8334 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 21V17.6C9 17.2686 8.73137 17 8.4 17L6.6 17C6.26863 17 6 17.2686 6 17.6V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 21V17.6C18 17.2686 17.7314 17 17.4 17L16 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Neighbourhood };

