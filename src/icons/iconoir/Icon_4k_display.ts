function Icon_4k_display ({size='16', strokeWidth='1.5', stroke='currentColor', fill='none'}:{size:'16' | '24' | '32', strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 9L13.5 13M13.5 15L13.5 13M13.5 13L14.8706 11.4336M17 9L14.8706 11.4336M14.8706 11.4336L17 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 9L6.5 13.5L10 13.5L10 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 18.4V5.6C2 5.26863 2.26863 5 2.6 5H21.4C21.7314 5 22 5.26863 22 5.6V18.4C22 18.7314 21.7314 19 21.4 19H2.6C2.26863 19 2 18.7314 2 18.4Z" stroke="currentColor" stroke-width="1.5"/>
</svg>`;

  const parser = new DOMParser();
  const svgDocument = parser.parseFromString(svgContent, 'image/svg+xml');
  const svgElement = svgDocument.documentElement;

  if (svgElement instanceof SVGElement) {
    // Set size attribute on the <svg> element
    const sizePx = size === '16' ? '16' : size === '24' ? '24' : '32';
    svgElement.setAttribute('width', sizePx);
    svgElement.setAttribute('height', sizePx);

    // Set fill attribute on the <svg> element
    svgElement.setAttribute('fill', fill);

    // Set stroke attribute on all path elements
    const pathElements = svgElement.querySelectorAll('path');
    for (let i = 0; i < pathElements.length; i++) {
      const pathElement = pathElements[i];
      pathElement.setAttribute('stroke-width', strokeWidth);
      pathElement.setAttribute('stroke', stroke);
    }

    return svgElement;
  }

  throw new Error('Failed to create SVG element.');
};

export { Icon_4k_display };

