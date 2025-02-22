
export type Car = {
  brand: string;
  model: string;
  color: string;
  registrationNumber: string;
  modelYear: number;
  price: number;
}

export type CarEntry = {
  car: Car;
  url: string;
}

export type CarResponse = {
  brand: string;
  model: string;
  color: string;
  registrationNumber: string;
  modelYear: number;
  price: number;
  _links: {
    self: {
      href: string;
    },
    car: {
      href: string;
    },
    owner: {
      href: string;
    }
  };
}

export type CarEntity = {
  id: number;
  brand: string;
  model: string;
  color: string;
  registrationNumber: string;
  modelYear: number;
  price: number;
  ownerId: number;
}

export type FullCarEntity = {
  id: number;
  brand: string;
  model: string;
  color: string;
  registrationNumber: string;
  modelYear: number;
  price: number;
  owner: OwnerEntity;
}

export type OwnerEntity = {
  ownerid: number;
  firstname: string;
  lastname: string;
}

export type Owner = {
  firstname: string;
  lastname: string;
}

export type OwnerEntry = {
  owner: Owner,
  url: string;
}

export type OwnerResponse = {
  firstname: string;
  lastname: string;
  _links: {
    self: {
      href: string;
    },
    car: {
      href: string;
    },
    owner: {
      href: string;
    }
  };
}