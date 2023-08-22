function Headset_charge ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 13L10 17H14L11.5 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 13.5V13C4 8.02944 7.58172 4 12 4C16.4183 4 20 8.02944 20 13V13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 17.4385V15.5616C2 14.6439 2.62459 13.8439 3.51493 13.6213L4 13.5L5.25448 13.1864C5.63317 13.0918 6 13.3782 6 13.7685V19.2316C6 19.6219 5.63317 19.9083 5.25448 19.8137L3.51493 19.3788C2.62459 19.1562 2 18.3562 2 17.4385Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 17.4385V15.5616C22 14.6439 21.3754 13.8439 20.4851 13.6213L20 13.5L18.7455 13.1864C18.3668 13.0918 18 13.3782 18 13.7685V19.2316C18 19.6219 18.3668 19.9083 18.7455 19.8137L20.4851 19.3788C21.3754 19.1562 22 18.3562 22 17.4385Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Headset_charge };
