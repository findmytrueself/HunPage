import React, { useRef } from "react";
import Styled from "styled-components";
import Search from "../src/components/Search";
import List from "./List/Video_list/List";
import Loading from "../src/components/Loading";
import HomePage from "../src/pages/HomePage";

const SearchPage = ({
  menuOpen,
  searchButtonClick,
  setSearchText,
  isLoading,
  apiData,
}) => {
  return (
    <>
      <Search
        menuOpen={menuOpen}
        searchButtonClick={searchButtonClick}
        setSearchText={setSearchText}
      />
      {/* {isLoading ? <HomePage /> : apiData.map((data) => <List data={data} />)} */}
    </>
  );
};

export default SearchPage;

//app.jsx

// import SearchPage from "./pages/SearchPage";

// const [apiData, setApiData] = useState([]);

// const [searchText, setSearchText] = useState("");
// const [searchButtonClickBool, setSearchButtonClickBool] = useState(false);
// const [isLoading, setIsLoading] = useState(true);

// const searchButtonClick = async (e) => {
//   e.preventDefault();
//   setSearchButtonClickBool(true);
// };

// useEffect(() => {
//   AOS.init({
//     duration: 2000,
//   });
// }, []);

// useEffect(() => {
//   async function fetchMyApi() {
//     let mounted = true;
//     setIsLoading(true);
//     if (searchButtonClickBool && mounted) {
//       const { data } = await axios.get(
//         `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchText}&key=AIzaSyC72B5xSjpcLOkNIcFyQGsOWYXN2ec0Oxg`
//       );
//       console.log(data);
//       setApiData(data.items);
//       setIsLoading(false);
//     }
//     return () => {
//       mounted = false;
//       setSearchButtonClickBool(false);
//     };
//   }
//   fetchMyApi();
// }, [searchButtonClickBool]);

// {/* <Route exact path="/">
//   <SearchPage
//     // isLoading={isLoading}
//     menuOpen={menuOpen}
//     // searchButtonClick={searchButtonClick}
//     // setSearchText={setSearchText}
//     // apiData={apiData}
//   />
// </Route> */}
