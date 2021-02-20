import React from 'react';
import { id2color } from '../../utils/colors';
import Content, {TextBlock, TextList} from '../shared/Content';

export interface ITextBlock {
  block: string;
}

export interface ITextList {
  list: {
    heading: string,
    content: string[],
    split: boolean,
  };
}

type Details = ITextBlock | ITextList;

export interface IContent {
  heading: string;
  description: string;
  id: string,
  content: Details[]
}

export function generateContent(id: string, data: IContent[]): JSX.Element {


  return (
    <>
      {data.map((content: IContent, idx: number) => 
        <Content
          heading={content.heading}
          description={content.description}
          heroColor={id2color(content.id)}
          key={`${id}-${idx}`}>
          <>
            {content.content.map((details: Details, i: number) => {
              if (details.block) {
                return (
                  <TextBlock 
                    content={details.block}
                    classList={`${content.id}-description-${i}`}
                    key={`${content.id}-${i}`}
                  />
                );
              } else if (details.list) {
                return (
                  <TextList
                    heading={details.list.heading}
                    content={details.list.content}
                    classList={`${content.id}-description-${i}`}
                    split={details.list.split}
                    key={`${content.id}-${i}`}
                  />
                );
              } else {
                return (<div></div>);
              }
            })}
          </>
        </Content>)}
    </>
  );
}

