export function generateID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function generateShortId( base = '' ) {
  return base + Math.random().toString(36).substring(2,5) + Math.random().toString(36).substring(2,5)
}

export const levelsVocab = [
  { id: 'none', value: 'none', name: 'Select Level' },
  { id: 'a', value: 'a', name: 'Beginner' },
  { id: 'b', value: 'b', name: 'Intermediate' },
  { id: 'c', value: 'c', name: 'Advanced' }
]

export const levelsGrammar = [
  { id: 'none', value: 'none', name: 'Select Level' },
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

export function getPartOfSpeech( type, data ) {
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
    }
  }
}