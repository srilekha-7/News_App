import React from "react";
import { useLocation } from "react-router-dom";

import "./index.css";
function Details(props) {
  const location = useLocation();
  const detailEl = location.state?.eachData;
  console.log(detailEl);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "10%",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ display: "flex" }}>
          <h2 style={{ color: "rgba(232, 18, 18, 0.963)" }}>
            {detailEl.source.name}|
          </h2>
          <p
            style={{
              color: "rgba(111, 109, 109, 0.963)",
              fontWeight: "bold",
              paddingTop: "2%",
            }}
          >
            {detailEl.author}
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "2%" }}>
          <a href={detailEl.url}>
            <button className="know-more-button">Full Article</button>
          </a>
        </div>
      </div>
      <h1 style={{ color: "rgba(232, 18, 18, 0.963)" }}>{detailEl.title}</h1>
      <img
        src={detailEl.urlToImage}
        alt=""
        style={{
          fontSize: "25%",
          width: "90%",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      />
      <p
        style={{
          fontWeight: "bold",
        }}
      >
        {detailEl.description}
      </p>
      <p>{detailEl.content}</p>
      <div
        style={{ display: "flex", width: "100%", alignItems: "space-between" }}
      >
        <p
          style={{
            color: "rgba(111, 109, 109, 0.963)",
            fontWeight: "bold",
          }}
        >
          -{detailEl.publishedAt}
        </p>
      </div>
    </div>
  );
}

export default Details;
