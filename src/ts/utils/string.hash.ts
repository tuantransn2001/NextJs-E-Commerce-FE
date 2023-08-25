import * as bcrypt from 'bcrypt';

class HashStringHandler {
  public static async hash(str: string, saltRounds: number) {
    return await bcrypt.hashSync(str, saltRounds);
  }
  public static async verify(plainStr: string, hashedStr: string) {
    return await bcrypt.compareSync(plainStr, hashedStr);
  }
}

export default HashStringHandler;
