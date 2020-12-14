import React from 'react';
import "./PropertyWalkscore.css";

function PropertyWalkscore(props) {
 console.log("walkscore", props)
  const parsedAddress = props.item.address.replace(/[^A-Z0-9]+/gi, '-');
  const walkscoreUrl = `https://www.walkscore.com/serve-walkscore-tile.php?wsid=&s=${parsedAddress}&lat=${props.item.la}&lng=${props.item.lo}&o=v&ts=t&c=t&mm=all&h=864&fh=18&w=860`;

  return (
    <div>
      <iframe
        className="property__walkscore"
        marginHeight="0"
        marginWidth="0"
        height="864px"
        frameBorder="0"
        scrolling="no"
        title="Walk Score"
        width="100%"
        src={walkscoreUrl}
      />
    </div>
  )
}

export default PropertyWalkscore;
