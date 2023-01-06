import React from 'react';
import Button from 'react-bootstrap/Button';
const { Kakao } = window;

const KakaoShareButton = ({ data }) => {
  const url = "https://catmbti10.netlify.app/"; // url은 다른 테스트의 링크입니다 아직 배포전이어서 이후에 채워넣을 생각입니다.
  const resultUrl = window.location.href;

  React.useEffect(() => {
    Kakao.cleanup();
    Kakao.init("ff6f6e75da115d029f47399905c8921f");
    console.log(Kakao.isInitialized());
  }, []);



  const shareKakao = () => {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '애니메이션 추천 테스트 결과',
        description: `가장 잘맞는 애니메이션은 ${data.name}입니다.`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ]
    });
  }


  return (
    <Button onClick={shareKakao} style={{ fontFamily: "SimKyungha", width: 170, marginLeft: '20px' }} >
      카카오톡 공유하기
    </Button>
  )
}

export default KakaoShareButton;