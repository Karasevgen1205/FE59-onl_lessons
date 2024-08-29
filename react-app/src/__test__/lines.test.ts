const getArray = (count: number) =>
  new Array(count).fill("").map((_, i) => ++i);

const input1 = getArray(1);
const input2 = getArray(7);
const input3 = getArray(9);
const input4 = getArray(10);
const input5 = getArray(11);
const input6 = getArray(15);
const input7 = getArray(19);
const input8 = getArray(20);
const input9 = getArray(21);
const input10 = getArray(22);
const input11 = getArray(25);
const input12 = getArray(30);
const input13 = getArray(31);
const input14 = getArray(49);
const input15 = getArray(50);
const input16 = getArray(51);
const input17 = getArray(52);
const input18 = getArray(100);

const output1 = [getArray(1)];
const output2 = [getArray(7)];
const output3 = [getArray(9)];
const output4 = [getArray(10)];
const output5 = [getArray(11)];
const output6 = [getArray(15)];
const output7 = [getArray(19)];
const output8 = [getArray(10), getArray(10)];
const output9 = [getArray(11), getArray(10)];
const output10 = [getArray(11), getArray(11)];
const output11 = [getArray(13), getArray(12)];
const output12 = [getArray(10), getArray(10), getArray(10)];
const output13 = [getArray(11), getArray(10), getArray(10)];
const output14 = [getArray(13), getArray(12), getArray(12), getArray(12)];
const output15 = [
  getArray(10),
  getArray(10),
  getArray(10),
  getArray(10),
  getArray(10),
];
const output16 = [
  getArray(11),
  getArray(10),
  getArray(10),
  getArray(10),
  getArray(10),
];
const output17 = [
  getArray(11),
  getArray(11),
  getArray(10),
  getArray(10),
  getArray(10),
];
const output18 = [
  getArray(10),
  getArray(10),
  getArray(10),
  getArray(10),
  getArray(10),
  getArray(10),
  getArray(10),
  getArray(10),
  getArray(10),
  getArray(10),
];

const makeLines = (array: number[], recievedLinesCount?: number) => {
  let linesCount;

  if (array.length <= 10) {
    linesCount = 1;
  } else if (recievedLinesCount) {
    linesCount =
      array.length / recievedLinesCount >= 10
        ? recievedLinesCount
        : Math.floor(array.length / 10);
  } else {
    linesCount = Math.floor(array.length / 10);
  }

  const emptyLinesSizeInfo = Object.fromEntries(
    getArray(linesCount).reduce(
      (res: number[][], item: number) => [...res, [item, 0]],
      []
    )
  );

  const { linesSize } = getArray(array.length).reduce(
    (result) => {
      ++result.linesSize[result.currentCard];

      if (result.currentCard + 1 in result.linesSize) {
        ++result.currentCard;
      } else {
        result.currentCard = 1;
      }

      return result;
    },
    { linesSize: emptyLinesSizeInfo, currentCard: 1 }
  );

  const cardsByLines = array.reduce(
    (result: number[][], item: number) => {
      if (result[result.length - 1].length < linesSize[result.length]) {
        result[result.length - 1].push(item);
      } else {
        result.push([item]);
      }

      return result;
    },
    [[]]
  );
  console.log(array, cardsByLines, linesCount, linesSize);

  return cardsByLines;
};

// makeLines(input1, 5);
// makeLines(input2, 5);
// makeLines(input3, 5);
// makeLines(input4, 5);
// makeLines(input5, 5);
// makeLines(input6, 5);
// makeLines(input7, 5);
// makeLines(input8, 5);
// makeLines(input9, 5);
// makeLines(input10, 5);
// makeLines(input11, 5);
// makeLines(input12, 5);
// makeLines(input13, 5);
// makeLines(input14, 5);
// makeLines(input15, 5);
// makeLines(input16, 5);
// makeLines(input17, 5);
// makeLines(input18, 5);

// console.log(input1, makeLines(input1, 10));
// console.log(input2, makeLines(input2, 10));
// console.log(input3, makeLines(input3, 10));
// console.log(input4, makeLines(input4, 10));
// console.log(input5, makeLines(input5, 10));
// console.log(input6, makeLines(input6, 10));
// console.log(input7, makeLines(input7, 10));
// console.log(input8, makeLines(input8, 10));
// console.log(input9, makeLines(input9, 10));
// console.log(input10, makeLines(input10, 10));
// console.log(input11, makeLines(input11, 10));
// console.log(input12, makeLines(input12, 10));
// console.log(input13, makeLines(input13, 10));
// console.log(input14, makeLines(input14, 10));

