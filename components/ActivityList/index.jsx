import Activity from "../Activity";
import { Fragment } from "react";
import styled from "styled-components";
export default function ActivityList({ data }) {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          "justify-content": "center",
          "align-items": "center",
          padding: "15px 0px",
        }}
      >
        {data.map((item, index) => (
          <Activity data={item} key={index}></Activity>
        ))}
      </div>
    </Fragment>
  );
}
