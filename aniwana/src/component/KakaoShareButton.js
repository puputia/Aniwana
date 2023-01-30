import React from 'react';
import Button from 'react-bootstrap/Button';
import KakaoIcon from "../assets/img/logo/kakaotalk_sharing_btn_small.png";
const { Kakao } = window;

const KakaoShareButton = ({data}) => {
  const url = "https://puputia.github.io/Aniwana/";
  const resultUrl = window.location.href;

  console.log('ddd', resultUrl, url)

  React.useEffect(()=> {
    Kakao.cleanup();
    Kakao.init("f273d96f219a5ebcebfb1cfd23bbd415");
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '나의 애니메이션 추천 결과',
        description: '나와 맞는 애니메이션은 앙앙 입니다.',
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      
      
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: 'url',
            webUrl: 'url',
          },
        },
      ],
    });
  }
  
    return (
      <Button onClick={shareKakao}
      style={{
        background: "#FEE500",
        border: "1px solid #cccccc",
        color: "black",
        fontFamily: "Pretendard-Regular",
        width: 300,
        height: 55,
        marginTop: "15px",
      }}
    >
      <img
        style={{ border: "none", width: "28px", marginRight: "10px" }}
        src={KakaoIcon}
        alt="카카오톡 공유"
      />
      카카오톡 공유하기
    </Button>)
  }




export default KakaoShareButton;
