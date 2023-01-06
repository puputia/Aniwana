import React from "react";
//css-in-js
import styled from "styled-components";
// import PangImage from '../assets/first_cat.jpg';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";

const Result = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Contents>
        <Header>나의 취향 애니찾기</Header>
        <Title>결과 보기</Title>
        <LogoImage>
          <img class="col-lg-9 col-md-8 mx-3 col-sm-8 col-12 mx-auto " src={ResultData[0].image} alt="..."  />
        </LogoImage>
        <Desc>
          <div>내 애니취향은</div>
          <div class="mb-20" style={{ fontSize: "60px"}}>
            {ResultData[0].name}{" "}
          </div>
        </Desc>
        <Plot>
          <div>{ResultData[0].plot} </div>
        </Plot>
        <Platform>
          <div>감상 가능한 플랫폼</div>
          <Link to="https://laftel.net/item/24512/%EC%95%94%EC%82%B4%EA%B5%90%EC%8B%A4-1%EA%B8%B0">Home</Link>
        </Platform>

        <Button
          style={{ fontFamily: "SimKyungha" }}
          onClick={() => navigate("/")}
        >
          테스트 다시하기
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%; 
  display: flex;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  font-size: 30pt;
  width: 100%; 
  text-align: center
  width: 100%;
  justify-content: center;
  font-family: "SimKyungha";
  background-color: #34ab64;
  color: white;
  
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;

  background-color: white;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  font-family: "SimKyungha";
  width: 60%;
`;

const Plot = styled.div`
  width: 60%;
  background: #cccccc;
  font-size: 15pt;
  margin-top: 20px;
  font-family: "SimKyungha";
`;

const Platform = styled.div`
  width: 60%;

  font-size: 20pt;
  margin-top: 20px;
  font-family: "SimKyungha";
`;

const Link = styled.div`

`;


const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
  font-family: "SimKyungha";
`;

const LogoImage = styled.div`
  margin-top: 10px;
  text-align: center;
  align-items:center;
  justify-content:center;
`;
