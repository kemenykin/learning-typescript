var userInput;
userInput = 'Kinga';
userInput = 5;
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError('An error occured', 500);
