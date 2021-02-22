import React from 'react';
import { id2color } from '../../utils/colors';
import Content, {Image, Links, TextBlock, TextList} from '../shared/Content';
import {LinksProps as ILinks} from '../shared/Content/Links';
import {ImageProps as IImage} from '../shared/Content/Image';

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
type Details = ITextBlock | ITextList | ILinks | IImage;

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
          idx={idx}
          key={`${id}-${idx}`}>
          <>
            {content.content.map((details: Details, i: number) => {
              if ('block' in details) {
                return (
                  <TextBlock
                    content={details.block}
                    classList={`${content.id}-description-${idx}-${i}`}
                    key={`${content.id}-${i}`}
                  />
                );
              } else if ('list' in details) {
                return (
                  <TextList
                    heading={details.list.heading}
                    content={details.list.content}
                    classList={`${content.id}-description-${idx}-${i}`}
                    split={details.list.split}
                    key={`${content.id}-${i}`}
                  />
                );
              } else if ('links' in details) {
                return (
                  <Links
                    links={details.links}
                    classList={`${content.id}-description-${idx}-${i}`}/>
                );
              } else if ('image' in details) {
                return (
                  <Image
                    image={details.image}/>
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

