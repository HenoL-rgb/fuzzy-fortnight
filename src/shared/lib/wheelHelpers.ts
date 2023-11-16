import { SkPoint, vec } from "@shopify/react-native-skia";
import { Dimensions } from "react-native";
import color from 'randomcolor'

export const numberOfTriangles = 8; // Измените это значение на количество треугольников, которые вы хотите отобразить
export const triangleSize = 360 / numberOfTriangles;


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
];

export const generateVertices = (width: number) => {
  const vertices: number[][] = [];
  for (let i = 0; i < numberOfTriangles; i++) {
    const angle = i * triangleSize;
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

export const generateIndices = (width: number): [SkPoint[], SkPoint[][], string[]] => {
  const vertices = generateVertices(width);
  const indices = vertices.map((vertice, index) => {
    if (vertices[index + 1] && vertices[index] && index !== 0) {
      return [0, index, index + 1];
    }
  });

  const colors = color({
    count: numberOfTriangles,
    format: 'rgb',
    seed: 129,
    luminosity: 'bright',
  });

  if (!indices || !vertices) return [[], [], []];

  const triangles: SkPoint[][] = [];
  for (let i = 1; i < numberOfTriangles; i++) {
    if (vertices[i] && vertices[i + 1]) {
      triangles.push([vertices[0], vertices[i], vertices[i + 1]]);
    }
  }

  triangles.push([vertices[0], vertices[numberOfTriangles], vertices[1]]);

  return [vertices, triangles, colors];
};
