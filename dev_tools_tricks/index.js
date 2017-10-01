    const dogs = [
        { name: 'Snickers', age: 2 }, 
        { name: 'hugo', age: 8 }
    ];

    let p = document.querySelector('p');

    let makeItGreen = () => {
        p.style.color = '#bada55';
        p.style.fontSize = '24px';
    }

    p.addEventListener('click', makeItGreen)

    // Regular
    // Interpolated
    // Styled
    console.log('%c I am grut 🗣', 'font-size: 24px; background: crimson')
    // warning!
    // Error :|
    // Info
    // Testing
    // clearing
    // Viewing DOM Elements
    // Grouping together
    dogs.forEach(dog => {
        console.group(`${dog.name}`);
            console.log(`dog's name is: ${dog.name}`);
            console.log(`dog's age is: ${dog.age}`);
        console.groupEnd(`${dog.name}`);
    });

    // counting
    // timing

    console.time('fetching data');
    fetch('https://api.github.com/users/bigjey')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        })