import styled from "styled-components";
import { useEffect, useState } from "react";
import SearchResult from "./components/SearchResult/SearchResult";
import { Button, Container } from "./components/SharedStyles";
import { BASE_URL } from "./constants";

const App = () => {

 const [data, setData] = useState([]);
 const [filteredData, setFilteredData] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);
 const [selectedBtn, setSelectedBtn] = useState("all");

 useEffect(() => {
  const fetchFoodData = async () => {
   setLoading(true);
   try {
    const response = await fetch(BASE_URL);

    const json = await response.json();

    setData(json);
    setFilteredData(json);
   } catch (error) {
    setError("Unable to fetch data");
   } finally {
    setLoading(false);
   }
  };

  fetchFoodData();
 }, []);

const searchFood = (e) => {
  const searchValue = e.target.value;

  if (searchValue === "") {
    setFilteredData(data);
    return;
  }

  const filter = data?.filter((food)=>  food.name.toLowerCase().includes(searchValue.toLowerCase()));

  setFilteredData(filter);
};

const filterFood = (type) => {
  if (type === "all") {
    setFilteredData(data);
    setSelectedBtn("all");
    return;
  }

  const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));

  setFilteredData(filter);
  setSelectedBtn(type);
};

//  const temp = [
//   {
//     "name": "Boilded Egg",
//     "price": 10,
//     "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     "image": "/images/egg.png",
//     "type": "breakfast"
//   }
// ];

 if(error) return <div>{error}</div>;
 if(loading) return <div>Loading...</div>;

  return <>
    <Container>
    <TopContainer>
      <div className="logo">
        <img src="/Foody Zone.svg" alt="logo" />
      </div>

      <div className="search-box">
        <input onChange={searchFood} placeholder="Search Food"></input>
      </div>
    </TopContainer>

    <FilterContainer>
      <Button onClick={() => filterFood("all")}>All</Button>
      <Button onClick={() => filterFood("breakfast")}>Breakfast</Button>
      <Button onClick={() => filterFood("lunch")}>Lunch</Button>
      <Button onClick={() => filterFood("dinner")}>Dinner</Button>
    </FilterContainer>
  </Container>
  <SearchResult data={filteredData}/>
  </>

};

export default App;

const TopContainer = styled.section`
min-height: 140px;
display: flex;
justify-content: space-between;
align-items: center;
padding:16px;

.search-box{
input{
background-color: transparent;
border: 1px solid red;
color:white;
border-radius: 5px;
height: 40px;
font-size: 16px;
padding: 0 10px;
}
}
`;

const FilterContainer = styled.section`
display: flex;
justify-content: center;
gap: 16px;
padding-bottom:40px
`;
