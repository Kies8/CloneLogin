import './Title.css'

const Title = (props) => {
    return (
        <>
            <header className='login'>
                <div>
                    <h1>{props.title}</h1>
                </div>
            </header>
            <div>
                <h3>{props.subtitle}</h3>
            </div>
        </>
    )
}

export default Title