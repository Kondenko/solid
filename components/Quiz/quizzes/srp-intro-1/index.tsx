import { IQuiz } from '../IQuiz'

const quiz: IQuiz = {
  name: 'srp-intro-1',
  question: 'В чём заключается суть принципа единой ответственности?',
  variants: [
    {
      text: 'Разделять слишком большие модули на маленькие, компактные',
      description:
        'Иногда приходится объединять код, меняющийся по одной причине вместе, тогда модули могут стать больше'
    },
    {
      text: 'Объединять код, который меняется по одной причине, от того, который меняется по другой'
    },
    {
      text: 'Проводить границы между модулями по принципу одна функция на файл, один класс на файл и т.д.',
      description:
        'Не всегда один модуль — это одна функция; если несколько функций меняются по одной причине, они должны быть в одном модуле'
    }
  ],
  meta: {
    correctAnswers: [1]
  }
}

export default quiz
