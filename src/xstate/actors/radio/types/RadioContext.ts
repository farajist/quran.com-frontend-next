import { StationType } from 'src/components/Radio/types';

type RadioContext = {
  type: StationType;
  id?: string;
  reciterId?: string;
  chapterId?: string;
};

export default RadioContext;
