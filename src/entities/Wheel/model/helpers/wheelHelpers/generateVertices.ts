import { SkPoint, vec } from "@shopify/react-native-skia";

export const generateVertices = (
  width: number,
  numberOfTriangles: number,
  triangleSize: number
) => {
  const vertices: number[][] = [];
  for (let i = 0; i < numberOfTriangles; i++) {
    const angle = i * triangleSize - 90 - triangleSize / 2;
    const radians = angle * (Math.PI / 180);
    const x = Math.cos(radians);
    const y = Math.sin(radians);
    vertices.push([x, y]);
  }

  const convertedVertices: SkPoint[] = [
    vec(width / 2, width / 2),
    ...vertices.map((ver) => vec(ver[0] * width + width / 2, ver[1] * width + width / 2)),
  ];
  return convertedVertices;
};
