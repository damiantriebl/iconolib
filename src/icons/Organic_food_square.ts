function Organic_food_square ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18C9 18 9.9 14.2588 12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.1857 7.24133L16.5601 11.1306C16.8031 13.6536 14.9114 15.9001 12.3883 16.143C9.91266 16.3814 7.67 14.5718 7.43162 12.0962C7.19324 9.62055 9.00691 7.4204 11.4826 7.18203L15.6293 6.78274C15.9096 6.75575 16.1587 6.96107 16.1857 7.24133Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Organic_food_square };

