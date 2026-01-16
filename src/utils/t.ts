import {texts} from '../texts.json'
export const t = (key: string): string => {
  return key.split(".").reduce((obj: any, k) => {
    return obj?.[k];
  }, texts) ?? key;
};
