import Question from './Question';

class Test {
  constructor(
    public id: number,
    public title: string,
    public caption: string,
    public coverImageUri: string,
    public questions: Question[]
  ) {}
}

export default Test;
