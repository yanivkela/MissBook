const { useState } = React

export function LongText({txt,length = 100}) {
    const [longView, setLongView] = useState(false)
    if (txt.length > length)  {
        var shortView = txt.substring(0, length)}
    return <section className="long-text">
        {txt.length < length && <p>{txt}</p>}
        {shortView && !longView && <p>{shortView} <span onClick={() => {setLongView(true)}}>...See more</span></p>}
        {shortView && longView && <p>{txt} <span onClick={() => {setLongView(false)}}>...See less</span></p>}
    </section>
}