class ThirdBackTask {
  static expandString(input: string): string {
    const stack: (string | number)[] = [];
    let result = '';

    for (const char of input) {
      if (char === '}') {
        let inner = '';
        
        while (stack.length > 0 && stack[stack.length - 1] !== '{') {
            inner = stack.pop() + inner;
        }

        stack.pop(); // Pop '{'
        
        const count: number = Number(stack.pop());
        stack.push(inner.repeat(count));
      } else {
          stack.push(char);
      }
    }

    result = stack.join('');

    return result;
  }

  static getResult(str: string): string {
    let expandedString = str;

    for (let i = 0; i < 5; i++) {
        expandedString = this.expandString(expandedString);
    }

    return expandedString;
  }
}

const s: string = '2{4}3{23}';
console.log(ThirdBackTask.getResult(s)); // Output: '44232323'

const t: string = '4{93{2}}';
console.log(ThirdBackTask.getResult(t)); // Output: '9222922292229222'
