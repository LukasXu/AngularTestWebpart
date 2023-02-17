declare interface ISpfxWithAngularWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'SpfxWithAngularWebPartStrings' {
  const strings: ISpfxWithAngularWebPartStrings;
  export = strings;
}
