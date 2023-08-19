import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faList, faSquare } from "@fortawesome/free-solid-svg-icons";
import PrimaryDataPage from "./PrimaryDataPage";
import { Link } from "react-router-dom";
// import { Axios } from "axios";
// import { colors } from "@mui/material";
function Main(props) {
  const logOutUser = () => {
    localStorage.clear();
    window.location.reload();
  };
  const API = "b01256167fc8496b976758167446950c";
  const [loader, setLoader] = useState(false);
  const [view, setView] = useState(true);
  const [selectCat, setSelectCat] = useState(true);
  const [viewCount, setViewCount] = useState(0);
  const [primaryData, setPrimaryData] = useState();
  const [favDataList, setFavDataList] = useState();
  const [url, setUrl] = useState(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API}`
  );

  // console.log(viewCount);

  const onHandleCount = () => {
    setViewCount(viewCount + 1);
    if (viewCount % 2 === 0) {
      setView(false);
    } else {
      setView(true);
    }
  };

  const categories = [
    { id: "general", title: "General" },
    { id: "business", title: "Business" },
    { id: "entertainment", title: "Entertainment" },

    { id: "health", title: "Health" },
    { id: "science", title: "Science" },
    { id: "sports", title: "Sports" },
    { id: "technology", title: "Technology" },
  ];
  useEffect(() => {
    setLoader(true);
    const fetchingData = fetch(url)
      .then((res) => res.json())
      .then((data) => setPrimaryData(data.articles), setLoader(false));
  }, [url]);

  const categoryData = (id) => {
    setSelectCat(false);

    if (selectCat) {
      setUrl(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API}`);
    } else {
      setUrl(
        `https://newsapi.org/v2/top-headlines?country=in&category=${id}&apiKey=${API}`
      );
    }
  };

  const getFavourites = (data) => {
    setFavDataList(data);
  };
  // console.log(favDataList);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "2%",
        }}
      >
        <div style={{ display: "flex" }}>
          {categories.map((eachCategory) => {
            return (
              <p
                key={eachCategory.id}
                onClick={() => {
                  categoryData(eachCategory.id);
                }}
                style={{
                  color: "rgba(232, 18, 18, 0.963)",
                  fontWeight: "bold",
                  padding: "7px",
                  cursor: "pointer",
                }}
              >
                {eachCategory.title}
              </p>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "2%",
            width: "auto",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              background: "none",
              outline: "none",
              border: "none",
            }}
            onClick={onHandleCount}
          >
            {view ? (
              <FontAwesomeIcon
                icon={faList}
                style={{ color: "rgba(232, 18, 18, 0.963)", height: "30px" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faSquare}
                style={{ color: "rgba(232, 18, 18, 0.963)", height: "30px" }}
              />
            )}
          </button>
          <Link to="/fav-news" state={{ favDataList: favDataList }}>
            <FontAwesomeIcon
              icon={faHeart}
              onClick={getFavourites}
              style={{
                color: "rgba(232, 18, 18, 0.963)",
                height: "25px",
                width: "25px",
                paddingTop: "6px",
                cursor: "pointer",
              }}
            />
          </Link>
          <button className="know-more-button" onClick={logOutUser}>
            Log Out
          </button>
        </div>
      </div>

      <PrimaryDataPage
        primaryData={primaryData}
        view={view}
        loader={loader}
        getFavourites={getFavourites}
      />
    </div>
  );
}

export default Main;
