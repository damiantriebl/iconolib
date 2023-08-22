function Football_ball ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.11543 14.0149C3.95724 15.3855 3.95988 16.6715 4.01198 17.6795C4.07734 18.9439 5.05607 19.9227 6.3205 19.988C7.32849 20.0401 8.61453 20.0428 9.98508 19.8846M4.11543 14.0149C4.39374 11.6036 5.16988 8.93063 7.05025 7.05025C8.93063 5.16988 11.6036 4.39374 14.0149 4.11543M4.11543 14.0149L9.98508 19.8846M9.98508 19.8846C12.3964 19.6063 15.0694 18.8301 16.9497 16.9497C18.8301 15.0694 19.6063 12.3964 19.8846 9.98508M14.0149 4.11543C15.3855 3.95724 16.6715 3.95988 17.6795 4.01198C18.9439 4.07734 19.9227 5.05607 19.988 6.3205C20.0401 7.32849 20.0428 8.61453 19.8846 9.98508M14.0149 4.11543L19.8846 9.98508M9.17158 14.8284L10.5858 13.4142M10.5858 13.4142L9.17158 12M10.5858 13.4142L12 14.8284M10.5858 13.4142L13.4142 10.5858M13.4142 10.5858L14.8284 9.17158M13.4142 10.5858L12 9.17158M13.4142 10.5858L14.8284 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Football_ball };
