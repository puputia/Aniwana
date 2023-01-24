import React from "react";
//css-in-js
import styled from "styled-components";
import PangImage from "../assets/img/icon.png";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Wrapper from "../common/Wrapper";
// import Footer from "../common/Footer";
const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    // useHistroy
    navigate("/question");
  };
  return (
    <>
    <Wrapper>
      <Contents>
        <Title>나의 취향 애니 찾기</Title>
        <SubTitle>나와 잘 맞는 애니는?</SubTitle>
        <LogoImage>
          <img
            className="col-lg-10 col-md-8 mx-3 col-sm-8 col-8"
            src={PangImage}
            alt="..."
          />
        </LogoImage>
        <Button
          className="start-btn"
          variant="dark"
          style={{
            width: "250px",
            height: "70px",
            marginTop: "20px",
            borderRadius: "20px",
            fontSize: "20px",
            fontFamily: "Pretendard-Regular",
          }}
          onClick={handleClickButton}
        >
          테스트 시작하기
        </Button>
      </Contents>
      {/* <Footer />  */}
    </Wrapper>
    </>
    
  );
};

export default Home;

// const Wrapper = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 448px;
  height: 100vh;
  background: #34ab64;
`;

const Title = styled.div`
  font-size: 30pt;
  font-weight: bold;
  margin-top: 40px;
  font-family: "Pretendard-Regular";
  color: white;
`;

const SubTitle = styled.div`
  font-size: 22pt;
  margin-top: 40px;
  font-family: "Pretendard-Regular";
  color: white;
`;

const LogoImage = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;
