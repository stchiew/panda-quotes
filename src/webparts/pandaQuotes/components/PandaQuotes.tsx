import * as React from 'react';
import styles from './PandaQuotes.module.scss';
import type { IPandaQuotesProps } from './IPandaQuotesProps';
import { escape } from '@microsoft/sp-lodash-subset';

const PandaQuotes:React.FC<IPandaQuotesProps> = (props) => {
  
    const {
      description,
      environmentMessage,
      userDisplayName,
      choiceGroup,
      toggle,
      slider
    } = props;

    return (
      <section className={`${styles.pandaQuotes}`}>
        <div className={styles.welcome}>
         
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
          <div>Panda Quotes!</div>
          <div>Choice Group: <strong>{escape(choiceGroup)}</strong></div>
          <div>Toggle: <strong>{toggle ? 'On' : 'Off'}</strong></div>
          <div>Slider: <strong>{slider}</strong></div>
        </div>
       
      </section>
    );
  }

  export default PandaQuotes;