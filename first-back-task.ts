class FirstBackTask {
  static getResult(actions: string[]): number | string {
    if (actions.length < 3 || actions.length > 50) {
      return 'Неверная длина массива';
    }

    const sequence = ['start', 'connect', 'message', 'end'];
    let sessionCount = 0;

    let currentIndex = 0;  // Текущий индекс ожидаемой команды в последовательности
    let inSession = false;

    for (const action of actions) {
      if (action === sequence[currentIndex]) {
        if (currentIndex === 0) {
          inSession = true;
        
        } else if (currentIndex === 3) {
          sessionCount++;
          inSession = false;
        }
        
        currentIndex = (currentIndex + 1) % 4; // Переходим к следующему индексу в последовательности
      } else if (inSession) {
        // Если мы находимся в сессии и получили неверную команду, считаем сессию ошибочной
        inSession = false;
        currentIndex = 0;
      }
    }

    return sessionCount;
  }
}

const actions1: string[] = ['start', 'connect', 'message', 'end'];
console.log(FirstBackTask.getResult(actions1)); // Output: 1

const actions2: string[] = ['start', 'connect', 'message', 'end', 'start', 'connect', 'message', 'end', 'start', 'connect', 'message'];
console.log(FirstBackTask.getResult(actions2)); // Output: 2
