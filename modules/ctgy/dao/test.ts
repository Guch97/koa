/*
 * @Author: xs
 * @Date: 2023-05-19 16:42:51
 */
let list = [
  {
    secondId: 1,
    name: "类目1",
    thirdctgys: [
      {
        thirdId: 444444,
        name: "dsadsssss",
        connectId: 1,
      },
      {
        thirdId: 2311122,
        name: "dsadsa",
        connectId: 1,
      },
    ],
  },
];

export type EleOf<T> = T extends Array<infer U> ? U : never;

export type ItemsType<T extends object[]> = {
  [K in keyof EleOf<T>]: EleOf<T>[K];
};

export type Sct = EleOf<typeof list>;
type MyPick = Pick<Sct, "secondId">;

type K = keyof EleOf<typeof list>;
type Keys = K[];
let keys: Keys = ["secondId", "name"];

export function getSubmitFrmArray<
  T extends ItemsType<T>[],
  K extends keyof EleOf<T>
>(t: T, ...keys: K[]) {
  return t.map((item) => {
    return keys.reduce((pre, cur, index) => {
      return {
        ...pre,
        [keys[index]]: item[keys[index]],
      };
    }, {});
  });
}
