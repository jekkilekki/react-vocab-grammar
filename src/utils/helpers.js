export function generateID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function generateShortId( base = '' ) {
  return base + Math.random().toString(36).substring(2,5) + Math.random().toString(36).substring(2,5)
}

export function createArraySubsets( array, size ) {
  let subsets = []

  while ( array.length > 0 ) 
    subsets.push( array.splice(0, size))

  return subsets
}

export const sampleData = [
  {
    english: "butterfly",
    id: "erkoce4qtpffo5qwlysvw",
    imageUrl: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
    korean: "나비",
    radioSelected: "noun-radio",
  },
  {
    english: "Elephant",
    id: "kcshf85iao7tevsjw2f58",
    imageUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1194,w_2119,x_0,y_166/f_auto,q_auto,w_1100/v1554917073/shape/mentalfloss/86712-istock-503686732.jpg",
    korean: "코끼리",
    level: "a",
    radioSelected: "noun-radio",
    sentences: [
      {
        id: "sentence(s)0",
        value: "코끼리의 코는 손이에요."
      }
    ]
  },
  {
    english: "dolphin",
    id: "ayjclyjwpmmvnu00yd3owd",
    imageUrl: "https://live.staticflickr.com/213/458562896_b2844fa971_z.jpg",
    korean: "돌고래",
    level: "a",
    radioSelected: "noun-radio",
  },
  {
    english: "bee",
    id: "kxlba0pa5kimymxastq7f",
    imageUrl: "https://cdn.pixabay.com/photo/2018/04/07/12/25/bee-3298375_960_720.jpg",
    korean: "벌",
    radioSelected: "noun-radio",
  },
  {
    english: "wolf",
    id: "xq2g6k69y4qmznan9zz98c",
    imageUrl: "https://cdn.pixabay.com/photo/2018/11/15/22/52/wolf-3818343_960_720.jpg",
    korean: "늑대",
    level: "a",
    radioSelected: "noun-radio",
  },
  {
    english: "tiger",
    id: "th351q3b7rnhb7lczhw5bt",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Siberischer_tiger_de_edit02.jpg/800px-Siberischer_tiger_de_edit02.jpg",
    korean: "호랑이",
    radioSelected: "noun-radio",
  },
  {
    english: "puppy",
    id: "8vrdifotlt8ekv584brl09",
    imageUrl: "https://cdn.pixabay.com/photo/2019/05/14/18/48/dog-4203154_960_720.jpg",
    korean: "강아지",
    radioSelected: "noun-radio",
  },
  {
    english: "lion",
    id: "7vubkq6gafka2g27su6kt",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkBJnY-xi7de5AqDz5Fn_6cJ2YVYczIjAq7yFTw3hOZndFoIEZA",
    korean: "사자",
    radioSelected: "noun-radio",
  },
  {
    english: "camel",
    id: "4357mmitzlru833pjftn6f",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6pYN7J_Co15POjehRGIhYjDKiwAztPY3ArxqorXRU9roUXU7qA",
    korean: "낙타",
    radioSelected: "noun-radio",
  },
  {
    english: "gorilla",
    id: "vrdvjv9yrir4xmk9a34mdi",
    imageUrl: "https://cdn.pixabay.com/photo/2018/05/04/12/13/gorilla-3373856_960_720.jpg",
    korean: "고릴라",
    radioSelected: "noun-radio",
  }
]

export const levelsVocab = [
  { id: 'none', value: '', name: 'Select Level' },
  { id: 'a', value: 'a', name: 'Beginner' },
  { id: 'b', value: 'b', name: 'Intermediate' },
  { id: 'c', value: 'c', name: 'Advanced' }
]

export const levelsGrammar = [
  { id: 'none', value: '', name: 'Select Level' },
  { id: 'a', value: 'a', name: 'True Beginner' },
  { id: 'b', value: 'b', name: 'Beginner' },
  { id: 'c', value: 'c', name: 'Low Intermediate' },
  { id: 'd', value: 'd', name: 'Intermediate' },
  { id: 'e', value: 'e', name: 'High Intermediate' },
  { id: 'f', value: 'f', name: 'Advanced' }
]

/* 
  https://www.koreanclass101.com/forum/viewtopic.php?t=3032 
  https://www.dickgrune.com/NatLang/Korean/Lee_Chul_Young,Korean_Grammar_Textbook,indexed.pdf
*/
export const vocabPartsOfSpeech = [
  { id: 'noun', name: 'Noun', korean: '명사' },
  { id: 'pronoun', name: 'Pronoun', korean: '대명사' },
  { id: 'verb', name: 'Verb', korean: '동사' },
  { id: 'adj', name: 'Adjective', korean: '형용사' },
  { id: 'adv', name: 'Adverb', korean: '부사' },
  { id: 'num', name: 'Numeral', korean: '수사' },
  { id: 'pnoun', name: 'Proper Noun', korean: '고유명사' },
  { id: 'prenoun', name: 'Pre-noun', korean: '관형사' },
  { id: 'postpos', name: 'Postposition', korean: '조사' },
  { id: 'int', name: 'Interjection', korean: '감탄사' },
]

export const grammarPartsOfSpeech = [
  { id: 'noun', name: 'Noun', abrv: 'N' },
  { id: 'verb', name: 'Verb', abrv: 'V' },
  { id: 'adj', name: 'Adjective', abrv: 'A' }
]

export function getPartOfSpeech( type, data = null ) {
  if ( data !== null ) {
    if ( type === 'radio' ) {
      return vocabPartsOfSpeech.find(item => (
        item.id === data.split('-')[0]
      )).korean
    } else if ( type === 'checkbox' ) {
      return data.map(item => (
        grammarPartsOfSpeech.find(i => (
          i.id === item.split('-')[0]
        )).abrv
      ))
    } else return null
  } else return null
}