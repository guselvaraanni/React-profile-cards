const userData = [
    {
        name: "Raanni Gunaseelan",
        city: "Dindigul",
        description: "Full stack web developer",
        skills: ["UI/UX", "MongoDb", "React", "MySQL", "Html", "CSS", "Flask Framework"],
        online: false,
        profile: "./images/profile_card_1.jpg"
    },
    {
        name: "Jai Sooryah",
        city: "Chennai",
        description: "Frontend developer",
        skills: ["UI/UX", "MongoDb", "React", "MySQL", "Html", "CSS", "Flask Framework"],
        online: false,
        profile: "./images/profile_card_2.jpg"
    },
    {
        name: "Nivina",
        city: "Chennai",
        description: "Backend developer",
        skills: ["UI/UX", "MongoDb", "React", "MySQL", "Html", "CSS", "Flask Framework"],
        online: false,
        profile: "./images/profile_card_3.jpg"
    }
];

function User(props) {
    return (
        <div className="container">
            <span className={props.online ? "status online" : "status offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
            <img src={props.profile} alt="user 1" className="img" />
            <h1>{props.name}</h1>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className="button">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
               <ul> {props.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}</ul>

            </div>
        </div>
    );

}
export const UserCadrs = () => {
    return (
        <>
        {userData.map((user,index) => (
            <User key={index}  
            name={user.name}
            city={user.city}
            description={user.description}
            online={user.online}
            profile={user.profile}
            skills={user.skills}
            />
        ))}
        </>
    )
}

