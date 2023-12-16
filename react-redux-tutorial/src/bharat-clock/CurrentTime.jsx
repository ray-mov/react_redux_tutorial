let CurrentTime = () => {

    let time  = new Date();
    return <h1>Current Time : {time.toLocaleDateString()} -  {time.toLocaleTimeString()}</h1>
    }
    
    export default CurrentTime