describe("Lines test", () => {
  it("input1", () => {
    expect(makeLines(input1, 1)).toEqual(output1);
    expect(makeLines(input1, 2)).toEqual(output1);
    expect(makeLines(input1, 3)).toEqual(output1);
    expect(makeLines(input1, 5)).toEqual(output1);
    expect(makeLines(input1, 7)).toEqual(output1);
    expect(makeLines(input1, 10)).toEqual(output1);
  });
  it("input2", () => {
    expect(makeLines(input2, 1)).toEqual(output2);
    expect(makeLines(input2, 2)).toEqual(output2);
    expect(makeLines(input2, 3)).toEqual(output2);
    expect(makeLines(input2, 5)).toEqual(output2);
    expect(makeLines(input2, 7)).toEqual(output2);
    expect(makeLines(input2, 10)).toEqual(output2);
  });
  it("input3", () => {
    expect(makeLines(input3, 1)).toEqual(input3);
    expect(makeLines(input3, 2)).toEqual(input3);
    expect(makeLines(input3, 3)).toEqual(input3);
    expect(makeLines(input3, 5)).toEqual(input3);
    expect(makeLines(input3, 7)).toEqual(input3);
    expect(makeLines(input3, 10)).toEqual(input3);
  });
  it("input4", () => {
    expect(makeLines(input4, 1)).toEqual(output4);
    expect(makeLines(input4, 2)).toEqual(output4);
    expect(makeLines(input4, 3)).toEqual(output4);
    expect(makeLines(input4, 5)).toEqual(output4);
    expect(makeLines(input4, 7)).toEqual(output4);
    expect(makeLines(input4, 10)).toEqual(output4);
  });
  it("input5", () => {
    expect(makeLines(input5, 1)).toEqual(output5);
    expect(makeLines(input5, 2)).toEqual(output5);
    expect(makeLines(input5, 3)).toEqual(output5);
    expect(makeLines(input5, 5)).toEqual(output5);
    expect(makeLines(input5, 7)).toEqual(output5);
    expect(makeLines(input5, 10)).toEqual(output5);
  });
  it("input6", () => {
    expect(makeLines(input6, 1)).toEqual(output6);
    expect(makeLines(input6, 2)).toEqual(output6);
    expect(makeLines(input6, 3)).toEqual(output6);
    expect(makeLines(input6, 5)).toEqual(output6);
    expect(makeLines(input6, 7)).toEqual(output6);
    expect(makeLines(input6, 10)).toEqual(output6);
  });
  it("input7", () => {
    expect(makeLines(input7, 1)).toEqual(output7);
    expect(makeLines(input7, 2)).toEqual(output7);
    expect(makeLines(input7, 3)).toEqual(output7);
    expect(makeLines(input7, 5)).toEqual(output7);
    expect(makeLines(input7, 7)).toEqual(output7);
    expect(makeLines(input7, 10)).toEqual(output7);
  });
  it("input8", () => {
    expect(makeLines(input8, 1)).toEqual(output8);
    expect(makeLines(input8, 2)).toEqual(output8);
    expect(makeLines(input8, 3)).toEqual(output8);
    expect(makeLines(input8, 5)).toEqual(output8);
    expect(makeLines(input8, 7)).toEqual(output8);
    expect(makeLines(input8, 10)).toEqual(output8);
  });
  it("input9", () => {
    expect(makeLines(input9, 1)).toEqual(output9);
    expect(makeLines(input9, 2)).toEqual(output9);
    expect(makeLines(input9, 3)).toEqual(output9);
    expect(makeLines(input9, 5)).toEqual(output9);
    expect(makeLines(input9, 7)).toEqual(output9);
    expect(makeLines(input9, 10)).toEqual(output9);
  });
  it("input10", () => {
    expect(makeLines(input10, 1)).toEqual(output10);
    expect(makeLines(input10, 2)).toEqual(output10);
    expect(makeLines(input10, 3)).toEqual(output10);
    expect(makeLines(input10, 5)).toEqual(output10);
    expect(makeLines(input10, 7)).toEqual(output10);
    expect(makeLines(input10, 10)).toEqual(output10);
  });
  it("input11", () => {
    expect(makeLines(input11, 1)).toEqual(output11);
    expect(makeLines(input11, 2)).toEqual(output11);
    expect(makeLines(input11, 3)).toEqual(output11);
    expect(makeLines(input11, 5)).toEqual(output11);
    expect(makeLines(input11, 7)).toEqual(output11);
    expect(makeLines(input11, 10)).toEqual(output11);
  });
  it("input12", () => {
    expect(makeLines(input12, 1)).toEqual(output12);
    expect(makeLines(input12, 2)).toEqual(output12);
    expect(makeLines(input12, 3)).toEqual(output12);
    expect(makeLines(input12, 5)).toEqual(output12);
    expect(makeLines(input12, 7)).toEqual(output12);
    expect(makeLines(input12, 10)).toEqual(output12);
  });
  it("input13", () => {
    expect(makeLines(input13, 1)).toEqual(output13);
    expect(makeLines(input13, 2)).toEqual(output13);
    expect(makeLines(input13, 3)).toEqual(output13);
    expect(makeLines(input13, 5)).toEqual(output13);
    expect(makeLines(input13, 7)).toEqual(output13);
    expect(makeLines(input13, 10)).toEqual(output13);
  });
  it("input14", () => {
    expect(makeLines(input14, 1)).toEqual(output14);
    expect(makeLines(input14, 2)).toEqual(output14);
    expect(makeLines(input14, 3)).toEqual(output14);
    expect(makeLines(input14, 5)).toEqual(output14);
    expect(makeLines(input14, 7)).toEqual(output14);
    expect(makeLines(input14, 10)).toEqual(output14);
  });
});
