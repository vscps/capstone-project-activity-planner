import { Fragment } from "react";
import Image from "next/image";
export default function Activity({ data }) {
  return (
    <Fragment>
      <article>
        <Image
          alt={data.name}
          src={data.imageUrl}
          width="100%"
          height="auto"
        ></Image>
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
      </article>
    </Fragment>
  );
}
