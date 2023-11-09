import { ReactNode } from "react";

type Props = {
  array: React.ReactNode[];
  columns: number;
}

export function Table({ array, columns }: Props) {

  const transformed = array.reduce<ReactNode[][]>((acc, curr, index) => {
    if (index % columns === 0) {
      acc.push([curr]);
      return acc;
    } else {
      const lastRow = acc[acc.length - 1];
      lastRow.push(curr);
      return acc;
    }
  }, []);

  return <table border={1}>
    <tbody>
      {transformed.map((row, index) => (
        <tr key={index}>
          {row.map((item, index) => <td key={index}>{item}</td>)}
        </tr>
      ))}
    </tbody>
  </table>
}