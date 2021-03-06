/**
 * @author Sean sean.snow@live.com
 * @date 2015/12/27
 */
export class Arrays {

  static copyOf(original: Array<any>, newLength: number): Array<any> {
    let copy = new Array(newLength);
    Arrays.arraycopy(original, 0, copy, 0, Math.min(original.length, newLength));
    return copy;
  }

  static arraycopy(src: Array<any>, srcPos: number, dest: Array<any>, destPos: number, length: number) {
    let tmp = src.slice(srcPos);
    for (let i = destPos; i < destPos + length; i++) {
      dest[i] = tmp[i - destPos];
    }
  }

}

