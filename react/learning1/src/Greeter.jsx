export default function Greeter({person = "receiver", from = "sender"}){
    return (
    <>
            <h1>Hi there, {person}</h1>
            <h2>from {from}</h2>
    </>
)}