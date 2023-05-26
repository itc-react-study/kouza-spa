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

/** 処理状況 */
export const TREATMENT_STATUS = [
  {
    code: '',
    label: '',
  },
  {
    code: '1',
    label: '未着手・仕掛中',
  },
  {
    code: '2',
    label: '未着手',
  },
  {
    code: '3',
    label: '仕掛中',
  },
  {
    code: '4',
    label: 'エラー',
  },
  {
    code: '5',
    label: '口座開設済',
  },
  {
    code: '6',
    label: '中断',
  },
];

/** 副業の内容 */
export const SIDE_JOB_CD = [
  {
    code: '101',
    label: '会社役員／団体役員',
  },
  {
    code: '102',
    label: '会社員／団体職員',
  },
  {
    code: '103',
    label: '公務員・外国公務員',
  },
  {
    code: '104',
    label: '派遣社員等',
  },
  {
    code: '105',
    label: 'パート／アルバイト',
  },
  {
    code: '106',
    label: '主婦・主夫',
  },
  {
    code: '107',
    label: '学生',
  },
  {
    code: '108',
    label: '退職された方／無職の方',
  },
  {
    code: '109',
    label: '個人事業主／自営業',
  },
];

/** 通常月のお取引予定額 */
export const MONTHLY_TRADE_AMOUNT_CD_DB = [
  {
    code: '01',
    label: '～100万円以下',
  },
  {
    code: '02',
    label: '100万円超～500万円以下',
  },
  {
    code: '03',
    label: '500万円超～1,000万円以下',
  },
  {
    code: '04',
    label: '1,000万円超～3,000万円以下',
  },
  {
    code: '05',
    label: '3,000万円超',
  },
];

/** 職種 */
export const BUSINESS_CD = [
  {
    code: '',
    label: '',
  },
  {
    code: '201',
    label: '農業／林業／漁業',
  },
  {
    code: '202',
    label: '建設業',
  },
  {
    code: '203',
    label: '製造業',
  },
  {
    code: '204',
    label: '情報通信業',
  },
  {
    code: '205',
    label: '運輸業',
  },
  {
    code: '206',
    label: '卸売業',
  },
  {
    code: '207',
    label: '小売業（貴金属／宝石）',
  },
  {
    code: '208',
    label: '小売業（除く貴金属／宝石）',
  },
  {
    code: '209',
    label: '金融業／保険業',
  },
  {
    code: '210',
    label: '不動産業',
  },
  {
    code: '211',
    label: 'サービス業',
  },
  {
    code: '212',
    label: '飲食業',
  },
  {
    code: '213',
    label: 'コンサルティング業',
  },
  {
    code: '214',
    label: '弁護士／司法書士／行政書士／会計士／税理士',
  },
  {
    code: '215',
    label: '投資事業',
  },
  {
    code: '216',
    label: '医師・病院・医療機関',
  },
  {
    code: '299',
    label: 'その他',
  },
];

/** 在留資格コード */
export const ZAIRYUU_SHIKAKU_CODE = [
  {
    code: '',
    label: '',
  },
  {
    code: '01',
    label: '永住者',
  },
  {
    code: '02',
    label: '日本人の配偶者等',
  },
  {
    code: '03',
    label: '永住者の配偶者等',
  },
  {
    code: '04',
    label: '定住者',
  },
  {
    code: '05',
    label: '特別永住者',
  },
  {
    code: '11',
    label: '外交',
  },
  {
    code: '12',
    label: '公用',
  },
  {
    code: '13',
    label: '教授',
  },
  {
    code: '14',
    label: '芸術',
  },
  {
    code: '15',
    label: '宗教',
  },
  {
    code: '16',
    label: '報道',
  },
  {
    code: '17',
    label: '高度専門職',
  },
  {
    code: '18',
    label: '経営・管理',
  },
  {
    code: '19',
    label: '法律・会計業務',
  },
  {
    code: '20',
    label: '医療',
  },
  {
    code: '21',
    label: '研究',
  },
  {
    code: '22',
    label: '教育',
  },
  {
    code: '23',
    label: '技術・人文知識・国際業務',
  },
  {
    code: '24',
    label: '企業内転勤',
  },
  {
    code: '25',
    label: '介護',
  },
  {
    code: '26',
    label: '興行',
  },
  {
    code: '27',
    label: '技能',
  },
  {
    code: '28',
    label: '技能実習',
  },
  {
    code: '29',
    label: '文化活動',
  },
  {
    code: '30',
    label: '短期滞在',
  },
  {
    code: '31',
    label: '留学',
  },
  {
    code: '32',
    label: '研修',
  },
  {
    code: '33',
    label: '家族滞在',
  },
  {
    code: '34',
    label: '特定活動',
  },
  {
    code: '99',
    label: 'その他',
  },
];

/** COUNTRY_CODE */
export const COUNTRY_CODE = [
  {
    code: '01',
    label: '日本',
  },
  {
    code: '02',
    label: '朝鮮',
  },
  {
    code: '03',
    label: '中国',
  },
  {
    code: '04',
    label: '韓国',
  },
  {
    code: '05',
    label: 'アメリカ',
  },
];

/** CURRENCY_CODE */
export const CURRENCY_CODE = [
  {
    code: '01',
    label: '中国元',
  },
  {
    code: '02',
    label: 'ミドル',
  },
];
