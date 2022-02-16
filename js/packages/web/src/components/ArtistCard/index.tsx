import React from 'react';
import { Card } from 'antd';

import { Artist } from '../../types';

import { shortenAddress } from '@oyster/common';
import { MetaAvatar } from '../MetaAvatar';
import Collections from '../../utils/collections/collections.json'
export const ArtistCard = ({ artist }: { artist: Artist }) => {
  var name: any;
  Collections.forEach(function (collection) {
    if (artist.address !== collection.creator) {
      return
    } else {
      name = collection.collection
    }
  })
  return (
    <Card
      hoverable={true}
      className={`artist-card artist-card-without-shadow`}
      cover={
        <div className="header-container">
          {artist.background ? <img src={artist.background} /> : null}
        </div>
      }
      bordered={false}
    >
      <>
        <MetaAvatar creators={[artist]} size={64} />
        <div className="artist-card-name artist-name-badge">
          {name}
        </div>
        <div className="artist-card-description">{artist.about}</div>
      </>
    </Card>
  );
};
