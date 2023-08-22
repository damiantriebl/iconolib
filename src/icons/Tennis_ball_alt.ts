function Tennis_ball_alt ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.6602 6.99993C23.4216 11.7829 21.7829 17.8988 17 20.6602C12.217 23.4216 6.10113 21.7829 3.33971 16.9999C0.57828 12.217 2.21703 6.1011 6.99996 3.33968C11.7829 0.578252 17.8988 2.217 20.6602 6.99993Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.46 15.2419C16.474 11.9395 13.8776 7.44223 13.9223 2.18631" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0776 21.8136C9.71062 15.8444 7.11402 11.3472 2.53992 8.75793" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Tennis_ball_alt };

