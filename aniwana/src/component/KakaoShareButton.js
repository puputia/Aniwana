import React from 'react';
import Button from 'react-bootstrap/Button';
const {Kakao} = window;

const KakaoShareButton = () => {
    const url = ""
    const resultUrl = window.location.href;

    console.log('ddd', resultUrl, url)
    React.useEffect(()=> {
        Kakao.cleanup();
        Kakao.init("f273d96f219a5ebcebfb1cfd23bbd415")
        console.log(Kakao.isInitialized());
    }, []);
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '애니메이션 추천 테스트 결과',
          description: '나와 잘맞는 애니메이션은 암살교실 입니다',
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
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
          
        ],
      });
    return(<Button
        style={{ fontFamily: "SimKyungha", width:170, marginTop: 20}}>
        카카오톡 공유하기
      </Button>)
}

export default KakaoShareButton;