import * as React from 'react';
import styles from './PandaQuotes.module.scss';
import type { IPandaQuotesProps } from './IPandaQuotesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import welcomeDark from '../assets/welcome-dark.png';
import welcomeLight from '../assets/welcome-light.png';

export default class PandaQuotes extends React.Component<IPandaQuotesProps> {
  public render(): React.ReactElement<IPandaQuotesProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.pandaQuotes}`}>
        <div className={styles.welcome}>
         
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
          <div>Panda Quotes!</div>
        </div>
       
      </section>
    );
  }
}
