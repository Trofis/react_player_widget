declare interface IPlayerReactWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  UrlFieldLabel:string;
}

declare module 'PlayerReactWebPartStrings' {
  const strings: IPlayerReactWebPartStrings;
  export = strings;
}
