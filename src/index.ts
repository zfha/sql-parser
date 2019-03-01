import AnnotationPipe from './pipe/annotation-pipe';
import BlankPipe from './pipe/blank-pipe';
import KeywordPipe from './pipe/keyword-pipe';
import SymbolPipe from './pipe/symbol-pipe';
import LexPipe from './pipe/lex-pipe';
import Token from './token';
import { TokenEnum } from './token-enum';
import Pipe from './pipe/pipe';

class Lex {
  tokens: Token[];
  pipes: Pipe[] = [
    new BlankPipe(),
    new AnnotationPipe(),
    new KeywordPipe(),
    new SymbolPipe(),
    new LexPipe()
  ];

  constructor() {}

  parse(sql: string) {
    let lastToken;
    this.tokens = [];
    while (sql) {
      let token;
      for (let pipe of this.pipes) {
        token = pipe.getToken(sql, lastToken);
        if (token) {
          this.tokens.push(token);
          lastToken = token;
          let tokenLen = token.value.length;
          sql = sql.substr(tokenLen, sql.length - tokenLen);
          break;
        }
      }
    }

    console.log(this.tokens);
  }
}

new Lex().parse('select * from abc');
