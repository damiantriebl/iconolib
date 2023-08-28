function Air_conditioner ({size='16', strokeWidth='1.5', stroke='currentColor', fill='none'}:{size:'16' | '24' | '32', strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 3.6V11H2V3.6C2 3.26863 2.26863 3 2.6 3H21.4C21.7314 3 22 3.26863 22 3.6Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 7H19" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 11L2.78969 13.5844C3.04668 14.4255 3.82294 15 4.70239 15H6" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 11L21.2103 13.5844C20.9533 14.4255 20.1771 15 19.2976 15H18" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 14.5C9.5 14.5 9.5 21.5 6 21.5" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 14.5C14.5 14.5 14.5 21.5 18 21.5" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14.5V21.5" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
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

export { Air_conditioner };

