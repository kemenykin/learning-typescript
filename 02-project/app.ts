let userInput: unknown;
userInput = 'Kinga';
userInput = 5;

function generateError(message: string, code: number) {
    throw {message: message, code: code};
}

generateError('An error occured', 500);
