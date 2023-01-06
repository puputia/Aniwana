import React from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { QuestionData } from "../assets/data/questiondata";

const Question = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    { id: "amsal", score: 0 },
    { id: "deathnote", score: 0 },
    { id: "evangelion", score: 0 },
    { id: "haikyu", score: 0 },
    { id: "jujustsu_kaisen", score: 0 },
    { id: "kaguya", score: 0 },
    { id: "lovelive", score: 0 },
    { id: "myhero", score: 0 },
    { id: "spyfamily", score: 0 },
    { id: "tokyo_g", score: 0 },
    { id: "tokyo_re", score: 0 },
    { id: "toradora", score: 0 },
])
  const navigate = useNavigate();
  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
    s.id === type ? { id: s.id, score: s.score + no } : s
);

setTotalScore(newScore);

if (QuestionData.length !== questionNo + 1) {
      // 다음문제로 문제수 증가
      setQuestionNo(questionNo + 1);
    } else {
      // 결과 페이지 이동
      navigate("/result");
    }

    
  };


  
  return (
    <Wrapper>
      
      <Contents>
        {/* 왼쪽 버튼 클릭시 1 더해줌, 오른쪽 버튼 클릭시 0 더해줌 */}
        <Title>{QuestionData[questionNo].q}</Title>
        <ButtonGroup>
          <Button
            onClick={() => handleClickButton()}
            style={{
              width: "300px",
              minHeight: "80px",
              fontSize: "15pt",
              marginTop: "20px",
              background: "#34AB64",
              border:"0px"
            }}
          ></Button>
          <Button
            onClick={() => handleClickButton()}
            style={{
              width: "300px",
              minHeight: "80px",
              fontSize: "15pt",
              marginTop: "20px",
              background: "#34AB64",
              border:"0px"
            }}
          ></Button>
          <Button
            onClick={() => handleClickButton()}
            style={{
              width: "300px",
              minHeight: "80px",
              fontSize: "15pt",
              marginTop: "20px",
              background: "#34AB64",
              border:"0px"
            }}
          ></Button>
          <Button
            onClick={() => handleClickButton()}
            style={{
              width: "300px",
              minHeight: "80px",
              fontSize: "15pt",
              marginTop: "20px",
              background: "#34AB64",
              border:"0px"
            }}
          ></Button>
        </ButtonGroup>
        <BarWrap>
          <ProgressBar  
            variant="black" 
            now={(questionNo / QuestionData.length) * 100}
            // style.width = (100/endPoint) * (qIdx+1) + '%';
            style={{
              marginLeft:"18px",
              width: "33vh",
              height: "2.5vh",
              borderRadius: "0",
            }}
          />
          
          <PageNo>
            <div>{questionNo+1}/{QuestionData.length}</div>
          </PageNo>
        </BarWrap>
      </Contents>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  display: flex;
  
  justify-content: center;
  width: 100%;
  
`;

const Title = styled.div`
  font-size: 2em;
  text-align: center;
  font-family: "SimKyungha";
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 448px;
  height: 100vh;
  background-color: white;
`;

const BarWrap = styled.div`
  display: flex;
  margin-top: 60px;
  flex-direction: row;
`;

const PageNo = styled.div`
  margin: 0px;
  display: flex;
  line-height: 1.0;
  flex-direction: row;
  font-size: 1.5rem;
  margin-left: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  font-family: "LeeSeoYun";
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

