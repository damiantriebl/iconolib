# Spike a new way to use iconoir 

The workflow for using this project is to generate a package that contains the iconoir svgs (although not necessarily, you can use any svg that is inside the icons folder).

## Update icons

Inside the icons folder are all the files that will be converted to ts files. using the bash script generateIcons iterates through the entire icon folder, checks if the name is correct (if not prefixed with "icon_" ), and generates a complete list of icons in typescript format in the src folder, with the possibility of modifying some props.

## Building

The package is made with the TSDX tool which has ``` npm run build ``` to be able to do the build in the dist folder

## How to link

You can link to test in a very simple way, using ```npm link``` and in the project you want to install using ```npm link iconlib```

### How to use in React

in any component

```
import Icons from './component/icons';
import { Agile } from 'iconolib'; // Ajusta la ruta según tu estructura de carpetas

function App() {

  return (
    <>
        <Icons iconFunction={Agile} fill='red' stroke='blue' strokeWidth='4' />
    </>
  )
}

export default App
```

and Icons componente

```
import  {  useEffect, useRef } from 'react';

interface IconsProps {
  iconFunction: (strokeWidth: string, stroke: string, fill: string) => SVGElement;
  strokeWidth: string;
  stroke: string;
  fill: string;
}

function Icons({ iconFunction, strokeWidth='1.5', stroke='currentColor', fill='none' }: IconsProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    dinamicImport();
  }, []);

  function dinamicImport() {
    const svgElement = iconFunction(strokeWidth, stroke, fill);

    if (svgRef.current) {
      svgRef.current.innerHTML = ''; // Limpiar el contenido existente
      svgRef.current.appendChild(svgElement);
    }
  }

  return (
    <div>
      <svg ref={svgRef} />
    </div>
  );
}

export default Icons;
```