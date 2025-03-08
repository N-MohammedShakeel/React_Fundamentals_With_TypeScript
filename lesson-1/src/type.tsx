type Info = {
  name: string;
  age: number;
  gmail: string;
};

type AdminInfoList = Info & {
  role: string;
  lastLogin: Date;
};

export { type Info, type AdminInfoList };
