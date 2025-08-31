import "../css/FrontPage.css"

export function FrontPage()
{
    return (
        <>
        <div className="frontpage-container">
            <h1 className="heading">Welcome! 
                Register your visit here</h1>
            <div className="content">
                <input placeholder="Enter your full name.."></input>
                <input placeholder="Enter your email.."></input>
                <button className="check-in-button">Check In!</button>
            </div>
        </div>
        </>
    )
}