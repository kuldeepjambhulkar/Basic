export default User = (props) => {
    return<>
        <div className="user">
            <h2>{props.name}</h2>
            <h2>{props.location}</h2>
        </div>
    </>
}