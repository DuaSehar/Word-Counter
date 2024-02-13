import inquirer from 'inquirer';
async function wordCounter() {
    const questions = [
        {
            type: 'input',
            name: 'paragraph',
            message: 'Enter a paragraph:'
        }
    ];
    const { paragraph } = await inquirer.prompt(questions);
    const countWordsAndCharacters = (text) => {
        const words = text.split(/\s+/).filter(word => word !== '');
        const wordCount = words.length;
        const characterCount = words.join('').length;
        return { wordCount, characterCount };
    };
    const { wordCount, characterCount } = countWordsAndCharacters(paragraph);
    console.log(`Character count (without whitespace): ${characterCount}`);
    console.log(`Word count: ${wordCount}`);
}
// Call the function to start the word counter
wordCounter();
