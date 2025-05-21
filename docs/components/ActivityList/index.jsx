import Activity from "../Activity";
import { Fragment } from "react";
export default function ActivityList({ data }) {
  return (
    <Fragment>
      {data.map((item, index) => (
        <Activity data={item} key={index}></Activity>
      ))}
    </Fragment>
  );
}
