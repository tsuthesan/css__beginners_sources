let a = 2 + 6; // =  // let a = 4;

switch (a) {
    case 3:
        document.write('Too small');
        break;
    case 4:
        document.write('Exactly!' + '<br/>');
        break;
    case 5:
        document.write('Too large' + '<br/>');
        break;
    default:
        document.write("I don't know such values");
}