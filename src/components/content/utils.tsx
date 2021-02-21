import React from 'react';
import { id2color } from '../../utils/colors';
import Content, {Links, TextBlock, TextList} from '../shared/Content';
import {LinksProps as ILinks} from '../shared/Content/Links';

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
type Details = ITextBlock | ITextList | ILinks;

export interface IContent {
  heading: string;
  id: string;
  description: string;
  postDescription?: string;
  content: Details[];
}

export function generateContent(id: string, data: IContent[]): JSX.Element {

  return (
    <>
      {data.map((content: IContent, idx: number) =>
        <Content
          heading={content.heading}
          description={content.description}
          postDescription={content.postDescription}
          heroColor={id2color(content.id)}
          key={`${id}-${idx}`}>
          <>
            {content.content.map((details: Details, i: number) => {
              if (details.block) {
                return (
                  <TextBlock
                    content={details.block}
                    classList={`${content.id}-description-${idx}-${i}`}
                    key={`${content.id}-${i}`}
                  />
                );
              } else if (details.list) {
                return (
                  <TextList
                    heading={details.list.heading}
                    content={details.list.content}
                    classList={`${content.id}-description-${idx}-${i}`}
                    split={details.list.split}
                    key={`${content.id}-${i}`}
                  />
                );
              } else if (details.links) {
                console.log(details.links);
                return (
                  <Links links={details.links}/>
                );
              } else {
                return (<div></div>);
              }
            })}
          </>
        </Content>,
      )}
    </>
  );
}

