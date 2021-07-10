import "./styles.css";
import Globe from "react-globe.gl";
import data from "./data";

import { useRef, useState, useEffect } from "react";
export default function GlobeComp({ selected }) {
  const globeEl = useRef();
  const scroll = useRef();
  const store = data[selected];
  const weightColor = d3
    .scaleSequentialSqrt(d3.interpolateYlOrRd)
    .domain([0.1, 0.2]);

  return (
    <div className=" z-0">
      <Globe
        ref={globeEl}
        onGlobeReady={() =>
          // start
          //globeEl.current.pointOfView({ lat: 30, lng: 7, altitude: 2 }, 5000)
          // init year n
          //   globeEl.current.pointOfView({ lat: 30, lng: 180, altitude: 0 }, 100)
          console.log("globe ready")
        }
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        // edges
        arcsData={store["arcs"]}
        arcColor={(d) => [weightColor(d.stroke), weightColor(d.stroke)]}
        arcDashLength={(d) => d.stroke - 0.1 + 0.3}
        // arcDashLength={(d) => d.stroke - 0.1}
        arcDashGap={(d) => 0.1 + (1 - (d.stroke - 0.1))}
        arcDashAnimateTime={(d) => (1.1 - d.stroke) * 5000 + 2000}
        arcStroke={"stroke"}
        //arcCircularResolution={64}
        // arcLabel={() => "test"}
        // labels
        labelsData={store["loc"]}
        labelLat={(d) => d.lat}
        labelLng={(d) => d.lng}
        labelText={(d) => d.name}
        labelSize={(d) => 0.5 + d.size}
        labelDotRadius={(d) => 0.5 + d.size}
        labelColor={(d) => weightColor(d.size)}
        labelResolution={2}
        // bars
        hexBinPointsData={store["loc"]}
        hexBinPointWeight="size"
        hexAltitude={(d) => d.sumWeight / 4}
        hexBinResolution={4}
        hexTopColor={(d) => weightColor(d.sumWeight)}
        hexSideColor={(d) => weightColor(d.sumWeight)}
        hexBinMerge={true}
        enablePointerInteraction={false}
      />
    </div>
  );
}
