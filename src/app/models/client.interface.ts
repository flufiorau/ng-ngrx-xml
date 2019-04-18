export interface IHttpClient {
  general: {
    firstName: string;
    lastName: string;
    avatar: string;
  };
  job: {
    company: string;
    title: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  address: {
    street: string;
    city: string;
    zipCode: string;
    country: string;
  };
}

export interface IClient {
  id: number;
  fields: IHttpClient;
}
