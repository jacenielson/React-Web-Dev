export function ReverseText({theText}: {theText: string}){
    const reversed = theText.split("").reverse().join("")
    return <div>{reversed}</div>
}