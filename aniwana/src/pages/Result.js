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
          <button onClick={()=>{window.open(ResultData[0].url1)}}>라프텔 바로가기</button>
          <button onClick={()=>{window.open(ResultData[0].url2)}}>넷플릭스 바로가기</button>
        </Platform>

        <ButtonGroup>
          <Button
            style={{ fontFamily: "SimKyungha", width:170}}>
            카카오톡 공유하기
          </Button>
          <Button
            style={{ fontFamily: "SimKyungha", width:170, marginTop: '15px'}}
            onClick={() => navigate("/")}>
            테스트 다시하기
          </Button>
          
          
        </ButtonGroup>
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
`

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  font-family: "SimKyungha";
  width: 60%;
`

const Plot = styled.div`
  width: 60%;
  background: #cccccc;
  font-size: 15pt;
  margin-top: 20px;
  font-family: "SimKyungha";
`

const Platform = styled.div`
  width: 60%;

  font-size: 20pt;
  margin-top: 20px;
  font-family: "SimKyungha";
`


const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
  font-family: "SimKyungha";
`

const LogoImage = styled.div`
  margin-top: 10px;
  text-align: center;
  align-items:center;
  justify-content:center;
`

const Link = styled.div `
`

const ButtonGroup = styled.div `
  display:flex;
  flex-direction : column;
`

