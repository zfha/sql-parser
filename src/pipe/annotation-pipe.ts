import Token from '../token';
import Pipe from './pipe';
import { TokenEnum } from '../token-enum';

class AnnotationPipe implements Pipe {
  getToken(content: string, lastToken?: Token): Token {
    const regex = new RegExp(/^\/\*.*?(?:\*\/|$)/);
    const matchs = content.match(regex);
    if (matchs) {
      return new Token(
        TokenEnum.ANNOTAION,
        matchs[0],
        TokenEnum.ANNOTAION.toString()
      );
    }
    return null;
  }
}

export default AnnotationPipe;
