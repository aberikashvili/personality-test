import Answer from './Answer';

class Question {
  constructor(public id: number, public question: string, public answers: Answer[]) {}
}

export default Question;
