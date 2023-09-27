export enum AmxSortDirection {
  ASCENDING,
  DESCENDING
}

// export const sortArrayByDatePropImmutable = (array: any[], key: string, direction: AmxSortDirection = AmxSortDirection.DESCENDING) => {
//   let result = [];
//   if (array.length > 0) {
//     result = array.slice().sort((a, b) => {
//       if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
//         if (a[key] instanceof Date && b[key] instanceof Date) {
//           if (direction === AmxSortDirection.DESCENDING) {
//           return b[key].getTime() - a[key].getTime();
//           } else {
//             return a[key].getTime() - b[key].getTime();
//           }
//         } else {
//           try {
//             const aDate = new Date(a[key]);
//             const bDate = new Date(b[key]);
//             if (direction === AmxSortDirection.DESCENDING) {
//               return bDate.getTime() - aDate.getTime();
//             } else {
//               return aDate.getTime() - bDate.getTime();
//             }
//           } catch (err) {
//             result = array;
//           }
//         }
//       }
//     });
//   }
//   return result;
// };

export const sortArrayByKeyImmutable = (array: any[], key: string, desc: boolean = false): any[] => {
  let result = [];
  if (array.length > 0) {
    if (desc) {
      result = array.slice().sort((a, b) => (b[key] as any) - (a[key] as any));
    } else {
      result = array.slice().sort((a, b) => (a[key] as any) - (b[key] as any));
    }
  }
  return result;
};

// export const sortArrayByNestedDatePropImmutable = (
//   array: any[],
//   key: string,
//   nestedKey: string,
//   direction: AmxSortDirection = AmxSortDirection.DESCENDING
// ) => {
//   let result = [];
//   if (array.length > 0) {
//     result = array.slice().sort((a, b) => {
//       if (a.hasOwnProperty(key) && a[key].hasOwnProperty(nestedKey) && b.hasOwnProperty(key) && b[key].hasOwnProperty(nestedKey)) {
//         if (a[key][nestedKey] instanceof Date && b[key][nestedKey] instanceof Date) {
//           if (direction === AmxSortDirection.DESCENDING) {
//             return b[key][nestedKey].getTime() - a[key][nestedKey].getTime();
//           } else {
//             return a[key][nestedKey].getTime() - b[key][nestedKey].getTime();
//           }
//         } else {
//           try {
//             const aDate = new Date(a[key][nestedKey]);
//             const bDate = new Date(b[key][nestedKey]);
//             if (direction === AmxSortDirection.DESCENDING) {
//               return bDate.getTime() - aDate.getTime();
//             } else {
//               return aDate.getTime() - bDate.getTime();
//             }
//           } catch (err) {
//             result = array;
//           }
//         }
//       }
//     });
//   }
//   return result;
// };

export const sortArrayByNestedStringPropImmutable = (array: any[], key: string, nestedKey: string) => {
  return array.slice()
  .sort((a, b) => (a[key][nestedKey] as string)
  .toLowerCase()
  .localeCompare((b[key][nestedKey] as string)
  .toLowerCase()));
};

export const sortArrayByStringPropImmutable = (array: any[], key: string) => {
  return array.slice().sort((a, b) => (a[key] as string).toLowerCase().localeCompare((b[key] as string).toLowerCase()));
};