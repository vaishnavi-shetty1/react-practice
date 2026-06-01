import styled from "styled-components";
import PropTypes from "prop-types";
import { BASE_URL } from "../../constants";
import { Button, Container } from "../SharedStyles";

const SearchResult = ({data}) => {
  return (
    <FoodCardContainer>
        <Container>
            <FoodCards>
            {
                data?.map(({name,image,text,price}) => (
                    <FoodCard key={name}>
                        <div className="food-image">
                            <img src={BASE_URL + image} alt={name} />
                        </div>
                        <div className="food-info">
                            <div className="info">
                                <h3>{name}</h3>
                                <p>{text}</p>
                            </div>
                            <Button>${price.toFixed(2)}</Button>
                        </div>
                    </FoodCard>
                ))
            }
        </FoodCards>
        </Container>
    </FoodCardContainer>
  )
}

export default SearchResult

SearchResult.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const FoodCardContainer = styled.section`
background-image: url("/bg.png");
background-size: cover;
background-position: center;
min-height:calc(100vh - 210px);
padding: 64px 24px;
`;

const FoodCards = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
row-gap: 32px;
column-gap: 24px;
align-items: center;
padding-top:80px
`;

const FoodCard = styled.div`
border:0.66px solid;
border-image-source: radial-gradient(80.69% 208.78% at 108.28% 112.58%, #eabfff 0%, rgba(135,38,183,0) 100%) radial-gradient(80.38% 222.56% at -13.75% -12.36%, #98f9ff 0%, rgba(255,255,255,0) 100%);

background: url(.png), radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165,239,255,0.2) 0%, rgba(110,191,244,0.0447917) 77.08%, rgba(70,144,213,0) 100%);
border-radius: 20px;
backdrop-filter: blur(13.1842px);
display: flex;
padding: 8px;

.food-info{
display: flex;
flex-direction: column;
justify-content: space-between;
align-items:end;
h3{
margin-top:8px;
font-size: 16px;
font-weight: 600;
}
p{
margin-top:4px;
font-size: 14px;
}
button{
font-size: 14px;
}
}
`;
