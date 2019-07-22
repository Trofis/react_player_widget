import * as React from 'react';
import styles from './PlayerReact.module.scss';

import ReactPlayer from 'react-player'
import { IPlayerReactProps } from './IPlayerReactProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class PlayerReact extends React.Component < IPlayerReactProps, {} > {
  public render(): React.ReactElement<IPlayerReactProps> {
    //this.props.url = "http://squinotix/portail/SiteAssets/Vid%C3%A9os/4K_VIDEO_ultrahd_hdr_sony_4K_VIDEOS_demo_test_nature_relaxation_movie_for_4k_oled_tv_hd.mp4?csf=1&e=dI8gvd"
    return(
      <div className = { styles.playerReact } >
        <div className={styles.container}>
          <h1 className={styles.title} >{this.props.description}</h1>
          <div className={styles.playerWrapper}>
            <ReactPlayer id="videoElement" ref="videoElement" className={styles.reactPlayer} url={this.props.url} controls prop pip playsinline playing width='100%' height='100%' />
          </div>
        </div>
      </div >
    );
  }

}
