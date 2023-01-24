import React from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { QuestionData } from "../assets/data/questiondata";
import Wrapper from "../common/Wrapper";

const Question = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  let totalScore = [0,0,0,0,0,0,0,0,0,0,0,0];
  
  const navigate = useNavigate();

  const handleClickButton = (no) => {
    let addScore = QuestionData[questionNo].a[no].add_score; // N : 선택한 항목의 idx
    for (let i = 0; i < 12; ++i) {
      totalScore[i] += addScore[i];
      console.log("totalScore[i]", totalScore[i]);
      // setTotalScore(); //이부분은 임시로 해놓은건데 어떻게 처리할까나...
    }

    // let addScore = totalScore.map((s) =>
    //   s.id === type ? { id: s.id, score: s.score + no } : s
    // );

    // setTotalScore(newScore);

    if (QuestionData.length !== questionNo + 1) {
      // 다음문제로 문제수 증가
      setQuestionNo(questionNo + 1);
    } else {
      // 결과 페이지 이동

     // 문자열로 초기화 ""
      let max_score = -111111; // 정수니까 정수로 초기화 , 최댓값을 구하는 것이므로 작은값. -11111 ...
      let idx_ani = -1; //최댓값이니까 제일 작은값 (index보다 작은값이니까 -1)

      for (let i = 0; i < 12; ++i) {
        if (max_score < totalScore[i]) {
          max_score = totalScore[i];
          idx_ani = i;
        }
      }
     
      console.log("max_score", max_score);
      console.log("idx_ani", idx_ani);

      // Result.js 로 넘어가는거잖아 //  func_calc()으로 리턴된 값을 같이 넘겨야돼
      navigate('/result', {
        state: { idx: idx_ani },
        }
      );
      // Ani: navigate에 넘길 key, Anime_name: navigate에 넘길 value
    }
  };

  return (
    <>
    <Wrapper>
      <Contents>
        {/* 왼쪽 버튼 클릭시 1 더해줌, 오른쪽 버튼 클릭시 0 더해줌 */}
        <Title style={{ whiteSpace: "pre-line" }}>
          {QuestionData[questionNo].q}
        </Title>
        <ButtonGroup>
          <Button
            onClick={() => handleClickButton(0)}
            style={{
              width: "300px",
              minHeight: "80px",
              fontSize: "15pt",
              marginTop: "20px",
              background: "#34AB64",
              border: "0px",
            }}
          >
            {QuestionData[questionNo].a[0].answer}
          </Button>
          <Button
            onClick={() => handleClickButton(1)}
            style={{
              width: "300px",
              minHeight: "80px",
              fontSize: "15pt",
              marginTop: "20px",
              background: "#34AB64",
              border: "0px",
            }}
          >
            {QuestionData[questionNo].a[1].answer}
          </Button>
          <Button
            onClick={() => handleClickButton(2)}
            style={{
              width: "300px",
              minHeight: "80px",
              fontSize: "15pt",
              marginTop: "20px",
              background: "#34AB64",
              border: "0px",
            }}
          >
            {QuestionData[questionNo].a[2].answer}
          </Button>
          <Button
            onClick={() => handleClickButton(3)}
            style={{
              width: "300px",
              minHeight: "80px",
              fontSize: "15pt",
              marginTop: "20px",
              background: "#34AB64",
              border: "0px",
            }}
          >
            {QuestionData[questionNo].a[3].answer}
          </Button>
        </ButtonGroup>
        <BarWrap>
          <ProgressBar
            variant="black"
            now={(questionNo / QuestionData.length) * 100}
            // style.width = (100/endPoint) * (qIdx+1) + '%';
            style={{
              marginLeft: "18px",
              width: "33vh",
              height: "2.5vh",
              borderRadius: "0",
            }}
          />

          <PageNo>
            <div>
              {questionNo + 1}/{QuestionData.length}
            </div>
          </PageNo>
        </BarWrap>
      </Contents>
    </Wrapper>
    </>
  );
};

export default Question;

// const Wrapper = styled.div`
//   display: flex;

//   justify-content: center;
//   width: 100%;
// `;

const Title = styled.div`
  font-size: 1.6em;
  text-align: center;
  font-family: "Pretendard-Regular";
  font-weight: bold;
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
  line-height: 0.5;
  flex-direction: row;
  font-size: 1.5rem;
  margin-left: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
