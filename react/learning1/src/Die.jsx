export default function Die({numSides = 6}) {
    
    let roll = Math.floor(Math.random() * numSides) + 1;
    return <p>Die roll {roll}</p>
}