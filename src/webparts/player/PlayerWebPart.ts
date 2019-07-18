import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './PlayerWebPart.module.scss';
import * as strings from 'PlayerWebPartStrings';

export interface IPlayerWebPartProps {
  description: string;
}

export default class PlayerWebPart extends BaseClientSideWebPart<IPlayerWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.player }">
      <video id='my-video' class='video-js' controls preload='auto' width='640' height='264'
      poster='MY_VIDEO_POSTER.jpg' data-setup='{}'>
        <source src='MY_VIDEO.mp4' type='video/mp4'>
        <source src='MY_VIDEO.webm' type='video/webm'>
        <p class='vjs-no-js'>
          To view this video please enable JavaScript, and consider upgrading to a web browser that
          <a href='https://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a>
        </p>
      </video>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
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
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
