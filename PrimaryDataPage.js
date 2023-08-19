import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Rings } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
function PrimaryDataPage(props) {
  const { primaryData, view, loader, getFavourites } = props;
  const [favList, setFavList] = useState([]);
  const onHandleFavourite = (data) => {
    setFavList(favList.concat(data));
  };
  useEffect(() => {
    var newFavList = [];
    newFavList = favList.filter(function (ele, pos) {
      return favList.indexOf(ele) === pos;
    });
    console.log(newFavList);
    getFavourites(newFavList);
  }, [favList]);

  return (
    <div>
      {loader ? (
        <Rings
          height="80"
          width="80"
          color="#5ee85c"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      ) : (
        <div>
          {primaryData ? (
            <div>
              {view ? (
                <div>
                  {primaryData.map((eachData) => {
                    return (
                      <div
                        key={uuid()}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "5%",
                          border: "2px solid rgba(232, 18, 18, 0.963)",
                        }}
                      >
                        <div
                          style={{
                            border: "30px solid rgba(232, 18, 18, 0.963)",
                          }}
                        ></div>
                        <img
                          src={eachData.urlToImage}
                          alt=""
                          style={{
                            height: "25%",
                            width: "20%",

                            alignItems: "center",
                          }}
                        />
                        <div style={{ paddingLeft: "10px" }}>
                          <h2
                            style={{
                              color: "rgba(232, 18, 18, 0.963)",
                            }}
                          >
                            {eachData.title}
                          </h2>
                          <p style={{ fontFamily: "Arial", fontWeight: "200" }}>
                            {eachData.description}
                          </p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <p
                              style={{
                                color: "rgba(111, 109, 109, 0.963)",
                                fontWeight: "bold",
                              }}
                            >
                              {eachData.publishedAt}
                            </p>
                            <div style={{ display: "flex" }}>
                              <div onClick={() => onHandleFavourite(eachData)}>
                                <FontAwesomeIcon
                                  icon={faHeart}
                                  style={{
                                    color: "rgba(232, 18, 18, 0.963)",
                                    height: "25px",
                                    width: "25px",
                                    marginTop: "10%",
                                    cursor: "pointer",
                                  }}
                                />
                              </div>
                              <Link
                                to="/details"
                                state={{ eachData: eachData }}
                              >
                                <button className="know-more-button">
                                  Read More
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div
                  style={{
                    display: "grid",

                    gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
                  }}
                >
                  {primaryData.map((eachData) => {
                    return (
                      <div
                        key={uuid()}
                        style={{
                          margin: "5%",

                          border: "2px solid rgba(232, 18, 18, 0.963)",
                        }}
                      >
                        <div
                          style={{
                            borderTop: "40px solid rgba(232, 18, 18, 0.963)",
                          }}
                        >
                          <img
                            src={eachData.urlToImage}
                            alt=""
                            style={{
                              height: "50%",
                              width: "100%",
                              alignItems: "center",
                            }}
                          />

                          <h2
                            style={{
                              padding: "2%",
                              color: "rgba(232, 18, 18, 0.963)",
                            }}
                          >
                            {eachData.title}
                          </h2>
                          <p
                            style={{
                              padding: "2%",
                              fontFamily: "Arial",
                              fontWeight: "200",
                            }}
                          >
                            {eachData.description}
                          </p>
                          <div>
                            <p
                              style={{
                                color: "rgba(111, 109, 109, 0.963)",
                                fontWeight: "bold",
                                padding: "2%",
                              }}
                            >
                              {eachData.publishedAt}
                            </p>

                            <a href={eachData.url}>
                              {" "}
                              <button className="know-more-button">
                                Read More
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
}

export default PrimaryDataPage;
