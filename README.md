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
import { useEffect, useState } from 'react';
import Icons from './component/icons';
import { Agile, Airplane,  Add_user, Add_page_alt, Ey  } from 'iconolib'; // Ajusta la ruta según tu estructura de carpetas


interface IconState {
  stroke: string;
  strokeWidth: string;
  fill: string;
  size: "16" | "24" | "32";
}

interface IconProps extends IconState{
  iconFunction: (props: IconState) => SVGElement; 
}

function App() {
  const [defaultIconProps, setDefaultIconProps] = useState<IconProps[]>([
    { iconFunction: Agile, strokeWidth: '1.5', stroke: 'white', fill: 'none', size: '' },
    { iconFunction: Airplane, strokeWidth: '1.5', stroke: 'white', fill: 'none', size: '32' },
    { iconFunction: Add_user, strokeWidth: '1.5', stroke: 'white', fill: 'none', size: '32' },
    { iconFunction: Add_page_alt, strokeWidth: '1.5', stroke: 'white', fill: 'none', size: '32' },
    { iconFunction: Ey, strokeWidth: '1.5', stroke: 'none', fill: 'none', size: '32' },
  ]);

  const [iconProps, setIconProps] = useState<IconProps[]>(defaultIconProps);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setIconProps((prevIconProps) =>
          prevIconProps.map((iconProps) => ({
            ...iconProps,
            stroke: ramdomColor(),
            strokeWidth: ramdomStokeWidth(),
            fill: ramdomColor(),
            size: randomSize(),
          }))
        );
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  function ramdomStokeWidth(): string {
    const randomStrokeWidth = Math.random() * (4 - 0.5) + 0.5;
    return randomStrokeWidth.toString();
  }

  function ramdomColor(): string {
    const colors = ['red', 'blue', 'none', 'yellow', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }

  function randomSize(): "16" | "24" | "32" {
    const sizes = ['16', '24', '32'];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    return randomSize as "16" | "24" | "32";
  }

  function resetIconProps() {
    setIsPaused(true);
    setIconProps(defaultIconProps);
  }

  function toggleInterval() {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        {iconProps.map((iconProps, index) => (
          <Icons key={index} {...iconProps} />
        ))}
      </div>
      <button onClick={resetIconProps}>
        reset
      </button>
      <button onClick={toggleInterval}>
        {isPaused ? 'resume' : 'pause'}
      </button>
    </>
  );
}

export default App;
```

and Icons componente

```import { useEffect, useRef } from 'react';


interface IconFunctionProps {
  size: "16" | "24" | "32";
  strokeWidth: string;
  stroke: string;
  fill: string;
}

interface IconsProps extends IconFunctionProps {
  iconFunction: (props: IconFunctionProps) => SVGElement;
}
function Icons({size="16", iconFunction, strokeWidth = '1.5', stroke = 'currentColor', fill = 'none' }: IconsProps) {
  const svgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    createSvg();
  }, [stroke]);

  function createSvg() {
    const svgElement = iconFunction({size, strokeWidth, stroke, fill });

    if (svgRef.current) {
      svgRef.current.innerHTML = ''; // Limpiar el contenido existente
      svgRef.current.appendChild(svgElement);
    }
  }

  return <div ref={svgRef} />;
}

export default Icons;
```