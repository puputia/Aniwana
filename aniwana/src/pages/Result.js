import React from "react";
//css-in-js
import styled from "styled-components";
// import PangImage from '../assets/first_cat.jpg';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";
import NetflixLogo from '../assets/img/logo/netflix_logo.png';
import LaftelLogo from '../assets/img/logo/laftel_logo.png';
import Arrow from '../assets/img/logo/arrow.png';
import Kakao from '../assets/img/logo/kakaotalk_sharing_btn_small.png'
import Twitter from '../assets/img/logo/twitter.png'


// function ShowAni() {
//   var 현재상태 = 'info';
//   return (
//     <div>
//       {
//         ResultData[0].link2
//       }
//     </div>
//   )
// } 

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
          {/* <Button onClick={()=>{window.open(ResultData[0].url1)}}
            style={{ fontFamily: "Pretendard-Regular", width:170, marginTop: '5px', textAligns:"center", justifyContent:"center", display:"flex", alignItems:"center"}}>
            <img src alt=""/> 라프텔 바로가기
          </Button>
          <Button onClick={()=>{window.open(ResultData[0].url2)}}
            style={{ fontFamily: "Pretendard-Regular", width:170, marginTop: '5px', textAligns:"center", justifyContent:"center", display:"flex", alignItems:"center"
            }}>
            넷플릭스 바로가기 */}
          {/* </Button> */}
          
          <button class="my-4" width="20rem" style={{background: "white", border:"none", display:"flex", flexDirection:"row",alignItems: "center"}} onClick={()=>{window.open(ResultData[0].url1)}}>
            <img src={LaftelLogo} alt="logo1" width="100"  /><div class="mx-4" style={{alignItems: "center",justifyContents:"center", textAlign:"center"}}>라프텔</div><img class="mx-4" src={Arrow} alt="arrow" width="35" />
          </button>
         
          <button class="my-4" width="20rem" style={{background: "white", border:"none" , display:"flex", flexDirection:"row", alignItems: "center"}} onClick={()=>{window.open(ResultData[0].url2)}}>
            <img src={NetflixLogo} alt="logo2" width="100" /><div class="mx-4" style={{alignItems: "center",justifyContents:"center", textAlign:"center"}}>넷플릭스</div><img class="mx-4" src={Arrow} alt="arrow" width="35" />
          </button>
        </Platform>

        <ButtonGroup>
          <Button 
            style={{background:"#FEE500", border:"1px solid #cccccc", color:"black", fontFamily: "Pretendard-Regular",width:300, height: 55,  marginTop: '15px'}}>
            <img style={{border:"none", width:"30px", marginRight:"5px"}} src={Kakao} alt="카카오톡 공유"/>카카오톡 공유하기
          </Button>
          <Button 
            style={{background:"#00acee", border:"1px solid #cccccc", color:"black", fontFamily: "Pretendard-Regular",width:300, height: 55,  marginTop: '15px'}}>
            <img style={{border:"none", width:"45px", marginRight:"5px"}} src={Twitter} alt="트위터 공유"/>트위터 공유하기
          </Button>
          <Button
            style={{background:"black", fontFamily: "Pretendard-Regular", width:300, height: 55, marginTop: '15px'}}
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
  font-family: 'Pretendard-Regular';
  background-color: #34ab64;
  color: white;
  
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  font-family: 'Pretendard-Regular';
  background-color: white;
`

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  
  width: 60%;
`

const Plot = styled.div`
  width: 60%;
  background: #cccccc;
  font-size: 15pt;
  margin-top: 20px;
  font-family: 'Pretendard-Regular';
`

const Platform = styled.div`
  width: 60%;

  font-size: 20pt;
  margin-top: 20px;
  font-family: 'Pretendard-Regular';;
`


const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
  font-family: 'Pretendard-Regular';
`

const LogoImage = styled.div`
  margin-top: 10px;
  text-align: center;
  align-items:center;
  justify-content:center;
`

// const Link = styled.div `
// `

const ButtonGroup = styled.div `
  display:flex;
  flex-direction : column;
`

