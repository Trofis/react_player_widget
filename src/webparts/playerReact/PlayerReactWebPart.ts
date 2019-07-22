import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'PlayerReactWebPartStrings';
import PlayerReact from './components/PlayerReact';
import { IPlayerReactProps } from './components/IPlayerReactProps';

import {
  SPHttpClient,
  SPHttpClientResponse,
  ISPHttpClientOptions
} from '@microsoft/sp-http';

export interface IPlayerReactWebPartProps {
  description: string;
  url: string;
}



export default class PlayerReactWebPart extends BaseClientSideWebPart<IPlayerReactWebPartProps> {


  public render(): void {
    this.getVideos();
    const element: React.ReactElement<IPlayerReactProps > = React.createElement(
      PlayerReact,
      {
        description: this.properties.description,
        url: this.properties.url
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getVideos(): void{
    const header= new Headers() ;
    //header.append("Content-Type", "application/json");
    header.append("Connection", "keep-alive");
    header.append("Cache-control", "no-cache");
    header.append("Username", "adm-tmendes");
    header.append("Password", "Tholeo$1999@dm");


    const myOptions: ISPHttpClientOptions = {
      headers: header,
      method:"GET",
      mode:"cors"
    };


    this.context.spHttpClient.get(`http://squinotix/portail/_api/Web/GetFolderByServerRelativePath(decodedurl='/portail/SiteAssets')/Files`, SPHttpClient.configurations.v1, myOptions)
    .then((response: SPHttpClientResponse) => {
      console.log("reponse");
      console.log(response);

    }).catch((error : any) =>{
      console.log(error)
    });
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('url', {
                  label: strings.UrlFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
