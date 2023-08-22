function Flare ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4563 2.66509C11.6717 2.2034 12.3283 2.2034 12.5437 2.66509L15.4077 8.80229C15.4673 8.93 15.57 9.03266 15.6977 9.09227L21.8349 11.9563C22.2966 12.1717 22.2966 12.8283 21.8349 13.0437L15.6977 15.9077C15.57 15.9673 15.4673 16.07 15.4077 16.1977L12.5437 22.3349C12.3283 22.7966 11.6717 22.7966 11.4563 22.3349L8.59227 16.1977C8.53266 16.07 8.43 15.9673 8.30229 15.9077L2.16509 13.0437C1.7034 12.8283 1.7034 12.1717 2.16509 11.9563L8.30229 9.09227C8.43 9.03266 8.53266 8.93 8.59227 8.80229L11.4563 2.66509Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Flare };

