import { SkPoint, vec } from "@shopify/react-native-skia";
import { Dimensions } from "react-native";


export const colors = [
  {
    linearMain: {
      first: '#FE7A18',
      second: '#FFCC0F',
    },
  },
  {
    linearMain: {
      first: '#FC9512',
      second: '#FFE91C',
    },
  },
  {
    linearMain: {
      first: '#2FFFFF',
      second: '#1A95FF',
    },
  },
  {
    linearMain: {
      first: '#CC0A60',
      second: '#FE0E73',
    },
  },
  {
    linearMain: {
      first: '#3D08EA',
      second: '#7815FC',
    },
  },
  {
    linearMain: {
      first: '#006F67',
      second: '#00CBA2',
    },
  },
  {
    linearMain: {
      first: '#808080',
      second: '#B5B5B5',
    },
  },
  {
    linearMain: {
      first: '#FF260D',
      second: '#FC9512',
    },
  },
  {
    linearMain: {
      first: '#FE7A18',
      second: '#FFCC0F',
    },
  },
  {
    linearMain: {
      first: '#FC9512',
      second: '#FFE91C',
    },
  },
  {
    linearMain: {
      first: '#2FFFFF',
      second: '#1A95FF',
    },
  },
  {
    linearMain: {
      first: '#CC0A60',
      second: '#FE0E73',
    },
  },
  {
    linearMain: {
      first: '#3D08EA',
      second: '#7815FC',
    },
  },
  {
    linearMain: {
      first: '#006F67',
      second: '#00CBA2',
    },
  },
  {
    linearMain: {
      first: '#808080',
      second: '#B5B5B5',
    },
  },
  {
    linearMain: {
      first: '#FF260D',
      second: '#FC9512',
    },
  },
];

export const generateVertices = (width: number, numberOfTriangles: number, triangleSize: number) => {
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

export const generateIndices = (width: number, numberOfTriangles: number, triangleSize: number): [SkPoint[], SkPoint[][]] => {
  const vertices = generateVertices(width, numberOfTriangles, triangleSize);

  if ( !vertices) return [[], []];

  const triangles: SkPoint[][] = [];
  for (let i = 1; i < numberOfTriangles; i++) {
    if (vertices[i] && vertices[i + 1]) {
      triangles.push([vertices[0], vertices[i], vertices[i + 1]]);
    }
  }

  triangles.push([vertices[0], vertices[numberOfTriangles], vertices[1]]);

  return [vertices, triangles];
};
