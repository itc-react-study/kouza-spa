export interface Menu {
  title: string;
  path: string;
  element?: JSX.Element;
}

export const CODE_LOCATION_CD = [
  { code: '', label: ' ' },
  { code: '1', label: '新宿' },
  { code: '2', label: '青葉台' },
  { code: '3', label: '谷町' },
  { code: '4', label: '日本橋' },
  { code: '5', label: '新川' },
];

/** 権限スキル */
export const ROLE_CD = [
  {
    code: '',
    label: ' ',
  },
  {
    code: '1',
    label: 'OSR',
  },
  {
    code: '2',
    label: 'CSR',
  },
  {
    code: '3',
    label: '係員',
  },
  {
    code: '4',
    label: 'リーダー',
  },
  {
    code: '5',
    label: '検取',
  },
  {
    code: '6',
    label: '役席',
  },
];

/** 業務スキル */
export const BUSINESS_ROLE = [
  {
    code: '',
    label: '',
  },
  {
    code: '1',
    label: '新規口座開設',
  },
];
