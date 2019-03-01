import Token from '../token';
import Pipe from './pipe';
import { TokenEnum } from '../token-enum';

class LexPipe implements Pipe {
  getToken(content: string, lastToken?: Token): Token {
    const regex = new RegExp(/^(\S)*/);
    const matchs = content.match(regex);
    if (matchs) {
      return new Token(TokenEnum.LEX, matchs[0], TokenEnum.LEX.toString());
    }
    return null;
  }
}

export default LexPipe;
