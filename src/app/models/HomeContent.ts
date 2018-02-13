interface data {
  button: string;
  id:string;
  image_path:string;
  offer:string;
  price:string;
  price_text:string;
  title:string;
  type:string;
  url:string;
}

interface response {
  data: data[]
}
export interface HomeContent {
  response: response[]
}