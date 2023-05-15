class Word
{
    constructor(word,translation)
    {
        this.word = word;
        this.translation=translation;
    }
    display()
    {
        return `${this.word} : ${this.translation}.`
    }
}

class WordBank
{
    constructor()
    {
        this.words = [];
    }
    getAllWords = () => this.words;
    addNewBook = (word) => this.words.push(word);  

    updateWords = (word)=>{
        const index = this.words.indexOf(word);
        this.words.splice(index, 1, word);
    }

}

function $(id){
    return document.getElementById(id);
}