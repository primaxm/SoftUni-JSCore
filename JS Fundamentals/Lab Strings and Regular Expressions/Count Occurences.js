function countOccurences(word, text) {
    let count = 0;
    index = text.indexOf(word);
    if(index !== -1) count++;
    while (index !== -1) {
        index = text.indexOf(word, index+1);

        if(index !== -1) count++;
    }
    console.log(count);
}

countOccurences('the', 'the quick brown fox jumps over the lay dog.');
countOccurences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');