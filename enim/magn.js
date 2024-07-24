function mergeConsecutiveDialogues(dialogues) {
    if (dialogues.length === 0) return [];

    let mergedDialogues = [];
    let currentSpeaker = dialogues[0].speaker;
    let currentDialogue = dialogues[0].dialogue;

    for (let i = 1; i < dialogues.length; i++) {
        if (dialogues[i].speaker === currentSpeaker) {
            currentDialogue += ' ' + dialogues[i].dialogue; // Merge dialogues
        } else {
            mergedDialogues.push({ speaker: currentSpeaker, dialogue: currentDialogue });
            currentSpeaker = dialogues[i].speaker;
            currentDialogue = dialogues[i].dialogue;
        }
    }

    // Push the last merged dialogue
    mergedDialogues.push({ speaker: currentSpeaker, dialogue: currentDialogue });

    return mergedDialogues;
}

// Example usage:
const dialogues = [
    { speaker: 'Alice', dialogue: 'Hello, how are you?' },
    { speaker: 'Alice', dialogue: 'I hope you are doing well.' },
    { speaker: 'Bob', dialogue: 'Hi Alice, I\'m good. How about you?' },
    { speaker: 'Alice', dialogue: 'I\'m great, thank you!' }
];

const merged = mergeConsecutiveDialogues(dialogues);
console.log(merged);
