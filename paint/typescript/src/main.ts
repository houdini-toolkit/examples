/* checkboardWorklet.ts */
import {
  DOMString,
  PaintFunction,
  PaintGeometry,
  createPaint,
} from "houdini-toolkit";

const paintName: DOMString = "checkerboard";
const paintFunction: PaintFunction = (
  ctx: CanvasRenderingContext2D,
  geom: PaintGeometry,
  properties: StylePropertyMapReadOnly
) => {
  const colors = ["red", "green", "blue"];
  const size = 32;
  for (let y = 0; y < geom.height / size; y++) {
    for (let x = 0; x < geom.width / size; x++) {
      const color = colors[(x + y) % colors.length];
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.rect(x * size, y * size, size, size);
      ctx.fill();
    }
  }
};
createPaint(paintName, paintFunction);
