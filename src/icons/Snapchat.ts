function Snapchat ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" stroke-width="1.5" fill="white"/>
<path d="M18 8.75004C18 -0.250032 6 -0.249992 6 8.75004V10.25L4.37231 10.25C3.78861 10.25 3.54858 10.999 4.02356 11.3383L6 12.75C5.66667 13.9167 4.3 16.45 1.5 17.25C1.83333 17.75 2.8 18.75 4 18.75L5 20.25L7.5 19.75C8.33333 20.4167 10.4 21.75 12 21.75C13.6 21.75 15.6667 20.4167 16.5 19.75L19 20.25L20 18.75C21.2 18.75 22.1667 17.75 22.5 17.25C19.7 16.45 18.3333 13.9167 18 12.75L19.9764 11.3383C20.4514 10.999 20.2114 10.25 19.6277 10.25L18 10.25V8.75004Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Snapchat };

