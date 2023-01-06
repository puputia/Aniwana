
// amsal,0
// deathnote,1
// evangelion,2
// haikyu,3
// jujustsu_kaisen,4
// kaguya,5
// lovelive,6
// myhero,7
// spyfamily,8
// tokyo_g,9
// tokyo_re,10
// toradora,11


export const QuestionData = [
  {
    q: 'Q1. 평소 즐겨보는 애니메이션 장르는 무엇인가요?',
    a: [
      { answer: 'a. sf/판타지/어드벤쳐', type: [0, 2, 4, 7] },
      { answer: 'b. 멜로/로맨스/코미디', type: [5, 8, 11] },
      { answer: 'c. 범죄/스릴러/미스터리', type: [1, 9, 10] },
      { answer: 'd. 학원/스포츠물/아이돌', type: [3, 6] },
    ]
  },
  {
    q: 'Q2. 어떤 스토리를 선호 하시나요? ',
    a: [
        { answer: 'a. 주인공이 점점 강해지는 스토리', type: [7, 4, 3] },
        { answer: 'b. 나의 멘탈을 시험하는 스토리', type: [2, 9] },
        { answer: 'c. 보기만 해도 힐링이 되는 스토리', type: [8, 6, 5, 11] },
        { answer: 'd. 치밀한 복선 회수가 매력인 스토리', type: [0, 1, 10] },
    ]
  },
  {
    q: 'Q3. 어떤 그림체를 선호하시나요?',
    a: [
        { answer: 'a. 따뜻한 그림체', type: [5, 6, 8] },
        { answer: 'b. 소년만화체', type: [0, 7, 10] },
        { answer: 'c. 고전 그림체', type: [2, 1, 11] },
        { answer: 'd. 선이 굵고 강한 그림체', type: [3, 4, 9] },
    ]
  },
  {
    q: 'Q4. 어떤 캐릭터를 선호하시나요?',
    a: [
        { answer: 'a. 바보같지만 동료를 누구보다 아끼는 열혈 캐릭터', type: [1, 2, 4, 9] },
        { answer: 'b. 뛰어난 두뇌로 치밀한 두뇌싸움을 통해 문제를 해결하는 캐릭터', type: [0, 3, 6, 5, 10, 8] },
        { answer: 'c. 어딘가 사연이 있어 보이는 캐릭터', type: [7, 11 ] },
        { answer: 'd. 바라만 봐도 귀여운 캐릭터', type: [6, 8,11 ] },
    ]
  },
  {
    q: 'Q5. 어떤 엔딩을 선호 하시나요?',
    a: [
        { answer: 'a. 모두가 행복한 해피엔딩', type: [1, 2, 4, 9] },
        { answer: 'b. 눈물 나는 새드엔딩', type: [0, 3, 6, 5, 10, 8] },
        { answer: 'c. 불행한 결말을 맞는 베드엔딩', type: [7, 11 ] },
        { answer: 'd. 독자의 상상에 맡기는 열린결말', type: [7, 11 ] },
    ]
  },

  {
    q: 'Q6. 내가 선호하는 애니 분량은?',
    a: [
        { answer: 'a. 극장판까지 정주행 해야하는 애니메이션', type: [4, 2, 6] },
        { answer: 'b. 가볍게 볼 수 있는 애니메이션', type: [0,11] },
        { answer: 'c. 보려면 마음의 결심이 필요한 애니메이션', type: [3, 1, 9] },
        { answer: 'd. 아직 완결이 안난 애니메이션', type: [8, 10, 5, 7 ] },
    ] 
  },
  
]