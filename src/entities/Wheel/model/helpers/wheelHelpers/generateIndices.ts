import { SkPoint } from "@shopify/react-native-skia";
import { generateVertices } from "./generateVertices";

export const generateIndices = (
  width: number,
  numberOfTriangles: number,
  triangleSize: number
): [SkPoint[], SkPoint[][]] => {
  const vertices = generateVertices(width, numberOfTriangles, triangleSize);

  if (!vertices) return [[], []];

  const triangles: SkPoint[][] = [];
  for (let i = 1; i < numberOfTriangles; i++) {
    if (vertices[i] && vertices[i + 1]) {
      triangles.push([vertices[0], vertices[i], vertices[i + 1]]);
    }
  }

  triangles.push([vertices[0], vertices[numberOfTriangles], vertices[1]]);

  return [vertices, triangles];
};
