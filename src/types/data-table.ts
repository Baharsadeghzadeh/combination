 type Tname = {
    first: string,
    last: string,
  }

  type Tpicture = {
    medium: string,
  }
  
  type Tlocation = {
    country: string,
  }

  export type Tusers = {
    name: Tname,
    picture: Tpicture,
    location: Tlocation,
  };