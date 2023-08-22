function Voice_lock_circle ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 21.8C13.3538 21.9311 12.6849 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.254 21.9905 12.5057 21.9719 12.7549" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6L12 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9L9 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 11L18 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 11L6 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 7L15 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.1667 18.5H21.4C21.7314 18.5 22 18.7686 22 19.1V21.4C22 21.7314 21.7314 22 21.4 22H17.6C17.2686 22 17 21.7314 17 21.4V19.1C17 18.7686 17.2686 18.5 17.6 18.5H17.8333M21.1667 18.5V16.75C21.1667 16.1667 20.8333 15 19.5 15C18.1667 15 17.8333 16.1667 17.8333 16.75V18.5M21.1667 18.5H17.8333" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Voice_lock_circle };
