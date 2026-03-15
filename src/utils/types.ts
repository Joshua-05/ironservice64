export interface IServiceItem {
  title: string;
  text: string;
  price: number;
  imageUrl: string;
  propertyUrl: string;
  seo?: ISeoProps;
}

export interface IServiceCategory {
  title: string;
  text: string;
  imageUrl: string;
  propertyUrl: string;
  items: IServiceItem[];
}

export interface IPageData {
  services: IServiceCategory[];
}

// Полная типизация Service.md
export interface IPageDataProps {
    title: string;
    text: string;
    seo: ISeoProps;
    services: IServiceCategory[];
}

export interface ISeoProps {
    title: string;
    description: string;
    ogImage: string;
    keywords: string[];
}