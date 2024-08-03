function handleCase(value) {
    switch (value) {
        case 'A':
            console.log("Case A");
            break;
        case 'B':
            console.log("Case B");
            break;
        // Trailing case
        default:
            console.log("Default case");
    }
}

handleCase('A'); // Output: Case A
handleCase('C'); // Output: Default case
