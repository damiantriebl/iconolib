function Brain_research ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20C7.35064 20 7.68722 19.9398 8 19.8293" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.26392 15.6046C2.9243 14.9582 2.00004 13.587 2.00004 12C2.00004 10.7883 2.53877 9.70251 3.38978 8.96898" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.42053 8.8882C3.1549 8.49109 3 8.01363 3 7.5C3 6.11929 4.11929 5 5.5 5C6.06291 5 6.58237 5.18604 7.00024 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.23769 5.56533C7.08524 5.24215 7 4.88103 7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 20C8 21.1046 8.89543 22 10 22C11.1046 22 12 21.1046 12 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7C12 8.65685 13.3431 10 15 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.6102 8.96898C21.4612 9.70251 22 10.7883 22 12C22 12.7031 21.8186 13.3638 21.5 13.9379" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5795 8.8882C20.8451 8.49109 21 8.01363 21 7.5C21 6.11929 19.8807 5 18.5 5C17.9371 5 17.4176 5.18604 16.9998 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 4.5C12 3.11929 13.1193 2 14.5 2C15.8807 2 17 3.11929 17 4.5C17 4.88103 16.9148 5.24215 16.7623 5.56533" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 22C12.8954 22 12 21.1046 12 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5 20.5L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 18.5C16 19.8807 17.1193 21 18.5 21C19.1916 21 19.8175 20.7192 20.2701 20.2654C20.7211 19.8132 21 19.1892 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Brain_research };

