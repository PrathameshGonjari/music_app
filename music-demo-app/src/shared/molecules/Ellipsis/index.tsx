import React from "react";

interface EllipsisProps {
    children:any;
    maxWidth?:number
}

function Ellipsis(props: EllipsisProps) {
  const { children , maxWidth } = props;
  return (
    <div>
      <span className="overflow" style={{ float: "left", width: maxWidth }}>
        <span>{children}</span>
      </span>
    </div>
  );
}

export default Ellipsis;
