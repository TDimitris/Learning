export default function Slots({value1,value2,value3}){
    const isWinner = value1 === value2 && value1 === value3;
    
    return (

        <>
            <h1>
                {value1} {value2} {value3}
            </h1>
            <h2 style={{color: isWinner ? "green" : "red"}}>
                {isWinner ? "You win!!" : "You lose :("}
            </h2>
            
            {isWinner && <h3>
                Congratulations!
            </h3>}
        </>


    )
}