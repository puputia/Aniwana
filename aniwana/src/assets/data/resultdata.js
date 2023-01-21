import Amsal from '../img/amsal.jfif'
import Deathnote from '../img/deathnote.jfif'
import Evangelion from '../img/evangelion.jpg'
import Haikyu from '../img/haikyu.jfif'
import JujustsuKaisen from '../img/jujustsu_kaisen.jpg'
import Kaguya from '../img/kaguya.jfif'
import Lovelive from '../img/lovelive.jfif'
import Myhero from '../img/myhero.jpg'
import Spyfamily from '../img/spyfamily.jfif'
import TokyoGhoul from '../img/tokyo_g.jfif'
import TokyoRevengers from '../img/tokyo_re.jfif'
import Tonari from '../img/tonari.jpg'


// url1: 라프텔
// url2: 넷플릭스 

export const ResultData = [
    {
        id: "amsal",
        name :'암살교실',
        plot : "어느 날 갑자기 <쿠누가기오카 중학교>의 열등반인 3학년 E반에 정부 방위성의 인간과 수수께끼의 생물이 나타났다.\n 달의 70%를 파괴해 달을 영구적으로 초승달 상태가 되어버리게 한 문어형의 위험한 생물은 “내년 3월까지 자신을 죽이지 않으면 지구를 파괴할 것”이라고 선언한 후 3학년 E반의 담임 교사직에 자체 지원하였다.\n 정부는 최후의 수단으로 몇 가지 지침을 마련하여 3학년 E반의 학생들에게 수수께끼의 생물을 암살할 것을 제안한다….",
        //한줄로 작성해야 에러가 나지않음! 
        image: `${Amsal}`,
        url1: 'https://laftel.net/item/24512/%EC%95%94%EC%82%B4%EA%B5%90%EC%8B%A4-1%EA%B8%B0',
        url2: 'https://www.netflix.com/kr/title/80045948'
    },

    {
        id: "deathnote",
        name: '데스노트',
        plot: '전국에서 우수한 성적을 보유한 평범한 고등학생인 야가미 라이토, 매일 반복되는 하루에 지루함을 느낀다.\n 그러던 어느날 하늘에서 떨어진 검은 노트를 줍는다. 노트의 이름은 데스노트. \n이 노트에 이름이 적힌 자는 반드시 죽게되는 노트였다.\n 라이토는 이 노트를 이용해 신세계의 신이 되려는 계획을 세우게 되는데..',
        image: `${Deathnote}`,
        url1: 'https://laftel.net/item/40846/(%EC%9E%90%EB%A7%89)-%EB%8D%B0%EC%8A%A4%EB%85%B8%ED%8A%B8-%EB%A6%AC%EB%A7%88%EC%8A%A4%ED%84%B0' 
        
      },
      {
        id: "evangelion",
        name: '신세기 \n에반게리온',
        plot: '서기 2000년 남극에 거대한 운석이 충돌하는 미증유의 재난 ‘세컨드 임팩트’가 발생한다.\n  그 결과 지구의 자전축이 뒤틀렸고 해수면 상승,내란,전쟁… 등의 이유로 세계 인구의 절반이 절멸하게 된다. \n그로부터 15년 후 인류가 과거의 상처를 치유해 나갈 무렵 새로운 위협이 닥쳐오게된다. \n사도 라는 적들은 세컨드 임팩트에 이어 서드 임팩트를 일으켜 지구를 파괴하려 한다. \n이에 인류는 사도에 대항하기 위해 최후의 수단인 에반게리온을 개발하게 되는데…',
        image: `${Evangelion}`,
        url2: 'https://www.netflix.com/kr/title/81033445' 
      },
      {
        id: "haikyu",
        name: '하이큐',
        plot: '어렸을 적 TV에서 작은거인의 경기를 보고 배구선수를 꿈꾸게 된 히나타 쇼요.\n 중학교 마지막 공식전에 출전했지만 ‘코트 위의 제왕’ 이라 불리는 카게야마에게 처참히 패하게 된다.\n 복수를 다짐한 히나타는 카라스노 고등학교 배구부에서 카게야마를 만나게 되는데…',
        image: `${Haikyu}`,
        url1: 'https://laftel.net/item/23661/%ED%95%98%EC%9D%B4%ED%81%90!!-1%EA%B8%B0',
        url2: 'https://www.netflix.com/kr/title/80090673' 
      },
      {
        id: "jujustsu_kaisen",
        name: '주술회전',
        plot: '경이적인 신체능력을 가진 소년 "이타도리 유지"는 평범한 고등학생이었지만 어느 날 저주에 습격당한 친구를 구하기 위해 특급 주물 "양면 스쿠나의 손가락"을 먹고 영혼에 저주가 깃들게 된다.\n 위험한 저주인 스쿠나와 몸을 공유하게 된 이타도리는 최강의 주술사인 고죠 사토루의 제안으로 저주에 대항하는 기관인 도쿄 도립 주술 고등전문학교에 편입하게 되는데…',  
        image: `${JujustsuKaisen}`,
        url1: 'https://laftel.net/item/39986/%EC%A3%BC%EC%88%A0%ED%9A%8C%EC%A0%84-part-1',
        url2: 'https://www.netflix.com/kr/title/81278456'
      },
      {
        id: "kaguya",
        name: '카구야 님은\n 고백받고 싶어',
        plot: '장래가 기대되는 우수한 수재들이 모인 슈치인 학원. \n그 학생회에서 만난 부회장 시노미야 카구야와 회장 시로가네 미유키는 서로에게 끌리고 있었지만, 프라이드가 강하고 솔직하지 못한 두 사람은, 귀찮게도 "어떻게 상대방에게 고백을 받아낼 것인가" 만을 생각하게 되어버렸다… \n과연 누가 먼저 고백을 받게 될 것 인가..?!',
        image: `${Kaguya}`,
        url1: 'https://laftel.net/item/39072/%EC%B9%B4%EA%B5%AC%EC%95%BC-%EB%8B%98%EC%9D%80-%EA%B3%A0%EB%B0%B1%EB%B0%9B%EA%B3%A0-%EC%8B%B6%EC%96%B4-~%EC%B2%9C%EC%9E%AC%EB%93%A4%EC%9D%98-%EC%97%B0%EC%95%A0-%EB%91%90%EB%87%8C%EC%A0%84~-1%EA%B8%B0' 
      },
      {
        id: "lovelive",
        name: '러브라이브',
        plot: '전통있는 고등학교인 오토노키자카 고교는 재학생 부족으로 인한 학급수 부족으로 폐교 위기에 처한다. \n학생들은 전통있는 학교가 폐교되는 것에 반발하지만 명확한 해답을 내놓지 못한다.\n 하지만 아홉 명의 재학생들이 한 가지 묘안을 생각해냈다고 한다.\n 자신들이 스쿨 아이돌이 되어 학교의 이름을 널리 알리고 덩달아 입학 희망자를 늘리자는 것이다..',
        image: `${Lovelive}`,
        url1: 'https://laftel.net/item/23230/%EB%9F%AC%EB%B8%8C-%EB%9D%BC%EC%9D%B4%EB%B8%8C!-1%EA%B8%B0' 
      },
      {
        id: "myhero",
        name: '나의 히어로\n 아카데미아',
        plot: '세계의 80퍼센트의 인구가 개성이라 불리는 초능력을 가진 사회, 어렸을 때부터 히어로를 꿈꾸던 소년이 있다.\n 소년의 이름은 미도리야 이즈쿠.\n 그는 개성이 없는 무개성의 소년이 였다. \n하지만 누구보다 히어로를 동경했고 우연히 자신이 동경하던 No.1 히어로 올마이트를 만나 힘을 얻게 되 최고의 히어로 양성기관인 유에이 고등학교에 입학하게 된다…',
        image: `${Myhero}`,
        url1: 'https://laftel.net/item/27209/(%EC%9E%90%EB%A7%89)-%EB%82%98%EC%9D%98-%ED%9E%88%EC%96%B4%EB%A1%9C-%EC%95%84%EC%B9%B4%EB%8D%B0%EB%AF%B8%EC%95%84-1%EA%B8%B0',
        url2: 'https://www.netflix.com/kr/title/80135674' 
      },
      {
        id: "spyfamily",
        name: '스파이 패밀리',
        plot: '세계 평화를 위해 동국에서 첩보요원으로 어떤임무든지 완수해버리는 유능한 그 코드네임 "황혼" \n그런 그의 다음 지령은 "오퍼레이션 스트릭스"\n 가족을 만들어 명문학교에 잠입하여 데스몬드의 불온한 움직임은 살펴라! 그리고 세계를 지켜라!\n 그로 인해 구성된 가족 포쟈가(家)!\n 그러나 가족 구성이 심상치 않다. \n아빠(스파이) , 엄마(살인 청부업자) , 딸(초능력자) \n심상치 않는 비밀많은 가족의 이야기',
        image: `${Spyfamily}`,
        url1: 'https://laftel.net/item/40815/(%EC%9E%90%EB%A7%89)-%EC%8A%A4%ED%8C%8C%EC%9D%B4-%ED%8C%A8%EB%B0%80%EB%A6%AC-part-1',
        url2: 'https://www.netflix.com/kr/title/81511410' 
      },
      {
        id: "tokyo_g",
        name: '도쿄구울',
        plot: '사람을 주식으로 삼는 존재인 구울이 존재하는 세계.\n 카네키는 책 읽기를 좋아하는 평범한 대학생이다.\n 어느날 우연히 자신과 독서 취향이 같은 여자를 발견하고 용기를 내 그녀와 데이트를 하게 된다.\n 하지만 그녀는 구울 이였고 카네키는 위험에 빠지지만 운이 좋게 살아나게 된다.\n 병원에서 눈을 뜬 카네키, 하지만 그는 구울이 되어 있었다…',
        image: `${TokyoGhoul}`,
        url1: 'https://laftel.net/item/24007/%EB%8F%84%EC%BF%84-%EA%B5%AC%EC%9A%B8',
        url2: 'https://www.netflix.com/kr/title/80023687'
      },
      {
        id: "tokyo_re",
        name: '도쿄리벤저스',
        plot: '26세, 프리터로 살아가고 있는 하나가키 타케미치는 우연히 TV에서 중학교 시절 자신과 교제하던 타치바나 히나타가 도쿄만지회의 싸움에 휘말려 사망하게 되었다는 뉴스를 보게된다.\n 다음날 사고를 당한 타케미치는 눈을 떠보니 12년전 중학교 시절로 타임리프를 하게 된후 펼쳐지는 이야기.',
        image: `${TokyoRevengers}`,
        url1: 'https://laftel.net/item/40260/%EB%8F%84%EC%BF%84-%EB%A6%AC%EB%B2%A4%EC%A0%80%EC%8A%A4-part-1' 
      },
      {
        id: "tonari",
        name: '옆자리 괴물군',
        plot: '시즈쿠의 옆자리 요시다 하루는 입학 첫날부터 유혈사태를 일으켜 결석 중이다.\n 선생님의 부탁으로 하루에게 프린트를 가져다 준 시즈쿠…\n 이것을 계기로 하루에게 흥미를 사게 된다.\n 하루가 소문과 달리 순수하다는 걸 알게 된 시즈쿠는 하루를 친절히 대하게 되고 이에 하루가 시즈쿠에게 고백을 하는데…!',
        image: `${Tonari}`,
        url1: 'https://laftel.net/item/23313/%EC%98%86%EC%9E%90%EB%A6%AC-%EA%B4%B4%EB%AC%BC%EA%B5%B0' 
      },
    
]